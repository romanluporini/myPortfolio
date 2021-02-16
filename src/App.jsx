import React from 'react'
import Home from './Views/Home'
import AboutMe from './Views/AboutMe'
import Portfolio from './Views/Portfolio'
import Freelance from './Views/Freelance'
import Resume from './Views/Resume'
import Contact from './Views/Contact'
import Footer from './Views/Footer'
import './Styles/main.scss'

function App() {
  return (
    <div className="App">
      <Home/>
      <AboutMe/>
      <Portfolio/>
      <Freelance/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
