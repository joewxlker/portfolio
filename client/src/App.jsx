
import './App.css';
import React, { Component, useEffect, useState } from 'react'
import Main from './MainEntryComponents/Main.jsx'
import { Fragment } from 'react';
import Header from './MainEntryComponents/Header.jsx'
import PolygonOverlay from './MainEntryComponents/PolygonOverlay'
import Projects from './ProjectComponents/Projects'
import ContactForm from './ContactComponents/ContactForm';
import SolutionsMain from './SolutionsComponents/SolutionsMain';



const App = () => {

  const [isMobile, setIsMobile] = useState()

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.screen.width < 600) setIsMobile(false)
      if (window.screen.width > 600) setIsMobile(true)
    });
  }, []);
  
    return (
      <Fragment>
        <Header />
        <Main />
        <PolygonOverlay />
        <Projects />
        <SolutionsMain />
        <ContactForm />
      </Fragment>
    );
  };

export default App;
