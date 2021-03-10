import React from "react";
import Nav from "../components/Nav";
import Scroll from "../components/Scroll";
import TypeWriter from '../components/TypeWriter'
import { Button } from '@material-ui/core';
import useWindowDimensions from '../Hooks/UseWindowDimensions'
import homeBg from '../Assets/Images/home-bg.jpg'
import '../Styles/3-layout/_home.scss'
import '../Styles/2-base/_typography.scss'
import '../Styles/1-components/_button.scss'
import '../Styles/1-components/_scroll.scss'

function Home() {

  const { width } = useWindowDimensions()

  return (
    <div className="home" id="home">
      <div className="home__Bg">
        <img src={homeBg} alt="home-background" className="home__Bg__img"/>
        <div className="home__Bg--filtered-layer"></div>
      </div>
      <Nav queryFlag={width}/>
      <div className="header-content">
        <TypeWriter/>
        <h4 className="header-content__subtitle">
          I'm a <span> Full Stack Web Developer</span> based in
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
    </div>
  )
}

export default Home;
