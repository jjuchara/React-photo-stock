import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import Layout from "./hoc/Layout/Layout";
import Main from "./containers/Main/Main";

class App extends Component {
  render() {

    const routes = (
        <Switch>
          <Route path='/' exact component={Main} />
          <Redirect to='/'/>
        </Switch>
    )

    return (
        <Layout>
          { routes }
        </Layout>
    );
  }
}

function mapStateToProps( state ) {
  return {}
}

function mapDispatchToProps( dispatch ) {
  return {}
}

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );

