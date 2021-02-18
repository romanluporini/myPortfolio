import React from "react";
import Nav from "../components/Nav";
import ArrowButton from '../components/ArrowButton'
import TypeWriter from '../Helpers/TypeWriter'
import { Button } from '@material-ui/core';
import '../Styles/0-abstracts/_vars.scss'
import '../Styles/2-base/_typography.scss'
import '../Styles/1-components/_button.scss'
import '../Styles/3-layout/_home.scss'
import FloatingButtonAdd from "../components/FloatingButtonAdd";

function Home() {
  return (
    <div className="home" id="home">
      <div className="to-filter"></div>
      <Nav queryFlag={false} />
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
      <div className="fab-box">
        <FloatingButtonAdd />
      </div>
      <div className="arrow-button-box">
        <ArrowButton scrollTo={'about'} />
      </div>
    </div>
  );
}

export default Home;
