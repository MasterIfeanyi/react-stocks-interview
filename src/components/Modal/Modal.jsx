import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import "./Modal.css"

const Modal = ({
  title = 'Authentication Required',
  message = 'Please log in to continue.',
  timeout = 20000,
  redirectPath = '/auth',
  onClose = () => {},
}) => {
    
    const navigate = useNavigate();


    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
            navigate(redirectPath); // 👈 better
        }, timeout);

        return () => clearTimeout(timer);

    }, [onClose, timeout, redirectPath]);




  return ReactDOM.createPortal(
    <div className="modal-backdrop show fade" style={{ zIndex: 1050 }}>
      <div
        className="modal d-block fade show"
        tabIndex="-1"
        role="dialog"
        style={{ zIndex: 1055 }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content p-4 text-center">
            <h5 className="mb-3">{title}</h5>
            <p className="text-muted mb-0">{message}</p>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default Modal