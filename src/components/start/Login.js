import React from 'react'
import "../../scss/main.scss";
import { ReactComponent as Decoration } from "../../assets/Decoration.svg";
import { Link } from "react-router-dom";

function Login() {
	return (
		<div id="login" className="login-container">
			<h1>Zaloguj się</h1>
			<Decoration />
			<form>
				<div className="login-input-container">
					<label>
						<p>Email</p>
						<input type="email" required className="login-email"></input>
					</label>
					<label>
						<p>Hasło</p>
						<input type="password" required minlength="6" className="login-password"></input>
					</label>
				</div>
				<div className="login-btns">
					<Link to="/signup" className="signup-btn">
						Załóż konto
					</Link>
					<Link to="/login" className="login-btn">
						Zaloguj się
					</Link>
				</div>
			</form>
		</div>
	)
}

export default Login;
