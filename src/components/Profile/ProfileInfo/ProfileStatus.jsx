import React from "react"

class ProfileStatus extends React.Component {

	state = {
		statusEditMode: false,
		status: this.props.status
	}

	editStatus = () => {
		this.setState({
			statusEditMode: true
		})
	}
	confirmStatus = () => {
		this.setState({
			statusEditMode: false
		})
		this.props.updateStatus(this.state.status)
	}
	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}

	render() {
		return (
			<div>
				{this.state.statusEditMode ?
					<div>
						<input onChange={this.onStatusChange} autoFocus={true} onBlur={this.confirmStatus} value={this.state.status} />
					</div>
					: <div onDoubleClick={this.editStatus} >
						{this.props.status ? this.props.status : "no status"}
					</div>
				}
			</div>
		)
	}
}



export default ProfileStatus