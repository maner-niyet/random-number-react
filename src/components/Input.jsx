import "./Input.css"

const Input = (props) => {
    return (
        <div>
          <label>{props.labelName}</label>
          <input type="number" placeholder= {"enter " + props.labelName} onChange={props.func} value={props.value}/>
        </div>
    )

}

export default Input;