import React, { useState } from "react"
import { Field, reduxForm } from "redux-form"
import Contacts from "./ProfileInfo"
import { FormComponentCreator } from "../../../common/loaders/formControls/FormControls"
import s from "./ProfileInfo.module.css"
import ProfileStatusHooks from "./ProfileStatusHooks"


const Input = FormComponentCreator("input")
const Textarea = FormComponentCreator("textarea")

const ContactsForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
		<div>
			<b>Full name</b>:<Field component={Input} name={"fullName"} placeholder={"fullName"} />
		</div>
		<div>
			<b>About me</b>:<Field component={Textarea} name={"aboutMe"} placeholder={"aboutMe"} />
		</div>
		<div>
			<b>Looking for a job</b>:<Field component={Input} name={"lookingForAJob"} type={"checkbox"} />
		</div >
		<div>
			<b>Professional skills </b>:<Field component={Textarea} name={"lookingForAJobDescription"} placeholder={"lookingForAJobDescription"} />
		</div>
		<div>
			{Object.keys(props.profile.contacts).map(key =>
				<div>
					{key}:<Field component={Input} name={"contacts." + key} />
				</div>
			)}
		</div>
		<button>Submit</button>
	</form >
}

const ReduxContactsForm = reduxForm({ form: "ProfileData" })(ContactsForm)

export default ReduxContactsForm