
import { connect } from "react-redux"
import { addPostCreator } from "../../../store/profileReducer"

import MyPosts from "./MyPosts"




let mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		AddPost: (postData) => {
			dispatch(addPostCreator(postData))
		}
	}
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer