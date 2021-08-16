import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogTitles from "./HogTitles";

function App() {
	return (
		<div className="App">
			<Nav />
			<HogTitles hogs={hogs}/>
		</div>
	);
}

export default App;
