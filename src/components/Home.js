import React from 'react';
// import HomeHeader from "./start/HomeHeader";
import Home4Columns from "./start/Home4Columns";
import Fundacje from "./Fundacje";
import ONas from "./ONas";
import Kontakt from "./Kontakt";
import OCoChodzi from './OCoChodzi';

function Home() {
	return (
		<>
			{/* <HomeHeader /> */}
			<OCoChodzi />
			<Home4Columns />
			<ONas />
			<Fundacje />
			<Kontakt />
		</>
	)
};

export default Home;