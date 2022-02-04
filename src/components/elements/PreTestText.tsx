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
  "Этот тест как билеты на экзамене, но контроль остаётся за студентом.",
  "Необходимо ответить на каждый вопрос и проверить верный ли был ответ (его можно поменять).",
  "Все вопросы, на которые ответ был 'нет', после прохождения теста будут отображены вместе со ссылкой на соответствующую тему.",
  "Поэтому, если хочется повторить вопрос, то можно отметить, что ответ не знаешь.",
  "Искренне верю, что ты будешь честен прежде всего перед самим собой",
  "Удачи!",
];

// [
//   "Он отличается от тех, к которым мы привыкли. Этот тест скорее похож на билет, где контроль ответов остаётся за студентом.",
//   "Когда появится вопрос, необходимо будет отметить знаешь ответ или нет. Нужно хорошо подумать и ответить самому себе как можно более развёрнуто, вспомнить каке-то детали, которые относятся к вопросу.",
//   "После выбора появится блок содержащий ответ на главный вопрос. Если оказалось, что ответ был неверный или хочется повторить этот вопрос в конце, можно поменять ответ. И вот зачем:",
//   "После прохождения теста я покажу результат на основе выбранных ответов. Ниже выведу все вопросы, в которых была “допущена ошибка” и прикреплю ссылку на эту тему.",
//   "Искренне верю, что ты будешь честен в первую очередь с самим собой, как минимум потому, что здесь соревноваться не с кем, кроме самого себя.",
//   "Главные цели теста - контроль знаний и помощь в становлении разработчиком.",
// ];

const amountValues: number[] = [3, 30, 45, 60];

function PreTestText({ testName, handleClick, onSetAmount }: IPreTestText) {
  const [isOpened, setOpened] = useState(false);

  const js = testName === TestNames.JavaScript;
  const react = testName === TestNames.React;
  const patterns = testName === TestNames.Patterns;
  // const redux = testName === TestNames.Redux;

  const handleOpenRules = () => setOpened(!isOpened);

  const renderTextParagraphs = () =>
    textParagraphs.map((paragraph: string, index: number) => (
      <>
        <p key={index} className="PreTestText-RulesText">
          {paragraph}
        </p>
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
          1. Правила теста (рекомендую хотя бы раз изучить)
        </button>
        {isOpened && (
          <div className="PreTestText-Rules">{renderTextParagraphs()}</div>
        )}
      </div>
      <p>2. Сколько вопросов показать?</p>
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
              : patterns
              ? "https://refactoring.guru/ru/design-patterns"
              : "https://redux.js.org/"
          }
          className="PreTestText-Link"
        >
          {js
            ? "JavaScript"
            : react
            ? "React"
            : patterns
            ? "Refactoring Guru"
            : "Redux"}
        </a>
      </p>
      <Button title="Начать тест" onClick={handleClick} />
    </>
  );
}

export default PreTestText;
