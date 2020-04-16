import React, { Component, Fragment } from 'react';
import BackDrop from "../UI/BackDrop/BackDrop";
import classes from './Photo.module.scss';
class Photo extends Component {
    render() {
        return (
            <Fragment>
                <div className={ classes.modal }>
                    <div className="my-modal-header">
                        <h5 className="card-title">Name && Link</h5>
                        <time className="card-text">14 апреля 2020</time>
                        <span className="card-text d-inline-block"> 20 <i className="material-icons">favorite_border</i></span>
                    </div>
                    <div className="my-modal-body">
                        <img
                            src="https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                            alt=""/>
                    </div>
                </div>

                <BackDrop/>
            </Fragment>
        );
    }
}

export default Photo;
