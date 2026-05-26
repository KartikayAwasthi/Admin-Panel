import Modal from "../ui/Modal";
import Button from "../ui/Button";

const DeleteModal = ({ isOpen, onClose, onConfirm, title = "Delete Article", loading }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Confirm Delete"
      actions={
        <div className="flex gap-3 w-full">
          <Button variant="secondary" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button variant="danger" onClick={onConfirm} disabled={loading} className="flex-1">
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </div>
      }
    >
      <p className="text-gray-600">
        Are you sure you want to delete "<strong>{title}</strong>"? This action cannot be undone.
      </p>
    </Modal>
  );
};

export default DeleteModal;
