const addMessage = "addMessage"

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case addMessage: {
			return {
				...state,
				messageData: [...state.messageData, { message: action.messageData, status: "me" }]
			}
		}
		default:
			return state
	}

}

export const addMessageCreator = (messageData) => ({ type: addMessage, messageData })

export default dialogsReducer 