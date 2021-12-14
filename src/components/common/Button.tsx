import "./Button.scss";
interface IButton {
    icon?: string,
    title: string
}

function Button({icon, title}: IButton) {
    return <button className="Button">{icon}{title}</button>    
}

export default Button;