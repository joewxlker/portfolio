
import './App.css';
import React, { Component } from 'react'
import Main from './MainEntryComponents/Main.jsx'
import { Fragment } from 'react';
import Header from './MainEntryComponents/Header.jsx'
import PolygonOverlay from './MainEntryComponents/PolygonOverlay'
import SectionOne from './MainEntryComponents/SectionOne';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <PolygonOverlay />
        <SectionOne/>
      </Fragment>
    );
  };
}

export default App;
