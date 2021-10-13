import styles from "./UserList.module.scss";

import { Toast } from "react-bootstrap";
import { useState } from "react";

function UserList(props) {
	const [closeToast, setCloseToast] = useState(false);

	const exitToast = (event) => {
		const element = event.target;
		const parentToast = element.closest(".toast");
		parentToast.classList.remove("show");
		setCloseToast(false);
	};

	return (
		<ul>
			{props.userData.map((user) => {
				return (
					!closeToast && (
						<li>
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
						</li>
					)
				);
			})}
		</ul>
	);
}

export default UserList;
