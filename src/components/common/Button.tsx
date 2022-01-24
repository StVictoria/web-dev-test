import "./Button.scss";
interface IButton {
  icon?: string;
  title: string;
  type?: "submit" | undefined
  onClick: () => void;
}

function Button({ icon, title, type, onClick }: IButton) {
  return (
    <button className="Button" type={type ? type : "button"} onClick={onClick}>
      {icon && <img src={icon} alt="#" className="Button-Icon" />}
      {title}
    </button>
  );
}

export default Button;
