import dialogsReducer from "./dialogsReducer"
import navbarReducer from "./navbarReducer"
import profileReducer from "./profileReducer"



let store = {
	_state: {
		profilePage: {
			newPostText: "",
			postData: [
				{ message: "hi it's " },
				{ message: "my name is Igor" },
				{ message: "What do you want?" },
				{ message: " Just a question?" }
			]
		},
		messagePage: {
			newMessageText: "",
			dialogsData: [
				{ name: "Sasha", id: 1 },
				{ name: "Ira", id: 2 },
				{ name: "Igor", id: 3 },
				{ name: "Vova", id: 4 },
				{ name: "Stepan", id: 5 },
			],
			messageData: [
				{ message: "Hello word", status: "me" },
				{ message: "its me", status: "else" },
				{ message: "lets do this", status: "me" },
				{ message: "lets do this", status: "else" }
			]
		},
		navFriends: {
			friendsData: [
				{ name: "Vasiy" },
				{ name: "Katiy" },
				{ name: "Oleg" }
			]
		}
	},

	_callObserver() {
	},
	getState() {
		return this._state
	},
	getObserver(observer) {
		this._callObserver = observer
	},


	dispatch(action) {
		dialogsReducer(this._state.messagePage, action)
		profileReducer(this._state.profilePage, action)
		navbarReducer(this._state.navFriends, action)
		this._callObserver(store)
	}
}




export default store