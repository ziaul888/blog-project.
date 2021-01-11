import React, { Component } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import AboutDescription from '../components/AboutDescriprtion/AboutDescription'
import Footer from '../components/Footer/Footer'

class About extends Component {
    render() {
        return (
            <>
                <TopNavigation/>
                 <PageTop pageTitle='About Me'/>
                <AboutDescription/>
                 <Footer/>
            </>
        );
    }
}

export default About;