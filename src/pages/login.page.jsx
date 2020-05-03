import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

import './login.page.css';

class Login extends Component {
    constructor(props){
		super(props);
		this.state = {
			loginName: '',
			loginPassword: '',
			valid: true
		}
	}

	onNameChange = (event) =>{
		this.setState({loginName: event.target.value});
	}

	onPasswordChange = (event) =>{
		this.setState({loginPassword: event.target.value});
	}

	onSubmitChange = () =>{
		fetch('https://mutualfundcalculator.in/nodejsApp/login',{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.loginName,
				password: this.state.loginPassword
			})
		})
			.then(response => response.json())
			.then(data => {
				console.log(data)
				if(data.id){
					this.props.loadClient(data);
					this.props.history.replace('/mfp-frontend/dashboard');
				}
				else 
					this.setState({
						loginName:'',
						loginPassword:'',
						valid: false});
					console.log("login component", data);
			})
	}

	render(){

		return(
			<div id = "loginform">
				{
					!this.state.valid && <p className='login-error'>Invalid name or password</p> 
				}
				<h2 id="headerTitle">Login</h2>
				<div>
					<div className="login-row">
						<label>Username</label>
						<input onChange={this.onNameChange} type="text" placeholder="Enter username"/>
					</div> 
					<div className="login-row">
						<label>Password</label>
						<input onChange={this.onPasswordChange} type="password" placeholder="Enter password"/>
					</div> 
					<div id="login-button" className="login-row">
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