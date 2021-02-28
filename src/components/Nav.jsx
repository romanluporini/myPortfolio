import React, { useState, useEffect } from 'react'
import { Fragment } from 'react'

function Nav(props) {

  const [queryFlag, setQueryFlag] = useState()

  useEffect(() => {
    if (props.queryFlag > 1024) {
      return setQueryFlag(true)
    } else {
      return setQueryFlag(false)
    }
  }, [props.queryFlag])

  return (
    <Fragment>
      {queryFlag &&
        <nav>
          <div className="menu-list">
            <a href="#home" className="link">home</a>
            <a href="#about" className="link">about</a>
            <a href="#freelance" className="link">freelance</a>
            <a href="#portfolio" className="link">portfolio</a>
            <a href="#resume" className="link">resume</a>
            <a href="#contact" className="link">contact</a>
          </div>
        </nav>
      }
    </Fragment>
  )
}

export default Nav
