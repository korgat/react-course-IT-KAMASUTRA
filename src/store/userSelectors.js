export const getUsers = (state) => {
	return state.usersPage.users
}
export const getTotalCount = (state) => {
	return state.usersPage.totalCount
}
export const getItemsInPage = (state) => {
	return state.usersPage.itemsInPage
}
export const getCurrentPage = (state) => {
	return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
	return state.usersPage.isFetching
}
export const getRequestInProgress = (state) => {
	return state.usersPage.requestInProgress
}
export const getPortionSize = (state) => {
	return state.usersPage.portionSize
}