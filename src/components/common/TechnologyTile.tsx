import { Link } from "react-router-dom";
import cn from "clsx";
import "./TechnologyTile.scss";

interface ITechnologyTile {
  isAvaliable: boolean;
  src: string;
  technology: string;
}

function TechnologyTile({ isAvaliable, src, technology }: ITechnologyTile) {
  return (
    <Link to={`test/${technology}`} className="TechnologyTile">
      <img
        src={src}
        alt={technology}
        className={cn(`TechnologyTile-Image`, {
          "TechnologyTile-Image_disabled": !isAvaliable,
        })}
      />
      <span className="TechnologyTile-Tint">
        {!isAvaliable ? "Этот тест пока что недоступен" : "Перейти к тесту"}
      </span>
    </Link>
  );
}

export default TechnologyTile;
