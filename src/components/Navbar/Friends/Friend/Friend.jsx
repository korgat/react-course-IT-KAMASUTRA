
import s from "./Friend.module.css"

const Friend = (props) => {
	return (
		<div className={s.friend}>
			<div ><img src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" alt="" /></div>
			<div >{props.name}</div>
		</div>
	)
}

export default Friend