import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { Field, reduxForm } from "redux-form"
import { FormComponentCreator } from "../../common/loaders/formControls/FormControls"

import { login } from "../../store/authReducer"
import { maxLengthCreator, required } from "../utils/validators"
import s from "./Login.module.css"

const Login = (props) => {
	let onSubmit = (formData) => {
		props.login(formData)
	}
	if (props.auth.isAuth) return <Redirect to={"/profile"} />
	return (
		<div>
			<h1>Login</h1>
			<ReduxLoginForm onSubmit={onSubmit} />
		</div>
	)
}


let maxLength20 = maxLengthCreator(20)

const Input = FormComponentCreator("input")

const LoginForm = (props) => {
	return (
		<form className={s.form} onSubmit={props.handleSubmit}>
			<div>
				<Field validate={[required, maxLength20]} component={Input} name={"email"} placeholder={"email"} />
			</div>
			<div>
				<Field validate={[required, maxLength20]} component={Input} name={"password"} placeholder={"password"} type={"password"} />
			</div>
			<div>
				<Field component={"input"} name={"rememberMe"} type={"checkbox"} /> remember me
			</div>
			{props.error ? <div className={s.summaryError}>
				{props.error}
			</div> : ""}
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

let mapStateToProps = (state) => ({
	auth: state.auth
})


const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm)

export default connect(mapStateToProps, { login })(Login)