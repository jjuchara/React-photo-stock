import React, { Component, Fragment } from 'react';
import Header from "../../components/Header/Header";
import Photo from "../../components/Photo/Photo";

class Layout extends Component {

    submiteHandler( e ) {
        e.preventDefault()
    }

    render() {
        return (
            <Fragment>
                <Photo/>
                <Header
                    onSubmit={ ( e ) => this.submiteHandler( e ) }
                />
                <main className="center-align">
                    { this.props.children }
                </main>
            </Fragment>
        );
    }
}

export default Layout;
