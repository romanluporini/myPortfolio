import React from "react";
import Nav from "../components/Nav";
import ArrowButton from '../components/ArrowButton'
import FloatingButtonAdd from "../components/FloatingButtonAdd";
import Scroll from "../components/Scroll";
import TypeWriter from '../Helpers/TypeWriter'
import useWindowDimensions from '../Hooks/UseWindowDimensions'
import { Button } from '@material-ui/core';
import '../Styles/3-layout/_home.scss'
import '../Styles/2-base/_typography.scss'
import '../Styles/1-components/_button.scss'
import '../Styles/1-components/_scroll.scss'

function Home() {

  const { width } = useWindowDimensions()

  return (
    <div className="home" id="home">
      <div className="home__Bg">
        <div className="stars1"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="home__Bg--filtered-layer"></div>
      </div>
      <Nav queryFlag={width}/>
      <div className="header-content">
        <TypeWriter />
        <h4 className="header-content__subtitle">
          My name is <span>Román Luporini</span>. I'm a <span> Full Stack Web Developer</span> based in
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
        <Scroll queryFlag={width} />
      <div className="fab-box">
        <FloatingButtonAdd />
      </div>
      {/* <div className="arrow-button-box">
        <ArrowButton scrollTo={'about'} />
      </div> */}
    </div>
  );
}

export default Home;
