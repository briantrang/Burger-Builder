import React, { useState, useEffect, useCallback } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";



const BurgerBuilder = props =>{

    const [purchasing, setPurchasing] = useState(false);

    const dispatch = useDispatch();

    const ings = useSelector(state => {
        return state.burgerBuilder.ingredients
    });
    const price = useSelector(state => {
        return state.burgerBuilder.totalPrice
    });
    const error = useSelector(state => {
        return state.burgerBuilder.error
    });
    const isAuthenticated = useSelector(state => {
        return state.auth.token !== null
    });

    const onIngredientAdded = ingName => dispatch(actions.addIngredient(ingName));
    const onIngredientRemoved = ingName => dispatch(actions.removeIngredient(ingName));
    const onInitIngredients = useCallback(() => dispatch(actions.initIngredients()), []);
    const onInitPurchased = () => dispatch(actions.purchaseInit());
    const onSetAuthRedirectPath = path => dispatch(actions.setAuthRedirectPath(path));

    useEffect(() => {
        onInitIngredients();
    }, [onInitIngredients]);


    const updatePurchaseState = (ingredients) =>{
        
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return  ingredients[igKey];
        })
        .reduce((sum, el) =>{
            return sum + el;
        },0);
        return sum > 0 ;
    }

    const purchaseHandler = () => {
        if (isAuthenticated){
            setPurchasing(true);
        }else{
            onSetAuthRedirectPath('/checkout');
            props.history.push('/auth');
        }
    }
    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        onInitPurchased();
        props.history.push('/checkout');
    };

    const disabledInfo = {
        ...ings
    };
        
    for (let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null;
    let burger = error ? <p>Ingredients can't be loaded!</p> : <Spinner />

    if (ings){
        burger = (
            <Aux>
                <Burger ingredients = {ings}/>
                <BuildControls
                    ingredientAdded={onIngredientAdded}
                    ingredientRemoved={onIngredientRemoved}
                    disabled={disabledInfo}
                    purchasable={updatePurchaseState(ings)}
                    ordered={purchaseHandler}
                    price={price}
                    isAuth={isAuthenticated}/>
        </Aux> 
        );

        orderSummary = <OrderSummary 
            ingredients={ings} 
            purchaseCanceled={purchaseCancelHandler}
            purchaseContinue={purchaseContinueHandler}
            price={price}/>;
    }

    return(
        <Aux>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}> 
                {orderSummary}
            </Modal>
            {burger}
        </Aux>    
        );
    };



export default (withErrorHandler(BurgerBuilder, axios));