import React from "react"
import { connect } from "react-redux";
import { requestUser, unfollowUser, followUser } from "../../store/usersReducer";
import Users from "./Users";
import Loader from "../../common/loaders/loader";
import { getCurrentPage, getIsFetching, getItemsInPage, getPortionSize, getRequestInProgress, getTotalCount, getUsers } from "../../store/userSelectors";



class UsersApiContainer extends React.Component {
	componentDidMount() {
		this.props.requestUser(this.props.currentPage, this.props.itemsInPage)

	}
	onPageNumberClick = (pageNumber) => {
		this.props.requestUser(pageNumber, this.props.itemsInPage)

	}

	render() {
		return (<>
			<div>{this.props.isFetching ? < Loader /> : ""}</div>
			<Users
				itemsInPage={this.props.itemsInPage}
				onPageNumberClick={this.onPageNumberClick}
				currentPage={this.props.currentPage}
				users={this.props.users}
				requestInProgress={this.props.requestInProgress}
				unfollowUser={this.props.unfollowUser}
				followUser={this.props.followUser}
				portionSize={this.props.portionSize}
				totalCount={this.props.totalCount}
			/>
		</>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		totalCount: getTotalCount(state),
		itemsInPage: getItemsInPage(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		requestInProgress: getRequestInProgress(state),
		portionSize: getPortionSize(state)
	}
}



export default connect(mapStateToProps, {
	requestUser, unfollowUser,
	followUser
})(UsersApiContainer)