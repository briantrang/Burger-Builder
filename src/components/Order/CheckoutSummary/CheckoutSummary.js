import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import Style from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {

    return(
        <div className={Style.CheckoutSummary}>
            <h1>We hope it takes well!</h1>
        
            <div style={{width: '100%',  margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked={props.onCheckoutCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>Continue</Button>
        </div>
    )

}

export default checkoutSummary;