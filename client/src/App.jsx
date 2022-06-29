
import React from 'react'
import Main from './MainEntryComponents/Main.jsx'
import Header from './Header/Header.jsx'
import PolygonOverlay from './Overlays/PolygonOverlay'
import Projects from './ProjectComponents/Projects'
import ContactForm from './ContactComponents/ContactForm';
import SolutionsMain from './SolutionsComponents/SolutionsMain';
import Footer from './Footer/Footer'


const App = () => {
  
  return (
    <>
      <Header />
      <Main />
      <PolygonOverlay /> 
      <Projects />
      <SolutionsMain />
      <ContactForm />
      <Footer/>
    </>
  );
  };

export default App;
