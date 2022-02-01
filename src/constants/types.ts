export interface IAnswerObject {
  id: number;
  answer: string;
}

export interface IQuestionObject {
  id: number;
  block: string;
  topic: string;
  level: string;
  question: string;
  answer: string | string[];
}

export interface ITechnology {
  id: number;
  title: string;
  src: string;
  isDisable: boolean;
}
