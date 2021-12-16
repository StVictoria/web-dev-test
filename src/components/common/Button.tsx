import "./Button.scss";
interface IButton {
  icon?: string;
  title: string;
  onClick: () => void;
}

function Button({ icon, title, onClick }: IButton) {
  return (
    <button className="Button" onClick={onClick}>
      {icon && <img src={icon} alt="#" className="Button-Icon" />}
      {title}
    </button>
  );
}

export default Button;
