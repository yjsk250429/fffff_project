import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import { ModalStyle } from './style';
import { useNavigate } from 'react-router-dom';

const Modal = ({
    text = '기본 텍스트',
    onClose,
    showHomeButton = true,
    showConfirmButton = true,
}) => {
    const navigate = useNavigate();
    const onHome = () => {
        navigate('/');
        onClose();
    };

    return ReactDOM.createPortal(
        <ModalStyle onClick={onClose}>
            <ul className="modal-box" onClick={(e) => e.stopPropagation()}>
                <li className="modal-li">{text}</li>
                <li className="modal-li">
                    {showHomeButton && (
                        <Button
                            className="modal-button1"
                            text="홈으로"
                            width="120px"
                            onClick={onHome}
                        />
                    )}
                    {showConfirmButton && (
                        <Button
                            className="modal-button2"
                            text="확인"
                            width="120px"
                            onClick={onClose}
                        />
                    )}
                </li>
            </ul>
        </ModalStyle>,
        document.body
    );
};

export default Modal;
