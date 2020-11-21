import React from 'react';
import Services from './components/TopBanner/Services';
import TopBanner from "./components/TopBanner/TopBanner";
import TopNavigation from "./components/TopNavigation/TopNavigation"
import Analysis from './components/Analysis/Analysis'
import Summery from "./components/Summary/Summary"



function App() {
  return (
    <div>
     <TopNavigation/>
     <TopBanner/>
      <Services/>
      <Analysis/>
      <Summery/>
      

    </div>
  );
}

export default App;
