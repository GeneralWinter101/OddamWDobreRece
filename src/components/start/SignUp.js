import React from 'react'
import "../../scss/main.scss";
import { ReactComponent as Decoration } from "../../assets/Decoration.svg";
import { Link } from "react-router-dom";


function SignUp() {
	return (
		<div id="signup" className="login-container">
			<h1>Załóż konto</h1>
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
					<label>
						<p>Powtórz hasło</p>
						<input type="password" required minlength="6" className="login-password"></input>
					</label>
				</div>
				<div className="login-btns">
					<Link to="/login" className="signup-btn">
						Zaloguj się
					</Link>
					<Link to="/signup" className="login-btn">
						Załóż konto
					</Link>
					<Link to="/logout" className="signout-btn">
						Wylogowanie
					</Link>
				</div>
			</form>
		</div>
	)
}

export default SignUp;