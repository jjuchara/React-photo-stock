import React from 'react';
import classes from './Cards.module.scss';

const Cards = props => {
    return (

        <div className={classes.Cards}>
            {props.children}
        </div>

    );
};

export default Cards;