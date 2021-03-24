
import s from "./Users.module.css"
import defaultAvatar from "../../assets/images/user.png"
import { NavLink } from "react-router-dom"
import Paginator from "../../common/paginator/paginator"



const Users = (props) => {

	return <div>

		<Paginator totalCount={props.totalCount} itemsInPage={props.itemsInPage} onPageNumberClick={props.onPageNumberClick}
			currentPage={props.currentPage} portionSize={props.portionSize} />
		{
			props.users.map(u => <div key={u.id}>
				<span>
					<NavLink to={"/Profile/" + u.id}>
						<div ><img className={s.avatar} src={u.photos.small != null ? u.photos.small : defaultAvatar} alt="avatar" /></div>
					</NavLink>
					<div>{u.followed
						? <button disabled={props.requestInProgress.some(id => id === u.id)} onClick={() => {
							props.unfollowUser(u.id)
						}}>UNFOLLOW</button>
						: <button disabled={props.requestInProgress.some(id => id === u.id)} onClick={() => {
							props.followUser(u.id)
						}}>FOLLOW</button>}</div>
				</span>
				<span>
					<div>{u.name}</div>
					<div>{u.status}</div>
				</span>
				<span>
					<div>{"u.location.country"}</div>
					<div>{"u.location.city"}</div>
				</span>
			</div >)
		}
	</div >

}


export default Users