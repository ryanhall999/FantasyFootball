import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

let api = "7bu4nt3fvtmt";

function App() {
	const handleClick = async (e) => {
		e.preventDefault();
		await axios
			.get(`https://www.fantasyfootballnerd.com/service/schedule/json/${api}`)
			.then(console.log(response))
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<button onClick={handleClick}>Click Me</button>
		</div>
	);
}

export default App;
//
