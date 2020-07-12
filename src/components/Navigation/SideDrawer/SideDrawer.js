import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Style from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {

    let attachedClasses = [Style.SideDrawer, Style.Close];
    if(props.open){
        attachedClasses = [Style.SideDrawer, Style.Open];
    }


    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')} onClick={props.closed}>
            <div className={Style.Logo}>
                <Logo  />
            </div>    
            <nav>
                <NavigationItems isAuthenticated={props.isAuth}/>
            </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;