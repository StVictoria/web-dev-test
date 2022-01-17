import { Link } from "react-router-dom";
import cn from "clsx";
import "./TechnologyTile.scss";

interface ITechnologyTile {
  isDisable?: boolean;
  isAvaliable: boolean;
  src: string;
  technology: string;
}

function TechnologyTile({
  isDisable,
  isAvaliable,
  src,
  technology,
}: ITechnologyTile) {
  const renderTile = () => (
    <div className="TechnologyTile">
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
    </div>
  );
  return isDisable ? (
    renderTile()
  ) : (
    <Link to={`test/${technology}`} className="TechnologyTile">
      {renderTile()}
    </Link>
  );
}

export default TechnologyTile;
