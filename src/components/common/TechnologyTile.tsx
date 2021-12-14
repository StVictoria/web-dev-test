import cn from "clsx";
import "./TechnologyTile.scss";

interface ITechnologyTile {
  isAvaliable: boolean;
  src: string;
}

function TechnologyTile({ isAvaliable, src }: ITechnologyTile) {
  return (
    <div className="TechnologyTile">
      <img
        src={src}
        className={cn(`TechnologyTile-Image`, {
          "TechnologyTile-Image_disabled": !isAvaliable,
        })}
      />
      <p className="TechnologyTile-Tint">
        {!isAvaliable ? "Этот тест пока что недоступен" : "Перейти к тесту"}
      </p>
    </div>
  );
}

export default TechnologyTile;
