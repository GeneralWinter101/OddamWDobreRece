import React, { useState } from "react";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/Facebook.svg";
import { db } from "../firebase";

function Kontakt() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [msg, setMsg] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		db.collection('contacts').add({
			name: name,
			email: email,
			msg: msg
		})
		.then(() => {
			alert("Twoja wiadomość została wysłana.")
		})
		.catch((error) => {
			alert("Wysyłanie wiadomości nie powdioło się.  Spróbuj jeszcze raz.")
		});

		setName("");
		setEmail("");
		setMsg("");
	}

	return (
		<div id="contact" className="contact-container">
			<div className="contact-box">
				<p>Skontaktuj się z nami</p>
				<Decoration />
				<form className="contact-form" onSubmit={handleSubmit}>
					<div className="contact-form__labels">
						<label>
							<p>Wpisz swoje imię</p>
							<input name="name" required placeholder="Krzysztof" pattern="[A-Za]" className="contact-name" value={name} onChange={(e) => setName(e.target.value)}/>
						</label>
						<label>
							<p>Wpisz swój email</p>
							<input type="email" required placeholder="abc@xyz" className="contact-email" value={email} onChange={(e) => setEmail(e.target.value)}/>
						</label>
					</div>

					<label className="contact-text-label">
						<p>Wpisz swoją wiadomość</p>
						<textarea 
						placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
						className="contact-message" minlength="120" value={msg} required onChange={(e) => setMsg(e.target.value)}>
						</textarea>
					</label>
					<button type="submit" className="contact-btn">Wyślij</button>
				</form>
			</div>
			<div className="footer-container">

			</div>
			<p id="footer">Copyright by Coders Lab</p>
			<a href="https://facebook.com">
				<img id="fb" src={Facebook} alt="Facebook" />
			</a>
			<a href="https://instagram.com">
				<img id="insta" src={Instagram} alt="Instagram" />
			</a>
			
		</div>

	)
}


export default Kontakt; 