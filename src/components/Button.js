import '../styles/Button.css';

function Button(props) {
    return(
        <div>
            <button onClick={props.callApi}>
                Click
            </button>
        </div>
    )
}
export default Button;