import styles from "./UserOutput.module.scss";

import { Toast } from "react-bootstrap";
import { useState } from "react";
import { childNodes } from "dom-helpers";

function UserOutput(props) {
	const [closeToast, setCloseToast] = useState(false);

	const exitToast = (event) => {
		const element = event.target;
		const parentToast = element.closest(".toast");
		parentToast.classList.remove("show");
	};

	return (
		<div>
			{props.userData.map((user) => {
				return (
					!closeToast && (
						<Toast 
							key={user.id}
							id={user.id}
							onClose={exitToast}
							className={styles["toast-container"]}
						>
							<Toast.Header>
								<strong className="me-auto">
									{user.username}
								</strong>
							</Toast.Header>
							<Toast.Body>{user.age}</Toast.Body>
						</Toast>
					)
				);
			})}
		</div>
	);
}

export default UserOutput;
