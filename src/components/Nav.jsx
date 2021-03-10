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
        <nav className="nav">
          <div className="nav__menu-list">
            {navLinks.map((view, key) =>
              <a
                key={key}
                href={`#${view}`}
                className="nav__link"
              >
                {view}
              </a>)
            }
          </div>
        </nav>}
    </Fragment>
  )
}

export default Nav
