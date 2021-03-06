import { useState } from "react";
import { useBeforeunload } from "react-beforeunload";
import cn from "clsx";
import "./Test.scss";
import Button from "../common/Button";
import { IAnswerObject, IQuestionObject } from "../../constants/types";
import Dialog from "../common/Dialog";
import { DialogTypes } from "../../enums/testEnums";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import { addAnswer } from "../../redux/testSlice";

interface ITest {
  data: IQuestionObject[] | null;
  answers: IAnswerObject[] | [];
  setDone: (isDone: boolean) => void;
  addAnswer: (answer: IAnswerObject) => void;
}

function Test({ data, answers, setDone, addAnswer }: ITest) {
  const [answerId, setAnswerId] = useState<number | null>(null);
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

  useBeforeunload((e: any) => {
    if (answers.length !== 0) {
      e.preventDefault();
    }
  });

  const handleSetAnswerId = (id: number) => {
    if (id === answerId) {
      setAnswerId(null);
    } else {
      setAnswerId(id);
    }
  };

  const handleAddAnswer = (id: number, answer: string) => {
    addAnswer({ id, answer });
  };

  const handleDialogToggle = () => setDialogOpen(!isDialogOpen);

  const handleSubmitTest = () => {
    if (answers.length === data?.length) {
      setDone(true);
    } else {
      setDialogOpen(!isDialogOpen);
    }
  };

  const renderData = () =>
    data?.map((item: IQuestionObject, index: number) => (
      <li className="Test-ListItem" key={index}>
        <div className="Test-Question">
          <span className="Test-QuestionNumber">{index + 1}.</span>{" "}
          <span className="Test-QuestionTheme">
            {item.block}. {item.topic}
          </span>
          <p>{item.question}</p>
        </div>
        <form
          className="Test-UserAnswerBlock"
          onChange={(e: any) => handleAddAnswer(item.id, e.target.value)}
        >
          <label className="Test-UserAnswer">
            <input
              type="radio"
              name={`radio-${index}`}
              value="yes"
              className="Test-RadionButton"
            />
            ????????
          </label>
          <label className="Test-UserAnswer">
            <input
              type="radio"
              name={`radio-${index}`}
              value="no"
              className="Test-RadionButton"
            />
            ???? ????????
          </label>
        </form>
        <div className="Test-AnswerBlock">
          <div
            className={cn(`Test-StyledAnswerDiv`, {
              "Test-StyledAnswerDiv_fullHeight": answerId === item.id,
            })}
          />
          <button
            className="Test-ShowButton"
            onClick={() => handleSetAnswerId(item.id)}
          >
            ???????????????? ??????????
          </button>
          <div
            className={cn(`Test-Answer`, {
              "Test-Answer_opened": answerId === item.id,
            })}
          >
            {typeof item.answer === "string" ? (
              <p>{item.answer}</p>
            ) : (
              item.answer?.map((answerItem: string, index: number) => (
                <p key={index}>{answerItem}</p>
              ))
            )}
          </div>
        </div>
      </li>
    ));

  return (
    <div className="Test">
      <ul>{renderData()}</ul>
      <Button title="?????????????????? ????????" onClick={handleSubmitTest} />
      <Dialog
        isOpen={isDialogOpen}
        type={DialogTypes.ERROR}
        text="??????????????????, ????????????????????, ?????? ????????????"
        onClose={handleDialogToggle}
      />
    </div>
  );
}

const mapStateToProps = ({ test }: RootState) => ({
  answers: test.answers,
});

const mapDispatchToProps = {
  addAnswer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
