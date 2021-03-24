import s from "./MyPost.module.css"

const MyPost = (props) => {

	return (
		<div className={s.MyPost}>
			<div>
				<img src="https://www.4dface.io/wp-content/uploads/2018/10/4DFM_sample2.jpg" alt="" />
				<span>{props.message}</span>
			</div>

		</div>
	)
}

export default MyPost