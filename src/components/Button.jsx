import "./Button.css"

const Button = (props) => {
    return <button className={props.name} onClick={props.func}>{props.name}</button>
}

export default Button;