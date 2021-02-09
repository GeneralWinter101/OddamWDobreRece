import React from 'react'
import "../../scss/main.scss";

function Home3Columns() {
	return (
		<div id="purpose" className="tre-col-container">
			<div className="tre-col-column">
				<div className="tre-col-bignumber">
					10
					</div>
				<h4 className="tre-col-tinytitle">
					Oddanych worków
					</h4>
				<text>Some random text here to fill up the space because lorem ipsum does not work in React!
				</text>
			</div>
			<div className="tre-col-column">
				<div className="tre-col-bignumber">
					5
					</div>
				<h4 className="tre-col-tinytitle">
					Wspartych organizacji
					</h4>
				<text>Some random text here to fill up the space because lorem ipsum does not work in React!
				</text>
			</div>
			<div className="tre-col-column">
				<div className="tre-col-bignumber">
					7
					</div>
				<h4 className="tre-col-tinytitle">
					Zorganizowanych zbiórek
					</h4>
				<text>Some random text here to fill up the space because lorem ipsum does not work in React!
				</text>
			</div>
		</div>
	)
}


export default Home3Columns;