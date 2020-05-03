import React, { Component, Fragment } from 'react';
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import { fetchPhotoByQuery, onChangeHandler } from "../../redux/actions/mainPage";

class Layout extends Component {

    render() {
        return (
            <Fragment>
                <Header
                    onSubmit={this.props.fetchPhotoByQuery}
                    value={this.props.value}
                    onChange={this.props.onChangeHandler}
                />
                <main className="center-align">
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        value: state.mainPage.value
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPhotoByQuery: (e) => dispatch(fetchPhotoByQuery(e)),
        onChangeHandler: (e) => dispatch(onChangeHandler(e))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Layout);
