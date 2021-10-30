import { Modal, Button } from "react-bootstrap";

const DeleteMModal = ({ handelDeleteOrder, deleteId, ...props }) => {
  return (
    <Modal {...props} size="sm" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h4 className="text-center">Do you delete ?</h4>
        <Button className="text-center" onClick={props.onHide}>
          Yes
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteMModal;
