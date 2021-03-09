import React, { useState, useEffect } from 'react'
import { Fragment } from 'react'

function Nav(props) {

  const [queryFlag, setQueryFlag] = useState()
  const navLinks = ['home', 'about', 'freelance', 'portfolio', 'resume', 'contact']

  useEffect(() => {
    if (props.queryFlag > 1024) return setQueryFlag(true)
    return setQueryFlag(false)
  }, [props.queryFlag])

  return (
    <Fragment>
      {queryFlag &&
        <nav>
          <div className="nav__menu-list">
            {navLinks.map((view, key) => <a key={key} href={`#${view}`} className="nav__link">{view}</a>)}
            {/* <a href="#home" className="nav__link">home</a>
            <a href="#about" className="nav__link">about</a>
            <a href="#freelance" className="nav__link">freelance</a>
            <a href="#portfolio" className="nav__link">portfolio</a>
            <a href="#resume" className="nav__link">resume</a>
            <a href="#contact" className="nav__link">contact</a> */}
          </div>
        </nav>}
    </Fragment>
  )
}

export default Nav
