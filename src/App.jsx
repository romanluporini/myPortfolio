import React, { useState, useEffect, useRef, Fragment } from 'react'
import Home from './Views/Home'
import AboutMe from './Views/AboutMe'
import Portfolio from './Views/Portfolio'
import Freelance from './Views/Freelance'
import Resume from './Views/Resume'
import Contact from './Views/Contact'
import Footer from './Views/Footer'
import loadingSpinner from './Assets/Animations/loadingSpinner.svg'
import './Styles/1-components/_loadingSpinner.scss'
import './Styles/main.scss'

function App() {

  const [spinner, setSpinner] = useState(true)
  const [loading, setLoading] = useState('loading')
  const counter = useRef(0)

  useEffect(() => {
    function handleInterval() {
      setInterval(() => {
        if (counter.current === 0) {
          counter.current++
        } else if (counter.current === 1) {
          counter.current++
          setLoading('loading.')
        } else if (counter.current === 2) {
          counter.current++
          setLoading('loading..')
        } else {
          counter.current = 0
          setLoading('loading...')
        }
      }, 500)
    }  
    handleInterval()
    setTimeout(() => {
      clearInterval(handleInterval())
      setSpinner(false)
    }, 2500)
  }, [])

  return (
    <div className="App">
      {spinner?
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
