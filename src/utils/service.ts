import { IQuestionObject } from "../constants/types";
import { TestNames } from "../enums/testEnums";
import JavaScript from "./javascriptData.json";
import Patterns from "./patternsData.json";
import InterviewJS from './interviewJS.json'

const createTest = (data: IQuestionObject[], amount: number) => {
  const questionsArray: IQuestionObject[] = [];
  let seen = new Set();
  while (questionsArray.length < amount) {
    let randomNumber: number = Math.floor(Math.random() * data.length);
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
  } else if (dataName === TestNames.Patterns) {
    return createTest(Patterns.data, amount);
  } else if (dataName === TestNames.InterviewJS) {
    return createTest(InterviewJS.data, amount);
  } else {
    return null;
  }
};
