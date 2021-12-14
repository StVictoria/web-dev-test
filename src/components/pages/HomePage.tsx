import SectionTitle from "../common/SectionTitle";
import TechnologyTile from "../common/TechnologyTile";
import JSImg from "../../assets/images/javascript.png";
import ReactImg from "../../assets/images/react.png";
import ReduxImg from "../../assets/images/redux.png";
import "./HomePage.scss";

function HomePage() {
  return (
    <section className="HomePage-Section">
      <SectionTitle title="Доступные тесты" />
      <div className="HomePage-TechnologyList">
        <TechnologyTile isAvaliable={true} src={JSImg} />
        <TechnologyTile isAvaliable={false} src={ReactImg} />
        <TechnologyTile isAvaliable={false} src={ReduxImg} />
      </div>
    </section>
  );
}

export default HomePage;
