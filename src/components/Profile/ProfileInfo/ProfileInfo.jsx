import React, { useState } from "react"
import { Field, reduxForm } from "redux-form"
import defaultImg from "../../../assets/images/user.png"
import ReduxContactsForm from "./ContactsForm"
import s from "./ProfileInfo.module.css"
import ProfileStatusHooks from "./ProfileStatusHooks"

const ProfileInfo = React.memo(props => {

	let [editMode, setEditMode] = useState(false)

	if (!props.profile) {
		return <div>empty</div>
	}
	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			props.uploadPhoto(e.target.files[0])
		}
	}



	const onEditClick = () => {
		editMode ? setEditMode(false) : setEditMode(true)
	}
	const onSubmit = (formData) => {
		debugger
		props.updateProfileData(formData)
		setEditMode(false)
	}

	return (
		<div className={s.ProfileInfo}>
			<div>
				<img className={s.wallpaper} src="https://www.pics4learning.com/images/pics-banner1-1300.jpg" alt="proFileImage"></img>
			</div>
			<div className={s.descriptionArea}>
				<div><img src={props.profile.photos.large ? props.profile.photos.large : defaultImg} alt="" /></div>
				{props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} ></input>}
				<div>
					<button onClick={onEditClick}>Edit</button>
				</div>
				{!editMode ? <div>
					<div>
						<b>Full name</b>:{props.profile.fullName}
					</div>
					<div>
						<b>About me</b>:{props.profile.aboutMe}
					</div>
					< div >
						<b>Looking for a job</b>:{props.profile.lookingForAJob ? "Yes" : "No"}
					</div>
					<div>
						<b>Professional skills </b>:{props.profile.lookingForAJobDescription}
					</div>
					<div>
						{Object.keys(props.profile.contacts).map(key => <Contacts contactTitle={key} contactValue={props.profile.contacts[key]} />)}
					</div>
					<ProfileStatusHooks status={props.status} updateStatus={props.updateStatus} />
					<div>{props.profile.userId}</div>
				</div>
					: <ReduxContactsForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile} />}
			</div>
		</div >
	)
})

export const Contacts = ({ contactTitle, contactValue }) => {
	return <div>
		<b>{contactTitle}</b>:{contactValue}
	</div>
}



export default ProfileInfo