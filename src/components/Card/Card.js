import React from 'react';
import classes from './Card.module.css'

const Card = props => {
const cls = [classes.Card, 'mb-5', 'text-light', ]

    return (
            <div className={cls.join(' ')}>
                <img src={props.src} alt={props.alt} className="card-img"/>
                <div className="card-img-overlay">
                    <a href={props.link} className="card-title">{props.name}</a>
                    <time className="card-text">{props.date}</time>
                    <span className="card-text d-inline-block"> {props.likes} <i className="material-icons">favorite</i></span>
                </div>
            </div>
    );
};

export default Card;