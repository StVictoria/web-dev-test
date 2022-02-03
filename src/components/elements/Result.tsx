import { useSelector } from "react-redux";
import { IAnswerObject } from "../../constants/types";
import { RootState } from "../../redux/store";

export default function Result() {
  const answers = useSelector(({ test }: RootState) => test.answers);
  return (
    <div>
      {answers.map((answerItem: IAnswerObject) => (
        <p key={answerItem.id}>{answerItem.answer}</p>
      ))}
    </div>
  );
}
