import React, {Component} from 'react';

import Layout from '../../components/Layout/Layout';
import Navbar from '../../components/Navbar/Navbar';



class AdminPanel extends Component {
    
    render() {
        return(
            <Layout>
                <Navbar></Navbar>
            </Layout>
        );
    }
}

export default AdminPanel;