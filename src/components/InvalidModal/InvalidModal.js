import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function InvalidModal() {
	return (
		<div>
			<Modal
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Modal heading
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras
						justo odio, dapibus ac facilisis in, egestas eget quam.
						Morbi leo risus, porta ac consectetur ac, vestibulum at
						eros.
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default InvalidModal;
