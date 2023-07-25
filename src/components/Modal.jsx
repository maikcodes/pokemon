import '../styles/Modal.css'
import { ImCross } from 'react-icons/im'
import { IconButton } from './Buttons';

function Modal({ handleClose, show, children, title }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div>
        <section className="modal-main">
          <div className='modal-header'>
            <div className='row-spaced'>
              <h3 className='font-color-blue col-12 col-s-12'>{title}</h3>
              <IconButton icon={<ImCross />} onClick={handleClose} />
            </div>
          </div>
          <div className='modal-body'>
            {children}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Modal