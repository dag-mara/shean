import Modal from 'react-modal';

export const ModalWindow = (props) => {
    return (
        <Modal
            role="alertdialog"
            isOpen={props.modalIsOpen}
            contentLabel="Example Modal"
        >  
            <p>Děkujeme!<br />
            Váš dárkový kód <strong>{props.code}</strong> jsme zaslali na Váš e-mail <strong>{props.email}</strong>
            </p>
            <div className="button-wrapper">
                <button onClick={props.closeModal}>zavřít</button>
            </div>
        </Modal>
    )
}