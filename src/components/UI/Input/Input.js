import React from 'react';
import classes from './Input.module.scss';

const Input = props => {

    const cls = [ classes.Input, "input-group input-group-prepend bg-white rounded" ]

    return (
        <form
            onSubmit={ props.onSubmit }
            className={ cls.join( ' ' ) }>
            <button className=" col-form-label btn btn-lg border-right-0 border-white input-group-prepend"
                    type="submit">
                <i className="material-icons">search</i>
            </button>
            <input id="search" type="text"
                   className="form-control form-control-lg border-white border-left-0 rounded-right-0 p-0"
                   placeholder="Search photo"
            />
        </form>
    )
};

export default Input;