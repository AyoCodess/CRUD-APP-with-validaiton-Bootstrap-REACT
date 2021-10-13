import "./App.scss";
import MainCard from "./components/MainCard/MainCard";
import UserOutput from "./components/UserOutput/UserOutput";

import { useState } from "react";

let DUMMY_DATA = [
	{
		id: 1,
		username: "Ayo",
		age: 31,
	},

	{
		id: 2,
		username: "Angelica",
		age: 33,
	},
	{
		id: 3,
		username: "Inger",
		age: 61,
	},
];

function App() {
	const [updateData, setUpdateData] = useState(DUMMY_DATA);

	const updateDatabaseHandler = (newUserData) => {
		setUpdateData((previousState) => {
			return [newUserData, ...previousState];
		});
	};

	return (
		<div>
			<MainCard onUserInput={updateDatabaseHandler} />
			<UserOutput userData={updateData} />
		</div>
	);
}
export default App;
