import React from "react";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/Facebook.svg";
// import Background from "../assets/Background-Contact-Form.jpg";

function Kontakt() {
	return (
		<div id="contact" className="contact-container">
			<div className="contact-box">
				<p>Skontaktuj się z nami</p>
				<Decoration />
				<form className="contact-form">
					<div className="contact-form__labels">
						<label>
							<p>Wpisz swoje imię</p>
							<input name="name" placeholder="Krzysztof" className="contact-name" />
						</label>
						<label>
							<p>Wpisz swój email</p>
							<input type="email" placeholder="abc@xyz" className="contact-email" />
						</label>
					</div>

					<label className="contact-text-label">
						<p>Wpisz swoją wiadomość</p>
						<textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." className="contact-message">
						</textarea>
					</label>
					<button type="submit" className="contact-btn">Wyślij</button>
				</form>
			</div>
			<div className="footer-container">
				<p>Copyright by Coders Lab</p>
				<img src={Facebook} alt="Facebook" />
				<img src={Instagram} alt="Instagram" />
			</div>

		</div>

	)
}


export default Kontakt; 