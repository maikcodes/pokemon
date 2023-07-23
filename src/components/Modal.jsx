import '../styles/Modal.css'

function Modal({ handleClose, show, children, title }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className=''>
        <section className="modal-main">
          <div className='row modal-title'>
            <h3>{title}</h3>
          </div>
          {children}
        </section>
      </div>
    </div>
  );
}

export default Modal