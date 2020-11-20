import React from 'react';

import Services from './components/TopBanner/Services';
import TopBanner from "./components/TopBanner/TopBanner";
import TopNavigation from "./components/TopNavigation/TopNavigation"



function App() {
  return (
    <div>
     <TopNavigation/>
     <TopBanner/>
      <Services/>
      

    </div>
  );
}

export default App;
