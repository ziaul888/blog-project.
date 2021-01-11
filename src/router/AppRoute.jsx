import React, { Component } from 'react';
import {Route,Switch} from "react-router-dom"
import HomePage from "../pages/HomePage"
import ServicesPage from "../pages/ServicesPage"
import AllCoursePage from '../pages/AllCoursePage'
import PortfolioPage from "../pages/Portfoliopage"
import ContactPage from '../pages/Contactpage'
import AboutPage from "../pages/About"

class AppRoute extends Component {
    render() {
        return (
            <>
              <Switch>
                  <Route exact path="/" component={HomePage}/>
                  <Route exact path="/services" component={ServicesPage}/>
                  <Route exact path="/course" component={AllCoursePage}/>
                  <Route exact path="/portfolio" component={PortfolioPage}/>
                  <Route exact path="/contact" component={ContactPage}/>
                  <Route exact path="/about" component={AboutPage}/>
                  
                  
             </Switch>  
            </>
        );
    }
}

export default AppRoute;
