import React, { useEffect, useState } from "react"

const ProfileStatusHooks = (props) => {

	let [editMode, setEditMode] = useState(false)
	let [userStatus, setUserStatus] = useState(props.status)

	useEffect(() => {
		setUserStatus(props.status)
	}, [props.status])

	const editStatus = () => {
		setEditMode(true)
	}
	const confirmStatus = () => {
		setEditMode(false)
		props.updateStatus(userStatus)
	}
	const onStatusChange = (e) => {
		setUserStatus(e.currentTarget.value)
	}

	return (
		<div>
			{editMode ?
				<div>
					<input onChange={onStatusChange} autoFocus={true} onBlur={confirmStatus} value={userStatus} />
				</div>
				: <div onDoubleClick={editStatus} >
					{props.status ? props.status : "no status"}
				</div>
			}
		</div>
	)
}



export default ProfileStatusHooks