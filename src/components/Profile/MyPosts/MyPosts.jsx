
import { Field, reduxForm } from "redux-form"
import { FormComponentCreator } from "../../../common/loaders/formControls/FormControls"
import { maxLengthCreator, required } from "../../utils/validators"
import MyPost from "./MyPost/MyPost"
import s from "./MyPosts.module.css"


const MyPosts = (props) => {
	let postItems = props.profilePage.postData.map(m => <MyPost message={m.message} />)

	let addPost = (e) => {
		props.AddPost(e.NewPostData)
	}

	return (
		<div className={s.myPosts}>
			<div className={s.InputArea}>
				<NewPostFormRedux onSubmit={addPost} />
			</div>
			<div className={s.postsArea}>
				{postItems}
			</div>
		</div>
	)
}

let maxLength15 = maxLengthCreator(15)

const Textarea = FormComponentCreator("textarea")

const NewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field validate={[required, maxLength15]} component={Textarea} name="NewPostData" cols="30" rows="10" ></Field>
			</div>
			<div>
				<button >Add post</button>
			</div>
		</form>
	)
}

let NewPostFormRedux = reduxForm({ form: "newPost" })(NewPostForm)

export default MyPosts