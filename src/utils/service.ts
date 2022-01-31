import { TestNames } from "../enums/testEnums";
import JavaScript from "./javascriptData.json";

const createTest = (data: any, amount: number) => {
  const questionsArray: any = [];
  let seen = new Set();
  while (questionsArray.length < amount) {
    let randomNumber = Math.floor(Math.random() * data.length);
    seen.add(randomNumber);
    if (seen.size === questionsArray.length) {
      continue;
    }
    questionsArray.push(data[randomNumber]);
  }
  return questionsArray;
};

export const filterData = (
  dataName: string,
  amount: number,
  level: string | null
) => {
  if (dataName === TestNames.JavaScript) {
    return createTest(JavaScript.data, amount);
  }
};
