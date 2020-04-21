import React, { Fragment } from "react"
import classes from './BackDrop.module.css'

const BackDrop = props => {

    return (
        <Fragment>
            <button className={classes.btn}><i className="material-icons md-36">close</i></button>
            <div className={ classes.BackDrop } onClick={ props.onClick }/>
        </Fragment>
    )
}

export default BackDrop