import { NavLink } from "react-router-dom"
import s from "./Header.module.css"

const Header = (props) => {
	return <header className={s.header}>
		<div>
			<img src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg" alt="logo"></img>
		</div>
		<div>
			{props.auth.login
				? <div>{props.auth.login} <button onClick={props.logout}>Logout</button></div>
				: <NavLink to="/Login">Login</NavLink>}
		</div>
	</header >
}
export default Header