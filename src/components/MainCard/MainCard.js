import "./MainCard.module.scss";
import Button from "react-bootstrap/Button";
import styles from "./MainCard.module.scss";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import InvalidModal from "../InvalidModal/InvalidModal";

function MainCard(props) {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");
	const [show, setShow] = useState(false);
	const [notValidUsername, setNotValidUsername] = useState("");
	const [notValidAge, setNotValidUserAge] = useState("");
	const [notValidAgeAndUsername, setNotValidUserAgeAndUsername] =
		useState("");

	const handleClose = () => setShow(false);

	// Handing and verifying the user inputted data
	const userInputHandler = (event) => {
		event.preventDefault();

		if (
			(age <= 0 || age === "") &&
			(username.trim().length < 0 || username === "")
		) {
			setNotValidUsername("");
			setNotValidUserAge("");
			setNotValidUserAgeAndUsername(
				"Please enter a valid username and age"
			);

			return setShow(true);
		}

		if (username.trim().length < 0 || username === "") {
			setNotValidUserAge("");
			setNotValidUserAgeAndUsername("");
			setNotValidUsername("Please enter a valid username");

			return setShow(true);
		}
		if (age <= 0 || age === "") {
			setNotValidUserAgeAndUsername("");
			setNotValidUsername("");
			setNotValidUserAge("Please enter a valid age");
			return setShow(true);
		}

		const newUserInput = {
			id: Math.random().toString(),
			username: username,
			age: age,
		};
		props.onUserInput(newUserInput);

		setAge("");
		setUsername("");
	};

	const usernameChangeHandler = (event) => {
		return setUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		return setAge(event.target.value);
	};

	const modalCloseHandler = () => {
		return setShow(false);
	};

	return (
		<div>
			{show && (
				<InvalidModal
					show={show}
					onHide={handleClose}
					modalClose={modalCloseHandler}
					username={notValidUsername}
					age={notValidAge}
					usernameAge={notValidAgeAndUsername}
				/>
			)}

			<Card className={styles["card-container"]}>
				<form onSubmit={userInputHandler}>
					<Form.Group className="mb-3">
						<Form.Label>Username</Form.Label>
						<Form.Control
							className={styles.label}
							type="text"
							placeholder="your username"
							onChange={usernameChangeHandler}
							value={username}
						/>
						<Form.Label className="mt-3">Age (Years) </Form.Label>
						<Form.Control
							type="number"
							placeholder="your age"
							onChange={ageChangeHandler}
							value={age}
						/>
					</Form.Group>
					<Button className="mt-3" variant="primary" type="submit">
						Add User
					</Button>
				</form>
			</Card>
		</div>
	);
}

export default MainCard;
