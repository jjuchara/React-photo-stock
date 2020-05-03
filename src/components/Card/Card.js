import React from 'react';
import classes from './Card.module.scss'
import { Link } from "react-router-dom";

const Card = props => {
    const cls = [ classes.Card, 'mb-5', 'text-light', ]

    return (
        <Link to={`/photo/${props.id}`}>
            <div className={cls.join(' ')}  onClick={props.onClick}>
                <img src={props.src} alt={props.alt} className="card-img"/>
                <div className="card-img-overlay">
                    <a href={props.link} className="card-title link" target="_blank" rel="noopener noreferrer">
                        {props.name}
                        <img className={classes.linkPhoto} src={props.photoLink} alt={props.photoAlt}/>
                    </a>
                    <time className="card-text">{props.date}</time>
                    <span className="card-text d-inline-block"> {props.likes}
                        <i className="material-icons">favorite</i>
                </span>
                </div>
            </div>
        </Link>
    );
};


export default Card;