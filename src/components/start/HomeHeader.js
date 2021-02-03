import React from 'react';
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";

function HomeHeader() {
	return (
		<>
			<div className="homepage-title">
				<h1>Zacznij pomagać!</h1>
				<h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
				<Decoration />
			</div>
		</>
	)
}

export default HomeHeader;