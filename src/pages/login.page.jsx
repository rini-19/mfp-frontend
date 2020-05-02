import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

import './login.page.css';

class Login extends Component {
    constructor(props){
		super(props);
		this.state = {
			loginName: '',
			loginPassword: ''
		}
	}

	onNameChange = (event) =>{
		this.setState({loginName: event.target.value});
	}

	onPasswordChange = (event) =>{
		this.setState({loginPassword: event.target.value});
	}

	onSubmitChange = () =>{
		fetch('http://mutualfundcalculator.in/nodejsApp/login',{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.loginName,
				password: this.state.loginPassword
			})
		})
			.then(response => response.json())
			.then(data => {
				if(data.id){
					this.props.loadClient(data);
					this.props.history.replace('/mfp-frontend/dashboard');
				}
				else 
					console.log("login component", data);
			})
	}

	render(){

		return(
			<div id = "loginform">
				<h2 id="headerTitle">Login</h2>
				<div>
					<div className="row">
						<label>Username</label>
						<input onChange={this.onNameChange} type="text" placeholder="Enter username"/>
					</div> 
					<div className="row">
						<label>Password</label>
						<input onChange={this.onPasswordChange} type="password" placeholder="Enter password"/>
					</div> 
					<div id="button" className="row">
						<button onClick={this.onSubmitChange}>Login Now</button>
					</div>
					<div id="alternativeLogin">
						<label>Or sign in with:</label>
						<div id="iconGroup">
							<Link to="/" id="facebookIcon"></Link>
							<Link to="/" id="twitterIcon"></Link>
							<Link to="/" id="googleIcon"></Link>
						</div>
					</div>
				</div>
			</div>
		
	);
	}
}

export default withRouter(Login);