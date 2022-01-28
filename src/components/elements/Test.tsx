import { useState } from "react";
import cn from "clsx";
import "./Test.scss";
import Button from "../common/Button";
import { IAnswerObject } from "../../constants/types";

interface ITest {
  data: any;
}

function Test({ data }: ITest) {
  const [answerId, setAnswerId] = useState<number | null>(null);
  const [answers, setAnswer] = useState<IAnswerObject[] | []>([]);

  // window.onbeforeunload = function () {
  //   if (answers.length !== 0) {
  //     return true;
  //   } else {
  //     return null;
  //   }
  // };

  const handleSetAnswerId = (id: any) => {
    if (id === answerId) {
      setAnswerId(null);
    } else {
      setAnswerId(id);
    }
  };

  const handleAddAnswer = (id: number, answer: string) => {
    let value: IAnswerObject | undefined = answers.find(
      (answer: IAnswerObject) => answer.id === id
    );
    if (!value) {
      setAnswer([...answers, { id, answer }]);
    } else if (value.answer !== answer) {
      let newAnswersArray = answers.filter((answer) => answer.id !== value?.id);
      setAnswer([...newAnswersArray, { id, answer }]);
    }
  };

  const handleSubmitTest = () => {
    answers.length === data.length
      ? console.log("OVER", answers)
      : console.log("Ответьте на все вопросы");
  };

  const renderData = () =>
    data.map((item: any, index: number) => (
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
            Ответил(а) верно
          </label>
          <label className="Test-UserAnswer">
            <input
              type="radio"
              name={`radio-${index}`}
              value="no"
              className="Test-RadionButton"
            />
            Ответил(а) неверно
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
      <Button title="Закончить тест" onClick={() => console.log("submit")} />
    </div>
  );
}

export default Test;
