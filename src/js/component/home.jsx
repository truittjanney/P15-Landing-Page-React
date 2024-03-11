import React from "react";
import Cards from "./cards.jsx";
import Row from "./row.jsx";
import Footer from "./footer.jsx";
import Navbar from "./navbar.jsx" 
import Jumbotron from "./jumbotron.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<Row/>
			<Footer/>
			
		</div>
	);
};

export default Home;
