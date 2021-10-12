import "./MainCard.module.scss";
import Button from "react-bootstrap/Button";
import styles from "./MainCard.module.scss";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import InvalidModal from "../InvalidModal/InvalidModal";

function MainCard(props) {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState(0);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);

	const userInputHandler = (event) => {
		event.preventDefault();
		if (username.trim().length < 0 || username === "") {
			console.log("invalid");
			return setShow(true);
		}
		if (age <= 0 || age === "") {
			console.log("invalid");
			return setShow(true);
		}

		const newUserInput = {
			id: Math.random().toString(),
			username: username,
			age: age,
		};
		props.onUserInput(newUserInput);
	};

	const usernameChangeHandler = (event) => {
		setUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setAge(event.target.value);
	};

	return (
		<div>
			{show && <InvalidModal show={show} onHide={handleClose} />}

			<Card className={styles["card-container"]}>
				<form onSubmit={userInputHandler}>
					<Form.Group className="mb-3">
						<Form.Label>Username</Form.Label>
						<Form.Control
							className={styles.label}
							type="text"
							placeholder="your username"
							onChange={usernameChangeHandler}
						/>
						<Form.Label className="mt-3">Age (Years) </Form.Label>
						<Form.Control
							type="number"
							placeholder="your age"
							onChange={ageChangeHandler}
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
