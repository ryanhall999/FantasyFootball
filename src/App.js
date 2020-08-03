import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

function App() {
	const handleClick = async (e) => {
		e.preventDefault();
		console.log("works");
		// await axios
		// 	.get(
		// 		"https://www.fantasyfootballnerd.com/service/{SERVICE-NAME}/{FORMAT}/{API-KEY}"
		// 	)
		// 	.then((response) => {})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
	};

	return (
		<div>
			<button onClick={handleClick}>Click Me</button>
		</div>
	);
}

export default App;
//
