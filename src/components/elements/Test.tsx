import { useState } from "react";
import cn from "clsx";
import "./Test.scss";
import Button from "../common/Button";

interface ITest {
  data: any;
}

function Test({ data }: ITest) {
  const [answerId, setAnswerId] = useState(null);

  const handleSetAnswerId = (id: any) => {
    if (id === answerId) {
      setAnswerId(null);
    } else {
      setAnswerId(id);
    }
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
        <div className="Test-UserAnswerBlock">
          <label className="Test-UserAnswer">
            <input
              type="radio"
              name={`radio-${index}`}
              className="Test-RadionButton"
            />
            Знаю
          </label>
          <label className="Test-UserAnswer">
            <input
              type="radio"
              name={`radio-${index}`}
              className="Test-RadionButton"
            />
            Не знаю
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
            {item.answer}
          </div>
        </div>
      </li>
    ));

  return (
    <div className="Test">
      <ul>{renderData()}</ul>
      <Button title="Закончить тест" onClick={() => console.log("OVER")} />
    </div>
  );
}

export default Test;
