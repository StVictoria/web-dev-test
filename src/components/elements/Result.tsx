import { connect } from "react-redux";
import { IAnswerObject } from "../../constants/types";
import { RootState } from "../../redux/store";

interface IResult {
  answers: IAnswerObject[];
}

function Result({ answers }: IResult) {
  return (
    <div>
      {answers.map((answerItem: IAnswerObject) => (
        <p key={answerItem.id}>{answerItem.answer}</p>
      ))}
    </div>
  );
}

const mapStateToProps = ({ test }: RootState) => ({
  answers: test.answers,
});

export default connect(mapStateToProps)(Result);
