import React from "react";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/Facebook.svg";
// import Background from "../assets/Background-Contact-Form.jpg";

function Kontakt() {
	return (
		<div id="contact" className="contact-container">
			<div className="contact-bckg">
			</div>
			<div className="contact-box">
				<p>Skontaktuj się z nami</p>
				<Decoration />
				<form className="contact-form">
					<label>Wpisz swoje imię</label>
					<input type="text" placeholder="Krzysztof"></input>
					<label>Wpisz swój email</label>
					<input type="email" placeholder="abc@xyz"></input>
					<button>Wyślij</button>
				</form>
			</div>

			<footer>Copyright by Coders Lab</footer>
			<img src={Facebook} alt="Facebook" />
			<img src={Instagram} alt="Instagram" />
		</div>

	)
}


export default Kontakt; 