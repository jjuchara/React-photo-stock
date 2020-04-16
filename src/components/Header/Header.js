import React, { Fragment } from 'react';
import Input from '../UI/Input/Input';
import classes from './Header.module.scss';

const Header = props => {

  return (
      <Fragment>
        <header className={ classes.Header }>
          {/*Здесь будет меняющаяся по таймауту картинка на бэкграунде*/ }
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="text-white display-3">Search Photo Application</h1>
                <p className="text-white " style={ { fontSize: 24 } }>You can find any pictures you want, just type word
                  below</p>
                <Input onSubmit={ props.onSubmit }/>
              </div>
            </div>
          </div>
        </header>
      </Fragment>
  );
};

export default Header;