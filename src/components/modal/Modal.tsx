import { MouseEvent } from 'react'

import { Fade, ModalStyle } from './styles';

import { IModal } from '../../interfaces/Modal';

const Modal = ({ children, reference }: IModal) => {

    const closeModal = (e: MouseEvent): void => {
        
        if(reference.current !== null){
            reference.current.style.display = 'none';
        };
    };

    return (
        <div ref={ reference }>
            <Fade onClick={ closeModal } />
            <ModalStyle>
                <h2>Texto do modal</h2>
                { children }
            </ModalStyle>
        </div>
    );
};

export default Modal;
