
import React from 'react'
import Main from './MainEntryComponents/Main.jsx'
import { Fragment } from 'react';
import Header from './Header/Header.jsx'
import PolygonOverlay from './Overlays/PolygonOverlay'
import Projects from './ProjectComponents/Projects'
import ContactForm from './ContactComponents/ContactForm';
import SolutionsMain from './SolutionsComponents/SolutionsMain';


const App = () => {
  
    return (
      <Fragment>
        <h1>hello</h1>
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
