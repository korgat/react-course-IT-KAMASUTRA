import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
	profilePage: profileReducer,
	messagePage: dialogsReducer,
	navFriends: navbarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store
export default store
