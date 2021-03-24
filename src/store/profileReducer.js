import { profileApi } from "../api/userApi"

const ADD_POST = "ADD_POST"
const SET_PROFILE_USER = "SET_PROFILE_USER"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = "DELETE_POST"
const SET_PHOTO_SUCCESS = "SET_PHOTO_SUCCESS"


let initialState = {
	profile: null,
	newPostText: "",
	postData: [
		{ id: 1, message: "hi it's " },
		{ id: 2, message: "my name is Igor" },
		{ id: 3, message: "What do you want?" },
		{ id: 4, message: " Just a question?" }
	],
	status: "",
	EditingProfData: true
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			return {
				...state,
				postData: [...state.postData, { message: action.postData }],
			}
		}
		case SET_PROFILE_USER: {
			return {
				...state,
				profile: action.user
			}
		}
		case SET_PHOTO_SUCCESS: {
			return {
				...state,
				profile: { ...state.profile, photos: action.file }
			}
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			}
		}
		case DELETE_POST: {
			return {
				...state,
				postData: state.postData.filter(e => e.id !== action.postId)
			}
		}
		default:
			return state
	}
}

export const deletePostCreator = (postId) => ({ type: DELETE_POST, postId })
export const addPostCreator = (postData) => ({ type: ADD_POST, postData })
export const setProfileUser = (user) => ({ type: SET_PROFILE_USER, user })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const setPhoto = (file) => ({ type: SET_PHOTO_SUCCESS, file })


export const getProfile = (userId) => async (dispatch) => {
	const data = await profileApi.getProfile(userId)
	dispatch(setProfileUser(data))
}

export const getStatus = (userId) => async (dispatch) => {
	const data = await profileApi.getStatus(userId)
	dispatch(setStatus(data))
}

export const updateStatus = (status) => async (dispatch) => {
	const data = await profileApi.updateStatus(status)
	if (data.resultCode === 0) {
		dispatch(setStatus(status))
	}
}
export const updateProfileData = (formData) => async (dispatch, getState) => {
	const userId = getState().auth.userId
	const data = await profileApi.updateProfileData(formData)
	if (data.resultCode === 0) {
		dispatch(getProfile(userId))
	}
}

export const uploadPhoto = (file) => async (dispatch) => {
	const data = await profileApi.uploadPhoto(file)
	if (data.resultCode === 0) {
		dispatch(setPhoto(data.data.photos))
	}
}


export default profileReducer