import React from 'react';
import Style from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {

        return(
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div 
                style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'}} 
                className={Style.Modal}>
                {props.children}
            </div>
        </Aux>
        )
    }

export default React.memo(modal, (prevProps, nextProps) => nextProps.show === prevProps.show && nextProps.children === prevProps.children);