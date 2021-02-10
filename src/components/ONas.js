import React from "react";
import Signature from "../assets/Signature.svg";
import People from "../assets/People.jpg";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";

function ONas() {
	return (
		<div id="onas" className="about">
			<div className="about-texbox">
				<h1 className="about-title">O nas</h1>
				<Decoration />
				<text className="about-paragraph">
				Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
					</text>
				<img src={Signature} alt="signature" />
			</div>
			<img className="about-people" src={People} alt="people" />

		</div>

	)
}


export default ONas; 