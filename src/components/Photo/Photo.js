import React, { Component, Fragment } from 'react';
import BackDrop from "../UI/BackDrop/BackDrop";
import classes from './Photo.module.scss';
import { connect } from "react-redux";
import { onCloseBackdrop } from "../../redux/actions/mainPage";


class Photo extends Component {

    render() {

        function getPhoto(state) {
            return state.data.find(item => {
                return item.id === state.match.params.id
            })
        }

        return (
            <Fragment>
                <div className={classes.modal}>
                    <div>
                        <a href={getPhoto(this.props).user.links.html} className="card-title" target="_blank"
                           rel="noopener noreferrer">{getPhoto(this.props).user.username}
                            <img className={classes.linkPhoto} src={getPhoto(this.props).user.profile_image.small}
                                 alt={getPhoto(this.props).user.username}/>
                        </a>
                        <span>Дата публикации: <time
                            className="card-text">{new Date(getPhoto(this.props).created_at).toDateString()}</time></span>
                        <span className="card-text d-inline-block"> {getPhoto(this.props).likes}
                            <button><i className="material-icons d-inline-block">favorite</i></button>
                        </span>
                    </div>
                    <div className={classes.modal_body}>
                        <img src={getPhoto(this.props).urls.regular} className={classes.photo}
                             alt={getPhoto(this.props).alt_description}/>
                    </div>
                </div>
                <BackDrop onClick={this.props.onCloseBackdrop}/>
            </Fragment>
        );
    }
}


function mapStateToProps(state) {
    return {
        data: state.mainPage.data,
        isOpen: state.mainPage.isOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onCloseBackdrop: () => dispatch(onCloseBackdrop())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
