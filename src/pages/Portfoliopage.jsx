import React, { Component } from 'react';

import  Footer  from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation'; 
import Project from '../components/Project/Project';

class Portfoliopage extends Component {
    render() {
        return (
            <>
                <TopNavigation/>
                <PageTop pageTitle="All Courses"/>
                <Project/>
                <Footer/>
            </>
        );
    }
}

export default Portfoliopage;