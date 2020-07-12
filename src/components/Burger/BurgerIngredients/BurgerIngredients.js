import React from 'react';
import Style from './BurgerIngredients.module.css';
import PropTypes from 'prop-types';

const BurgerIngredients = props => {

        let ingredient = null;

        switch (props.type){
            case('bread-bottom'):
                ingredient = <div className={Style.BreadBottom}></div>;
                break;
            case('bread-top'):
                ingredient = <div className={Style.BreadTop}>
                    <div className={Style.Seeds1}></div>
                    <div className={Style.Seeds2}></div>
                </div>
                break;
            case('meat'):
                ingredient = <div className={Style.Meat}></div>
                break;
            case('cheese'):
                ingredient = <div className={Style.Cheese}></div>
                break;
            case('salad'):
                ingredient = <div className={Style.Salad}></div>
                break;
            case('bacon'):
                ingredient = <div className={Style.Bacon}></div>
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    } 

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredients;