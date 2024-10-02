import React from "react";
import SecondsCounter from "./SecondsCounter";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Simple Counter</h1>
			<div className="counter-container">
				<SecondsCounter />
			</div>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;