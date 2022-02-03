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
    addAnswer: (state, action: PayloadAction<IAnswerObject>) => {
      // поменять на {answers}

      let value: IAnswerObject | undefined = state.answers.find(
        (answer: IAnswerObject) => answer.id === action.payload.id
      );
      if (!value) {
        state.answers.push(action.payload);
      } else if (value.answer !== action.payload.answer) {
        let newAnswersArray = state.answers.filter(
          (answer) => answer.id !== value?.id
        );
        state.answers = newAnswersArray;
        state.answers.push(action.payload);
      }
    },
  },
});

export const { addAnswer } = testSlice.actions;

export default testSlice.reducer;
