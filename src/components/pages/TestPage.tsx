import { useState } from "react";
import JSImg from "../../assets/images/javascript.png";
import ReactImg from "../../assets/images/react.png";
import ReduxImg from "../../assets/images/redux.png";
import SectionTitle from "../common/SectionTitle";
import { TestNames } from "../../enums/testNames";
import PreTestText from "../elements/PreTestText";
import Test from "../elements/Test";
import javascriptData from '../../utils/javascriptData.json'
import "./TestPage.scss";

interface ITestPage {
  testName: string;
}

function TestPage({ testName }: ITestPage) {
  const [isStarted, setStarted] = useState(false);

  const startTest = () => setStarted(true);

  return (
    <>
      <div className="TestIntro-TitleBlock">
        <img
          src={
            testName === TestNames.JavaScript
              ? JSImg
              : testName === TestNames.React
              ? ReactImg
              : ReduxImg
          }
          alt={testName}
          className="TestPage-TitleImage"
        />
        <SectionTitle title={`Тест по ${testName}`} />
      </div>
      {!isStarted ? (
        <PreTestText testName={testName} handleClick={startTest} />
      ) : (
        <Test data={TestNames.JavaScript ? javascriptData.data : null}/>
      )}
    </>
  );
}

export default TestPage;
