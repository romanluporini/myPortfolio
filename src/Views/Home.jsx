import React from "react";
import ArrowButton from '../components/ArrowButton'
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '../components/Drawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronLeft, faTimes } from "@fortawesome/free-solid-svg-icons";
import '../Styles/2-base/_typography.scss'
import '../Styles/1-components/_button.scss'
import '../Styles/3-layout/_home.scss'

function Home() {
  return (
    <div className="home" id="home">
      <div className="to-filter"></div>
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
      <div className="header-content">
        <h1 className="header-content__title">
          {'Think > Plan > Execute'} <span>.</span>
        </h1>
        <h4 className="header-content__subtitle">
          Hello, my name is <span>Román</span>. I'm a <span> Full Stack Web Developer</span> based in
          Argentina.
        </h4>
        <div className="buttons">
          <Button variant="contained" color="secondary" className="button">
            <a href="#portfolio">
              checkout my work
          </a>
          </Button>
          <Button variant="contained" color="secondary" className="button">
            <a href="#contact">
              hire me
          </a>
          </Button>
        </div>
      </div>
      <div className="arrow-button-box">
        <ArrowButton />
      </div>
    </div>
  );
}

export default Home;
