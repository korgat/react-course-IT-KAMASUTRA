import profileReducer, { addPostCreator, deletePostCreator } from "./profileReducer"


let State = {
	postData: [
		{ id: 1, message: "hi it's " },
		{ id: 2, message: "my name is Igor" },
		{ id: 3, message: "What do you want?" },
		{ id: 4, message: " Just a question?" }
	],

}

it("new post should be added", () => {
	let action = addPostCreator("new message")
	let newState = profileReducer(State, action)
	expect(newState.postData.length).toBe(5)
})

it("post should be deleted", () => {
	let action = deletePostCreator(1)
	let newState = profileReducer(State, action)
	expect(newState.postData.length).toBe(3)
})
