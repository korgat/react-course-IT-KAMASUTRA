import React from "react"
import { connect } from "react-redux"
import { logout } from "../../store/authReducer";
import Header from "./Header"



class HeaderContainer extends React.Component {
	componentDidMount() {
	}
	render() {
		return <Header {...this.props} />
	}

}

let mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}



export default connect(mapStateToProps, { logout })(HeaderContainer)