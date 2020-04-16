import React from 'react';
import Card from "../Card/Card";
import classes from './Cards.module.css';

//Временное заполнение массива
const cards = new Array( 9 )
    .fill( '' )
    .map( ( _, i ) => i )

const Cards = props => {
    return (

        <div className={ classes.Cards }>
            <div className="row">
                { cards.map( ( card, i ) => {
                    return (
                        <div key={ i } className="col-sm-4">
                            <Card/>
                        </div>
                    )
                } ) }
            </div>

        </div>
    );
};

export default Cards;