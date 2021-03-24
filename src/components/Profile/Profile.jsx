
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo"



const Profile = (props) => {
	return (
		<main>
			<ProfileInfo
				isOwner={props.isOwner} EditingProfData={props.profilePage.EditingProfData}
				profile={props.profilePage.profile} status={props.profilePage.status}
				updateStatus={props.updateStatus} uploadPhoto={props.uploadPhoto}
				updateProfileData={props.updateProfileData} />
			<MyPostsContainer />
		</main>
	)
}

export default Profile