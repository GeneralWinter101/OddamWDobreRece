import React from 'react';
import { ReactComponent as Decoration } from "../../assets/Decoration.svg";
import Icon1 from "../../assets/Icon-1.svg";
import Icon2 from "../../assets/Icon-2.svg";
import Icon3 from "../../assets/Icon-3.svg";
import Icon4 from "../../assets/Icon-4.svg";
import { Link } from "react-router-dom";
import "../../scss/main.scss";

function Home4Columns() {
	return (
		<div className="quad-col-container">
			<div className="quad-col-title">
				<p>Wystarczą 4 proste kroki</p>
				<Decoration />
			</div>
			<div className="quad-col-greybckg">
				<div className="quad-single-col">
					<div className="quad-col-container-mini">
						<img src={Icon1} alt="shirt" />
						<h6 className="quad-mini-title">Wybierz rzeczy</h6>
						<hr style={{ width: "55%", textAlign: 'center' }} />
						<text className="quad-mini-text">ubrania, zabawki, sprzęt i inne</text>
					</div>
				</div>
				<div className="quad-single-col">
					<div className="quad-col-container-mini">
						<img src={Icon2} alt="bag" />
						<h6 className="quad-mini-title">Spakuj je</h6>
						<hr style={{ width: "55%", textAlign: 'center' }} />
						<text className="quad-mini-text">skorzystaj z worków na śmieci</text>
					</div>
				</div>
				<div className="quad-single-col">
					<div className="quad-col-container-mini">
						<img src={Icon3} alt="magnify" />
						<h6 className="quad-mini-title">Zdecyduj komu chcesz pomóc</h6>
						<hr style={{ width: "55%", textAlign: 'center' }} />
						<text className="quad-mini-text">wybierz zaufane miejsce</text>
					</div>
				</div>
				<div className="quad-single-col">
					<div className="quad-col-container-mini">
						<img src={Icon4} alt="recycle" />
						<h6 className="quad-mini-title">Zamów kuriera</h6>
						<hr style={{ width: "55%", textAlign: 'center' }} />
						<text className="quad-mini-text">kurier przyjedzie w dogodnym terminie</text>
					</div>
				</div>
			</div>

			<Link to="/login" className="quad-col-btn">Oddaj rzeczy</Link>
		</div>
	)
}

export default Home4Columns;