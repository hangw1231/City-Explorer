import React, { useEffect } from 'react'

const Modal = ({ onClose, children }) => {

    useEffect(() => {
        const original = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = original
        }
    }, []);

  return (
    <div className='modal-bg' onClick={onClose} role='modal'>
        <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
            <button type='button' onClick={onClose}>✖</button>
            <span>{children}</span>
        </div>
    </div>
  )
}

export default Modal