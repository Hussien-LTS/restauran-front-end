import { Form, Button, Modal } from "react-bootstrap";

function CustomModal(props) {
  return (
    <Form onSubmit={props.onSubmit}>
      <Modal
        {...props}
        backdrop="static"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={props.handleSubmit}>Add</Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
}

export default CustomModal;
