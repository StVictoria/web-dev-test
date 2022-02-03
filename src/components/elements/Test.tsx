import { useState } from "react";
import { useBeforeunload } from "react-beforeunload";
import cn from "clsx";
import "./Test.scss";
import Button from "../common/Button";
import { IAnswerObject, IQuestionObject } from "../../constants/types";
import Dialog from "../common/Dialog";
import { DialogTypes } from "../../enums/testEnums";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { addAnswer } from "../../redux/testSlice";

interface ITest {
  data: IQuestionObject[] | null;
  setStarted: (isStarted: boolean) => void;
  setDone: (isDone: boolean) => void;
}

function Test({ data, setStarted, setDone }: ITest) {
  const [answerId, setAnswerId] = useState<number | null>(null);
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

  const answers = useSelector(({ test }: RootState) => test.answers);
  const dispatch = useDispatch();

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
    dispatch(addAnswer({ id, answer }));
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
            Знаю ответ
          </label>
          <label className="Test-UserAnswer">
            <input
              type="radio"
              name={`radio-${index}`}
              value="no"
              className="Test-RadionButton"
            />
            Не знаю ответ
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
            Показать ответ
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
      <Button title="Закончить тест" onClick={handleSubmitTest} />
      <Dialog
        isOpen={isDialogOpen}
        type={DialogTypes.ERROR}
        text="Заполните, пожалуйста, все ответы"
        onClose={handleDialogToggle}
      />
    </div>
  );
}

export default Test;
