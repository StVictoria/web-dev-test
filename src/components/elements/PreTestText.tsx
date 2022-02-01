import Button from "../common/Button";
import "./PreTestText.scss";
// import RocketImg from "../../assets/images/shuttle.png";
import { TestNames } from "../../enums/testEnums";
import { SyntheticEvent, useState } from "react";

interface IPreTestText {
  testName: string;
  handleClick: () => void;
  onSetAmount: (e: SyntheticEvent) => void;
}

const textParagraphs: string[] = [
  "Он отличается от тех, к которым мы привыкли. Этот тест скорее похожи на билет, где контроль ответов остаётся за студентом.",
  "Когда появится вопрос, необходимо будет отметить знаешь ты ответ или нет. Хорошо подумай и ответь сам себе как можно более развёрнуто, вспомни каке-то детали, которые относятся к вопросу.",
  "После выбора появится блок содержащий ответ на главный вопрос. Если ты понимаешь, что ответил неверно или хотел бы повторить этот вопрос в конце, можно поменять ответ. И вот зачем:",
  "После прохождения теста я покажу результат на основе твоего выбора. Ниже выведу все вопросы, в которых была “допущена ошибка” и прикреплю ссылку на эту тему.",
  "Искренне верю, что ты будешь честен в первую очередь с самим собой, как минимум потому, что здесь соревноваться не с кем, кроме самого себя.",
  "Главные цели теста - контроль знаний и помощь в становлении разработчиком.",
];

const amountValues: number[] = [15, 30, 45, 60];

function PreTestText({ testName, handleClick, onSetAmount }: IPreTestText) {
  const [isOpened, setOpened] = useState(false);

  const js = testName === TestNames.JavaScript;
  const react = testName === TestNames.React;
  // const redux = testName === TestNames.Redux;

  const handleOpenRules = () => setOpened(!isOpened);

  const renderTextParagraphs = () =>
    textParagraphs.map((paragraph: string, index: number) => (
      <>
        <p key={index}>{paragraph}</p>
        <hr />
      </>
    ));

  const renderAmountChoice = () =>
    amountValues.map((item: number, index: number) => (
      <label key={item} className="PreTest-Amount">
        <input type="radio" name="radio-amount" value={item} />
        {item}
      </label>
    ));

  return (
    <>
      <div className="PreTestText">
        <button onClick={handleOpenRules}>
          1. Ознакомься с правилами теста
        </button>
        {isOpened && (
          <div className="PreTestText-Rules">{renderTextParagraphs()}</div>
        )}
      </div>
      <p>2. Выбери необходимое количество вопросов:</p>
      <div className="PreTest-Amount" onChange={(e) => onSetAmount(e)}>
        {renderAmountChoice()}
      </div>
      <p className="PreTestText-DocsInfo">
        Тест создан на основе документации с сайта{" "}
        <a
          href={
            js
              ? "https://learn.javascript.ru/"
              : react
              ? "https://reactjs.org/"
              : "https://redux.js.org/"
          }
          className="PreTestText-Link"
        >
          {js ? "JavaScript" : react ? "React" : "Redux"}
        </a>
      </p>
      <Button title="Начать тест" onClick={handleClick} />
    </>
  );
}

export default PreTestText;
