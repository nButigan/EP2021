import React, {Component} from 'react';

import Layout from '../../components/Layout/Layout';
import Navbar from '../../components/Navbar/Navbar';
import CentralPanel from '../../components/CentralPanel/CentralPanel';
import AboutUs from '../../components/AboutUs/AboutUs';
import Billboards from '../../components/Billboards/Billboards';
import Services from '../../components/Services/Services';
import Contact from '../../components/Contact/Contact';


class AdSellerApp extends Component {
    
    render() {
        return(
            <Layout>
                <Navbar></Navbar>
                <CentralPanel></CentralPanel>
                <Billboards></Billboards>
                <AboutUs></AboutUs>
                <Services></Services>
                <Contact></Contact>
            </Layout>
        );
    }
}

export default AdSellerApp;