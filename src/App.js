import "./App.scss";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

import { useState, useEffect } from "react";

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

	// local storage issue
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const isNewUserLoggedIn = () => {
		const storedUserLogin = localStorage.getItem("OLD-USER");

		if (storedUserLogin === "yes") {
			setIsLoggedIn(true);
		}
	};

	useEffect(isNewUserLoggedIn, []);

	console.log(isLoggedIn);

	return (
		<>
			<AddUser
				onUserInput={updateDatabaseHandler}
				userData={updateData}
			/>
			<UserList userData={updateData} />
		</>
	);
}
export default App;
