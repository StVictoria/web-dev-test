import { useState } from "react";
import JSImg from "../../assets/images/javascript.png";
import ReactImg from "../../assets/images/react.png";
import ReduxImg from "../../assets/images/redux.png";
import PatternsImg from "../../assets/images/patterns.png";
import SectionTitle from "../common/SectionTitle";
import { TestNames } from "../../enums/testEnums";
import PreTestText from "../elements/PreTestText";
import Test from "../elements/Test";
import { filterData } from "../../utils/service";
import "./TestPage.scss";
import Result from "../elements/Result";

interface ITestPage {
  testName: string;
}

function TestPage({ testName }: ITestPage) {
  const [isStarted, setStarted] = useState<boolean>(false);
  const [isDone, setDone] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(15);

  const startTest = () => setStarted(true);

  const handleSetAmount = (e: any) => setAmount(e.target.value);

  return (
    <>
      <div className="TestIntro-TitleBlock">
        <img
          src={
            testName === TestNames.JavaScript
              ? JSImg
              : testName === TestNames.React
              ? ReactImg
              : testName === TestNames.Patterns
              ? PatternsImg
              : ReduxImg
          }
          alt={testName}
          className="TestPage-TitleImage"
        />
        <SectionTitle title={`Тест по ${testName}`} />
      </div>
      {!isDone ? (
        !isStarted ? (
          <PreTestText
            testName={testName}
            handleClick={startTest}
            onSetAmount={handleSetAmount}
          />
        ) : (
          <Test data={filterData(testName, amount, null)} setDone={setDone} />
        )
      ) : (
        <Result />
      )}
    </>
  );
}

export default TestPage;
