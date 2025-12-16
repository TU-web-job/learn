import Modal from "react-modal";
import style from "./modal.module.css";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
}

export const CommonModal = ({ isOpen, closeModal, children }: ModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className={style.modal}
            overlayClassName={style.overlay}
        >
        <button onClick={closeModal} className={style.modal_close} type="button" aria-label="閉じる">×</button>
        <div className={style.body}>{children}</div>
        </Modal>
    )
}