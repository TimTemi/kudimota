import "./Custum-button.css"

const CustomButton = ({title , style, ...props}) => {
    return (
    <button id ="custom-button" style={style} {...props}>
      {title}
    </button>
    );
}
export default CustomButton;