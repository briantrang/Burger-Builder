import React from 'react';
import Style from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <li className={Style.NavigationItem}>
        <NavLink to={props.link}
        exact={props.exact}
        activeClassName={Style.active}>{props.children}</NavLink>
    </li>
);

export default navigationItem;