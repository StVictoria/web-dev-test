import Button from "../common/Button";
import "./PreTestText.scss";
import RocketImg from "../../assets/images/shuttle.png";
import { TestNames } from "../../enums/testNames";

interface IPreTestText {
  testName: string;
  handleClick: () => void;
}

function PreTestText({ testName, handleClick }: IPreTestText) {
  const js = testName === TestNames.JavaScript;
  const react = testName === TestNames.React;
  const redux = testName === TestNames.Redux;

  return (
    <>
      <div className="PreTestText">
        <p>
          Тесты здесь отличаются от тех, к которым мы
          привыкли. Эти тесты скорее похожи на билеты, контроль ответов на
          которые остаётся за студентом.
        </p>
        <p>
          Когда появится вопрос, необходимо будет отметить знаешь ты ответ или нет.
          Хорошо подумай и ответь сам себе как можно более развёрнуто, вспомни
          каке-то детали, которые относятся к вопросу.
        </p>
        <p>
          После выбора появится блок содержащий ответ на главный вопрос. Если ты
          понимаешь, что ответил неверно или хотел бы повторить этот вопрос в
          конце, можно поменять ответ. И вот зачем:
        </p>

        <p>
          После прохождения теста я покажу результат на основе твоего выбора.
          Ниже выведу все вопросы, в которых была “допущена ошибка” и прикреплю
          ссылку на эту тему.
        </p>

        <p>
          Искренне верю, что ты будешь честен в первую очередь с самим собой,
          как минимум потому, что здесь соревноваться не с кем, кроме самого
          себя.
        </p>

        <p>
          Главные цели теста - контроль знаний и помощь в становлении
          разработчиком.
        </p>
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
        <br />
        Если ты не знаешь данную технологию, лучше сначала ознакомиться с
        документацией
      </p>
      <Button title="Начать тест" onClick={handleClick} />
    </>
  );
}

export default PreTestText;
