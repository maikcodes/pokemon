import './Modal.css'
import { IconButton } from '../buttons/Buttons';
import { ImCross } from 'react-icons/im'
import { useEffect } from 'react';

function Modal(props) {
  const { handleClose, show, children, title } = props
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [show]);

  return (
    <div className={showHideClassName} tabIndex={-1} onKeyDown={handleKeyDown}>
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
  );
}

export default Modal