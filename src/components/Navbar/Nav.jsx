import { NavLink } from "react-router-dom"
// import FriendsContainer from "./Friends/FriendsContainer"
import s from "./Nav.module.css"

const Navbar = (props) => {

	return <aside className={s.nav}>
		<div>
			<div className={`${s.item} ${s.active}`}>
				<NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/Message" activeClassName={s.active}>Message</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/News" activeClassName={s.active}>News</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/Music" activeClassName={s.active}>Music</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/Settings" activeClassName={s.active}>Settings</NavLink>
			</div>
			{/* <div className={s.item}>
				<NavLink to="/friends" activeClassName={s.active}><FriendsContainer /></NavLink>
			</div> */}
			<div className={s.item}>
				<NavLink to="/Users" activeClassName={s.active}>Users</NavLink>
			</div>
		</div>
	</aside>
}

export default Navbar