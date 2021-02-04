import React from 'react';
import { ReactComponent as Decoration } from "../../assets/Decoration.svg";
import { Link } from "react-router-dom";
import '../../scss/main.scss';


function HomeHeader() {
	return (
		<>
			<div>

				<div className="homepage-text">
					<div className="homepage-title">
						<h1>Zacznij pomagać!</h1>
						<h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
						<Decoration />
					</div>
					<div className="homepage-btns">
						<Link to="/login" className="homepage-btn btn1">Oddaj rzeczy</Link>
						<Link to="/login" className="homepage-btn btn2">Zorganizuj zbiórkę</Link>
					</div>
				</div>

			</div>
		</>
	)
}

export default HomeHeader;