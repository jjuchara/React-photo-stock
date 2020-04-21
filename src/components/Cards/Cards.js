import React from 'react';
import classes from './Cards.module.css';

const Cards = props => {
    return (

        <div className={classes.Cards}>
            {/*<div className="row">*/}
            {props.children}
            {/*</div>*/}
        </div>

    );
};

export default Cards;