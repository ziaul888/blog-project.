import React from 'react';
import Services from './components/TopBanner/Services';
import TopBanner from "./components/TopBanner/TopBanner";
import TopNavigation from "./components/TopNavigation/TopNavigation"
import Analysis from './components/Analysis/Analysis'
import Summery from "./components/Summary/Summary"
import Project from './components/Project/Project';
import Coursea from './components/courses/Coursea';
import Video from './components/Video/Video'
import ClientReview from "./components/ClientReview/ClientReview"

function App() {
  return (
    <div>
     <TopNavigation/>
     <TopBanner/>
      <Services/>
      <Analysis/>
      <Summery/>
      <Project/>
      <Coursea/>
      <Video/>
      <ClientReview/>

    </div>
  );
}

export default App;
