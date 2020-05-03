import React, { Fragment } from "react"
import classes from './BackDrop.module.css'
import { Link } from "react-router-dom";

const BackDrop = props => {

    return (
        <Fragment>
            <Link to={'/'} className={classes.btn}><i className="material-icons md-36">close</i></Link>
            <div className={ classes.BackDrop } onClick={ props.onClick }/>
        </Fragment>
    )
}

export default BackDrop