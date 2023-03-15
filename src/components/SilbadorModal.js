import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";

function SilbadorModal({ props, show }) {
  // console.log(props);
  console.log(show);
  if (show) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.alt}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="m-auto">
          <img src={props.src} alt={props.alt} height={800} key={props.t} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onClick}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SilbadorModal;
