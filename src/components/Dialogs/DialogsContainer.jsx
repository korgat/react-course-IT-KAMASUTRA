
import { connect } from "react-redux"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/AuthRedirect"
import { addMessageCreator } from "../../store/dialogsReducer"
import Dialogs from "./Dialogs"


let mapStateToProps = (state) => {
	return {
		messagePage: state.messagePage,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addMessage: (messageData) => {
			dispatch(addMessageCreator(messageData))
		}
	}
}
export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect)(Dialogs)
