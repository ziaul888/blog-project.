import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './router/AppRoute';
//import ContactSection from './components/ContactSection/ContactSection';
//import ContactPage from './pages/Contactpage';
//import ServicesPage from './pages/ServicesPage';
//import AllCourse from './components/AllCourse/AllCourse';
//import AllCoursePage from './pages/AllCoursePage';
//import Portfoliopage from './pages/Portfoliopage';
//import About from './pages/About';

//import from PageTop from "./components/PageTop/PageTop"

function App() {
  return (
    <BrowserRouter>
      <AppRoute/>
    </BrowserRouter>
  );
}

export default App;
