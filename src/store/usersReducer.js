import { followApi, userApi } from "../api/userApi"

const FOLLOW = "FOLLOW"
const UN_FOLLOW = "UN_FOLLOW"
const SET_USERS = "SET_USERS"
const SET_PAGE_NUMBER = "SET_PAGE_NUMBER"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_REQUEST_IN_PROGRESS = "TOGGLE_REQUEST_IN_PROGRESS"

let initialState = {
	totalCount: 0,
	itemsInPage: 5,
	currentPage: 1,
	portionSize: 10,
	isFetching: false,
	requestInProgress: [],
	users: []
}

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u
				})
			}
		}
		case UN_FOLLOW: {
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u
				})
			}
		}
		case SET_USERS: {
			return {
				...state,
				users: action.usersArray,
			}
		}
		case SET_PAGE_NUMBER: {
			return {
				...state,
				currentPage: action.pageNumber
			}
		}
		case SET_TOTAL_COUNT: {
			return {
				...state,
				totalCount: action.totalCount
			}
		}
		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching
			}
		}
		case TOGGLE_REQUEST_IN_PROGRESS: {
			return {
				...state,
				requestInProgress: action.isFetching ?
					[...state.requestInProgress, action.userId]
					: [...state.requestInProgress.filter(u => u !== action.userId)]
			}
		}
		default:
			return state
	}
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unFollow = (userId) => ({ type: UN_FOLLOW, userId })
export const setUser = (usersArray) => ({ type: SET_USERS, usersArray })
export const setPageNumber = (pageNumber) => ({ type: SET_PAGE_NUMBER, pageNumber })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleRequestInProgress = (isFetching, userId) => ({ type: TOGGLE_REQUEST_IN_PROGRESS, isFetching, userId })


// ?

export const requestUser = (currentPage, itemsInPage) => async (dispatch) => {
	dispatch(setPageNumber(currentPage))
	dispatch(toggleIsFetching(true))
	const data = await userApi.getUsers(currentPage, itemsInPage)
	dispatch(toggleIsFetching(false))
	dispatch(setUser(data.items))
	dispatch(setTotalCount(data.totalCount))
}

export const unfollowUser = (userId) => async (dispatch) => {
	dispatch(toggleRequestInProgress(true, userId))
	const data = await followApi.unfollowUser(userId)
	if (data.resultCode === 0) {
		dispatch(unFollow(userId))
	}
	dispatch(toggleRequestInProgress(false, userId))
}

export const followUser = (userId) => async (dispatch) => {
	dispatch(toggleRequestInProgress(true, userId))
	const data = await followApi.followUser(userId)
	if (data.resultCode === 0) {
		dispatch(follow(userId))
	}
	dispatch(toggleRequestInProgress(false, userId))
}

export default usersReducer