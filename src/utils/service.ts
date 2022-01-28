import { TestNames } from "../enums/testEnums";
import JavaScript from "./javascriptData.json";

const createTest = (data: any, amount: number) => {
  const questionsArray = [];
  for (let i = 1; i <= amount; i++) {
    questionsArray.push(data[Math.floor(Math.random() * data.length)]);
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
