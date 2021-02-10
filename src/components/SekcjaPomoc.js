import React, { useState } from "react";
import { Fundacje } from "./Fundacje";
import NGO from "./NGO";
import Zbiorki from "./Zbiorki";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import "../scss/main.scss";


function SekcjaPomoc() {
	const [page, setPage] = useState("fundacje")

	return (
		<div id="ngos" className="ngos-section">
			<p>
				Komu pomagamy?
			</p>
			<Decoration />
			<div className="ngos-link-btns">
				<a href="/#fundacje" className="org-btn" onClick={() => setPage("fundacje")}>Fundacjom</a>
				<a href="/#sub-ngo" className="org-btn" onClick={() => setPage("sub-ngo")}>Organizacjom pozarządowym</a>
				<a href="/#sub-local" className="org-btn" onClick={() => setPage("sub-local")}>Lokalnym zbiórkom</a>
			</div>
			<text>
				W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
				</text>
			{page === "fundacje" && <Fundacje />}
			{page === "sub-ngo" && <NGO />}
			{page === "sub-local" && <Zbiorki />}
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