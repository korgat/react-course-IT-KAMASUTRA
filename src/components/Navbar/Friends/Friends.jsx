
import Friend from "./Friend/Friend"
import s from "./Friends.module.css"

const Friends = (props) => {

	let friendItems = props.friendsData.map(n => <Friend name={n.name} />)
	return (
		<div className={s.friends}>
			<div className={s.title} >Friend</div>
			<div className={s.friendsItems}>
				{friendItems}
			</div>
		</div>
	)
}

export default Friends