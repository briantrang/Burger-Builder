import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import Style from './NavigationItems.module.css'

const navigationItems = (props) => (
    <ul className={Style.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null }
        {!props.isAuthenticated 
            ? <NavigationItem link="/auth">Authenticate</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>}
            
    </ul>
);
export default navigationItems;