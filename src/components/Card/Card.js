import React from 'react';
import classes from './Card.module.css'

const Card = props => {
const cls = [classes.Card, 'card', 'mt-5', 'text-light']

    return (
            <div className={cls.join(' ')}>
                <img src="https://images.unsplash.com/photo-1586887395710-0ad3df9d4165?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt={"r"} className="card-img"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">Name && Link</h5>
                    <time className="card-text">14 апреля 2020</time>
                    <span className="card-text d-inline-block"> 20 <i className="material-icons">favorite_border</i></span>
                </div>
            </div>
    );
};

export default Card;