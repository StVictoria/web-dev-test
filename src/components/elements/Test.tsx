import { useState } from "react";
import cn from "clsx";
import "./Test.scss";
import Button from "../common/Button";

interface ITest {
  data: any;
}

function Test({ data }: ITest) {
  const [answerId, setAnswerId] = useState<number | null>(null);
  const [answers, setAnswer] = useState<number[]>([]);

  const handleSetAnswerId = (id: any) => {
    if (id === answerId) {
      setAnswerId(null);
    } else {
      setAnswerId(id);
    }
  };

  const handleAddAnswer = (id: any) => {
    answers.filter((answer: any) => answer === id).length === 0 &&
      setAnswer([...answers, id]);
  };

  const handleSubmitTest = () => {
    answers.length === data.length
      ? console.log("OVER")
      : console.log("Ответьте на все вопросы");
  };

  const renderData = () =>
    data.map((item: any, index: number) => (
      <li className="Test-ListItem" key={item.id}>
        <div className="Test-Question">
          <span className="Test-QuestionNumber">{index + 1}.</span>{" "}
          <span className="Test-QuestionTheme">
            {item.block}. {item.topic}
          </span>
          <p>{item.question}</p>
        </div>
        <div
          className="Test-UserAnswerBlock"
          onChange={() => handleAddAnswer(item.id)}
        >
          <label className="Test-UserAnswer">
            <input
              type="radio"
              name={`radio-${index}`}
              className="Test-RadionButton"
            />
            Ответил(а) верно
          </label>
          <label className="Test-UserAnswer">
            <input
              type="radio"
              name={`radio-${index}`}
              className="Test-RadionButton"
            />
            Ответил(а) неверно
          </label>
        </div>
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
              item.answer.map((answerItem: string, index: number) => (
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
    </div>
  );
}

export default Test;
