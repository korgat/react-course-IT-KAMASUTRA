import { stopSubmit } from "redux-form"
import { authApi } from "../api/userApi"

const SET_AUTH = "SET_AUTH"
const SET_LOGIN = "SET_LOGIN"


let initialState = {
	userId: null,
	login: null,
	email: null,
	isFetching: false,
	isAuth: false
}

const authReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_AUTH: {
			return {
				...state,
				...action.data
			}
		}

		default:
			return state
	}
}

export const setAuth = (userId, login, email, isAuth) => ({ type: SET_AUTH, data: { userId, login, email, isAuth } })
export const setLogin = (data) => ({ type: SET_LOGIN, data })

export const authMe = () => async (dispatch) => {
	let data = await authApi.auth()
	if (data.resultCode === 0) {
		let { id, login, email } = data.data
		dispatch(setAuth(id, login, email, true))
	}
}

export const login = (formData) => async (dispatch) => {
	let data = await authApi.login(formData)
	if (data.resultCode === 0) {
		dispatch(authMe())
	} else {
		let message = data.messages.length > 0 ? data.messages[0] : "some error"
		dispatch(stopSubmit("login", { _error: message }))
	}
}

export const logout = () => async (dispatch) => {
	let data = await authApi.logout()
	if (data.resultCode === 0) {
		dispatch(setAuth(null, null, null, false))
	}
}



export default authReducer