import './zero.css'
import './App.css';
import Navbar from './components/Navbar/Nav';
import { Route, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initialize } from './store/appReducer';
import Loader from './common/loaders/loader';
import { WithSuspence } from './hoc/WithSuspence';
import React from "react"

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
	componentDidMount() {
		this.props.initialize()
	}

	render() {
		if (!this.props.initialized) {
			return <Loader />
		}
		return (
			<div className="container">
				<HeaderContainer />
				<Navbar />
				<div className="container-content">
					<Route path="/Message" render={() => <DialogsContainer />} />
					<Route path="/Profile/:userId?" render={WithSuspence(ProfileContainer)
					} />
					<Route path="/News" component={News} />
					<Route path="/Music" component={Music} />
					<Route path="/Settings" component={Settings} />
					<Route path="/Users" render={() => <UsersContainer />} />
					<Route path="/Login" render={() => <Login />} />
				</div>
			</div>
		);
	}
}

let mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default compose(
	withRouter,
	connect(mapStateToProps, { initialize })
)(App);

