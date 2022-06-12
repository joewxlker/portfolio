
import './App.css';
import React, { Component } from 'react'
import Main from './MainEntryComponents/Main.jsx'
import { Fragment } from 'react';
import Header from './MainEntryComponents/Header.jsx'
import PolygonOverlay from './MainEntryComponents/PolygonOverlay'
import SectionOne from './MainEntryComponents/SectionOne';
import ContactMe from './MainEntryComponents/ContactMe';
import SolutionsMain from './SolutionsComponents/SolutionsMain';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <PolygonOverlay />
        <SectionOne />
        <SolutionsMain />
        <ContactMe />
      </Fragment>
    );
  };
}

export default App;
