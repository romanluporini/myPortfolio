import React, { useState, useEffect, Fragment } from 'react'
import Home from './Views/Home'
import AboutMe from './Views/AboutMe'
import Portfolio from './Views/Portfolio'
import Freelance from './Views/Freelance'
import Resume from './Views/Resume'
import Contact from './Views/Contact'
import Footer from './Views/Footer'
import loadingSpinner from './Assets/Animations/Eclipse-1s-200px.gif'
import './Styles/1-components/_loadingSpinner.scss'
import './Styles/main.scss'

function App() {

  const [spinner, setSpinner] = useState(true)
  const [loading, setLoading] = useState('loading')
  
  var counter = 0

  function handleInterval() {
    setInterval(() => {
      if (counter === 0) {
        counter++
        console.log(counter)
        setLoading('loading')
      } else if (counter === 1) {
        counter++
        console.log(counter)
        setLoading('loading.')
      } else if (counter === 2) {
        counter++
        console.log(counter)
        setLoading('loading..')
      } else {
        counter = 0
        console.log(counter)
        setLoading('loading...')
      }
    }, 500)
  }

  useEffect(() => {
    handleInterval()
    setTimeout(() => {
      setSpinner(false)
    }, 3000)
  }, [])


  return (
    <div className="App">
      {spinner ?
        <Fragment>
          <div className="loading-spinner">
            <div className="loading-spinner__box">
              <img src={loadingSpinner} alt="loading-spinner" />
              <p>{loading}</p>
            </div>
          </div>
        </Fragment>
        :
        <Fragment>
          <Home />
          <AboutMe />
          <Freelance />
          <Portfolio />
          <Resume />
          <Contact />
          <Footer />
        </Fragment>
      }
    </div>
  );
}

export default App;
