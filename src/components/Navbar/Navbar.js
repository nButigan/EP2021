import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import classes from './Navbar.module.css';
import logo from './logo.png';
import login from './login.png';
import Auth from '../../containers/Auth/Auth';

class Navbar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }
    _onButtonClick() {
        this.setState({
          showComponent: true,
        });
      }
    render(){
        return (
                <div className={classes.navbar}>
                    <a href="/"><div className={classes.navbar_logo_div}><img src={logo} alt="logo" className={classes.navbar_images}/></div></a>
                    <a href="/"><button className={classes.navbar_button1}>POČETNA</button></a>
                    <button className={classes.navbar_button2}>PANELI</button>
                    <button className={classes.navbar_button3}>O NAMA</button>
                    <button className={classes.navbar_button4}>USLUGE</button>
                    <button className={classes.navbar_button5}>KONTAKT</button>
                    <a href="/login">
                        <div className={classes.navbar_login_div}>
                            <img src={login} alt="Login" className={classes.navbar_images} 
                            onClick={this._onButtonClick}/>
                        </div>
                    </a>
                </div>
                );
    }
};

export default Navbar;