import React, {Component} from 'react';

import Layout from '../../components/Layout/Layout';
import Navbar from '../../components/Navbar/Navbar';



class UserPanel extends Component {
    
    render() {
        return(
            <Layout>
                <Navbar></Navbar>
            </Layout>
        );
    }
}

export default UserPanel;