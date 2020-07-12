import React from 'react';
import burgerLogo from '../../assets/images/original.png';
import Style from './Logo.module.css';

const logo = (props) => (
    <div className={Style.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBuger" />
    </div>
);


export default logo;