import SectionTitle from "../common/SectionTitle";
import TechnologyTile from "../common/TechnologyTile";
import JSImg from "../../assets/images/javascript.png";
import ReactImg from "../../assets/images/react.png";
import ReduxImg from "../../assets/images/redux.png";
import InstagramImg from "../../assets/images/instagram.png";
import "./HomePage.scss";

function HomePage() {
  return (
    <>
      <section className="HomePage-Section">
        <SectionTitle title="Доступные тесты" />
        <div className="HomePage-TechnologyList">
          <TechnologyTile isAvaliable={true} src={JSImg} />
          <TechnologyTile isAvaliable={false} src={ReactImg} />
          <TechnologyTile isAvaliable={false} src={ReduxImg} />
        </div>
      </section>
      <section className="HomePage-Section">
        <SectionTitle title="Связаться с разработчиком" />
        <div className="HomePage-ContactInfo">
          <p>
            Проект изначально был адаптирован под меня и мой личный путь
            развития, <br /> поэтому если есть какие-либо предложения по
            улучшению сайта, <br /> пишите мне в инстаграм 
          </p>
          <div className="HomePage-InstagramBlock">
            <a
              href="https://www.instagram.com/victoria_step_nova/"
              className="HomePage-InstagramLink"
            >
              <img src={InstagramImg} />
            </a>
            <p>
              Так же приятно услышать общие отзывы об опыте использования сайта
              :)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
