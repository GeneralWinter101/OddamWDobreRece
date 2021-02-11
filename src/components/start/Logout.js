import React from 'react'
import "../../scss/main.scss";
import { ReactComponent as Decoration } from "../../assets/Decoration.svg";
import { Link } from "react-router-dom";


function Logout() {
	return (
		<div id="logout" className="login-container">
			<h1>Wylogowanie nastąpiło pomyślnie!</h1>
			<Decoration />
			<div className="login-btns">
				<Link to="/start" className="logout-btn">
				Strona główna
					</Link>
			</div>
		</div>
	)
}

export default Logout;