import React, { Component } from 'react';
import { Footer } from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import AllCourse from '../components/AllCourse/AllCourse'
import TopNavigation from '../components/TopNavigation/TopNavigation';

class AllCoursePage extends Component {
    render() {
        return (
            <>
                <TopNavigation/>
                <PageTop pageTitle="All Courses"/>
                <AllCourse/>
                <Footer/>
            </>
        );
    }
}

export default AllCoursePage;