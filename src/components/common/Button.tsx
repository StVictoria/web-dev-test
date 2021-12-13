interface IButton {
    icon?: string,
    title: string
}

function Button({icon, title}: IButton) {
    return <button>{icon}{title}</button>    
}

export default Button;