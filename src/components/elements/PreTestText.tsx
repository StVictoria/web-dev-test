import Button from "../common/Button";
import "./PreTestText.scss";
// import RocketImg from "../../assets/images/shuttle.png";
import { TestNames } from "../../enums/testNames";

interface IPreTestText {
  testName: string;
  handleClick: () => void;
  onSetAmount: (e: any) => void;
}

const textParagraphs: string[] = [
  "Тесты здесь отличаются от тех, к которым мы привыкли. Эти тесты скорее похожи на билеты, контроль ответов на которые остаётся за студентом.",
  "Когда появится вопрос, необходимо будет отметить знаешь ты ответ или нет. Хорошо подумай и ответь сам себе как можно более развёрнуто, вспомни каке-то детали, которые относятся к вопросу.",
  "После выбора появится блок содержащий ответ на главный вопрос. Если ты понимаешь, что ответил неверно или хотел бы повторить этот вопрос в конце, можно поменять ответ. И вот зачем:",
  "После прохождения теста я покажу результат на основе твоего выбора. Ниже выведу все вопросы, в которых была “допущена ошибка” и прикреплю ссылку на эту тему.",
  "Искренне верю, что ты будешь честен в первую очередь с самим собой, как минимум потому, что здесь соревноваться не с кем, кроме самого себя.",
  "Главные цели теста - контроль знаний и помощь в становлении разработчиком.",
];

const amountValues: number[] = [15, 30, 45, 60];

function PreTestText({ testName, handleClick, onSetAmount }: IPreTestText) {
  const js = testName === TestNames.JavaScript;
  const react = testName === TestNames.React;
  // const redux = testName === TestNames.Redux;

  const renderTextParagraphs = () =>
    textParagraphs.map((paragraph: string, index: number) => (
      <p key={index}>{paragraph}</p>
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
      <div className="PreTestText">{renderTextParagraphs()}</div>
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
      <p>Выбери необходимое количество вопросов:</p>
      <div className="PreTest-Amount" onChange={(e) => onSetAmount(e)}>
        {renderAmountChoice()}
      </div>
      <Button title="Начать тест" onClick={handleClick} />
    </>
  );
}

export default PreTestText;
