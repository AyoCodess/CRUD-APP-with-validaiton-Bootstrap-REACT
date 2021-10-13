import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function InvalidModal(props) {
	const exitModal = (event) => {
		if (event.target === event.target.closest("button")) {
			return props.modalClose();
		}
	};

	return (
		<div>
			<Modal
				show={props.show}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				onClick={exitModal}
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Error
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{props.username && !props.age && <p>{props.username}</p>}
					{props.age && !props.username && <p>{props.age}</p>}
					{props.usernameAge && <p>{props.usernameAge}</p>}
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default InvalidModal;
