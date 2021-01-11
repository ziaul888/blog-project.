import React, { Component } from 'react';
import Services from '../components/TopBanner/Services';
import TopBanner from "../components/TopBanner/TopBanner";
import TopNavigation from "../components/TopNavigation/TopNavigation"
import Analysis from '../components/Analysis/Analysis'
import Summery from "../components/Summary/Summary"
import Project from '../components/Project/Project';
import Coursea from '../components/courses/Coursea';
import Video from '../components/Video/Video'
import ClientReview from "../components/ClientReview/ClientReview"
import Footer from "../components/Footer/Footer"


class HomePage extends Component {
    render() {
        return (
            <>
                <TopNavigation/>
                <TopBanner/>
                <Services/>
                <Analysis/>
                <Summery/>
                <Project/>
                <Coursea/>
                <Video/>
                <ClientReview/>
                <Footer/>
            </>
        );
    }
}

export default HomePage;