import React, { useEffect } from "react"
import { connect } from "react-redux"
import Profile from "./Profile"
import { getProfile, getStatus, updateProfileData, updateStatus, uploadPhoto } from "../../store/profileReducer"
import { withRouter } from "react-router-dom"
import { withAuthRedirect } from "../../hoc/AuthRedirect"
import { compose } from "redux"



const ProfileContainer = (props) => {

	useEffect(() => {
		let userId = props.match.params.userId
		if (!userId) {
			userId = props.userId
		}
		props.getProfile(userId)
		props.getStatus(userId)
	}, [props.match.params.userId])

	return <main>
		<Profile {...props} isOwner={!props.match.params.userId} />
	</main>

}


// class ProfileContainer extends React.Component {
// 	refreshProfile() {
// 		let userId = this.props.match.params.userId
// 		if (!userId) {
// 			userId = this.props.userId
// 		}
// 		this.props.getProfile(userId)
// 		this.props.getStatus(userId)
// 	}
// 	componentDidMount() {
// 		this.refreshProfile()
// 	}
// 	componentDidUpdate(prevProps) {
// 		debugger
// 		if (this.props.match.params.userId !== prevProps.match.params.userId)
// 			this.refreshProfile()
// 	}


// 	render() {
// 		return <main>
// 			<Profile {...this.props} isOwner={!this.props.match.params.userId} />
// 		</main>
// 	}
// }




let mapStateToProps = (state) => ({
	profilePage: state.profilePage,
	userId: state.auth.userId
})

export default compose(
	connect(mapStateToProps, { getProfile, getStatus, updateStatus, uploadPhoto, updateProfileData }),
	withRouter,
	withAuthRedirect)(ProfileContainer)
