import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIncredients = Object.keys(props.ingredients)
        .map( igKe => {
            return [...Array(props.ingredients[igKe])].map((_, i) =>{
                console.log('igKe');
                console.log(igKe);
                console.log('_');
                console.log(_);

                return <BurgerIngredient key={ igKe + i } type={igKe}/>;
            });
        })
        .reduce((arr, e) => {
            return arr.concat(e);
        }, []);
    if (transformedIncredients.length === 0) {
        transformedIncredients = <p>Please start adding ingredients</p>
    }
    console.log(transformedIncredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIncredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
}

export default burger;