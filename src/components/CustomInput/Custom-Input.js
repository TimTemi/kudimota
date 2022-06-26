import './Custom-Input.css';


const CustomInput = ({style, type , placeholder, ...otherProp}) => {
    return (
        <input id ="custom-input" style = {style} type ={type} placeholder = {placeholder}  {...otherProp}
        />
    )
}
export default CustomInput;