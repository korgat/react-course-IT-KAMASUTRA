import React from "react"
import Dialog from "./Dialog/Dialog"
import s from "./Dialogs.module.css"
import Message from "./Message/Message"
import { Field, reduxForm } from "redux-form"
import { FormComponentCreator } from "../../common/loaders/formControls/FormControls"
import { maxLengthCreator } from "../utils/validators"



const Dialogs = (props) => {
	let dialogsItems = props.messagePage.dialogsData.map(d => <Dialog name={d.name} id={d.id} />)
	let messageItems = props.messagePage.messageData.map(m => <Message message={m.message} className={m.status} />)

	let addMassage = (e) => {
		props.addMessage(e.messageData)
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogItems}>
				{dialogsItems}
			</div>
			<div className={s.messagesItems}>
				{messageItems}
			</div>
			<div className={s.addMessage}>
				<AddMassageFormRedux onSubmit={addMassage} />
			</div>
		</div>
	)
}

let maxLength50 = maxLengthCreator(50)

const Textarea = FormComponentCreator("textarea")

const AddMassageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field name="messageData" component={Textarea} validate={[maxLength50]} ></Field>
			<button>Send Message</button>
		</form>
	)
}

let AddMassageFormRedux = reduxForm({ form: "addMessage" })(AddMassageForm)

export default Dialogs