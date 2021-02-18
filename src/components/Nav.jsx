import React from 'react'

function Nav(props) {

    return (
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
    )
}

export default Nav
