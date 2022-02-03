import { IAnswerObject } from "./../constants/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITestState {
  answers: IAnswerObject[];
}

const initialState: ITestState = {
  answers: [],
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    addAnswer: ({ answers }, action: PayloadAction<IAnswerObject>) => {
      let value: IAnswerObject | undefined = answers.find(
        (answer: IAnswerObject) => answer.id === action.payload.id
      );
      if (!value) {
        answers.push(action.payload);
      } else if (value.answer !== action.payload.answer) {
        let newAnswersArray = answers.filter(
          (answer) => answer.id !== value?.id
        );
        answers = newAnswersArray;
        answers.push(action.payload);
      }
    },
  },
});

export const { addAnswer } = testSlice.actions;

export default testSlice.reducer;
