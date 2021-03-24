
import "./Message.css"


const Message = (props) => {
	return (<div className={props.className}>
		<div className={props.className + "border"}>{props.message}</div>
	</div>
	)
}

export default Message