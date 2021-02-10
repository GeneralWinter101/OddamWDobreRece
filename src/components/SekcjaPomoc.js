import React from "react";
import { Fundacje } from "./Fundacje";
// import NGO from "./NGO";
// import Zbiorki from "./Zbiorki";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import "../scss/main.scss";


function SekcjaPomoc() {
	return (
		<div id="ngos" className="ngos-section">
			<p>
				Komu pomagamy?
			</p>
			<Decoration />
			<div className="ngos-link-btns">
				<a href="/#fundacje" className="org-btn">Fundacjom</a>
				<a href="/#sub-ngo" className="org-btn">Organizacjom pozarządowym</a>
				<a href="/#sub-local" className="org-btn">Lokalnym zbiórkom</a>
			</div>
			<text>
				W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
				</text>
			<Fundacje />
			{/* <NGO />
			<Zbiorki /> */}
		</div>
	)
}

// function Fundacje() {
// 	return (
// 		<div id="ngos">
// 			<h1 className="ngos-section-head">Fundacja i organizacje</h1>
// 		</div>

// 	)

// }


export default SekcjaPomoc;