import React, { useState }from 'react';
import Aux from '../../hoc/Aux';
import Style from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

const Layout = props =>{
   
    const [sideDrawerIsVisble, setSideDrawerIsVisible] = useState(false);
    
    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisible(false);
       
    } 

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisble);
    }
    

 
        return(   
            <Aux>
                <Toolbar 
                    isAuth={props.isAuthenticated}
                    drawerToggleClicked={sideDrawerToggleHandler}/>
                <SideDrawer 
                    isAuth={props.isAuthenticated}
                    open={sideDrawerIsVisble} 
                    closed={sideDrawerClosedHandler}/>
                <main className={Style.Content}>
                    {props.children}
                </main>
            </Aux>
        )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);