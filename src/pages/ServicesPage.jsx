import React, { Component } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/TopBanner/Services"
import Footer from "../components/Footer/Footer";
class ServicesPage extends Component {
    render() {
        return (
            <>
               <TopNavigation/>
                <PageTop pageTitle=" MY Services" />
                <Services/>
                <Footer/> 
            </>
        );
    }
}

export default ServicesPage;