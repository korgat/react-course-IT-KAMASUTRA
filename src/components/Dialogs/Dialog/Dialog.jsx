import { NavLink } from "react-router-dom"
import s from "./../Dialogs.module.css"

const Dialog = (props) => {
	return (
		<div className={s.dialog}>
			<NavLink to={"/Message/" + props.id} activeClassName={s.active}>
				<img src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" alt="" />
				<div>
					{props.name}
				</div>
			</NavLink>
		</div>
	)
}
export default Dialog