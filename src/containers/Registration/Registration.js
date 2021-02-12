import React, { Component } from 'react';

import classes from './Registration.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Layout from '../../components/Layout/Layout';
import RegistrationForm from './RegistrationForm/RegistrationForm';

class Registration extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
    }
    
    render(){
        return (
                <Layout>
                  <Navbar/>  
                  <RegistrationForm/>
                </Layout>
                );
    }
};

export default Registration;