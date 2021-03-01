import React, { useState, useEffect } from 'react'
import projectImg1 from '../Assets/Images/bluedot.png';
import projectImg2 from '../Assets/Images/gifos.png';
import projectImg3 from '../Assets/Images/delilah.png';
import projectImg4 from '../Assets/Images/egeria.jpg';
import { Button } from '@material-ui/core';
import Gallery from '../components/Gallery'
import '../Styles/1-components/_card.scss'
import '../Styles/1-components/_button.scss'
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            queryFlag: props.queryFlag,
            gallerySrc: "",
            showGallery: false,
            openBlank: "",
            externalOpen: "",
            title: props.title
        }
        console.log(this.state.queryFlag)
    }

    //for the queryFlag
    componentWillMount() {
        if (this.state.queryFlag >= 1024) {
            this.setState({ ...this.state, queryFlag: true })
        } else {
            this.setState({ ...this.state, queryFlag: false, openBlank: "_blank" })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.queryFlag >= 1024 && this.state.queryFlag !== true && this.state.openBlank === "_blank") {
            this.setState({ ...this.state, queryFlag: true, openBlank: "" })
        } else if (nextProps.queryFlag < 1024 && this.state.queryFlag !== false && this.state.openBlank === "") {
            this.setState({ ...this.state, queryFlag: false, showGallery: false, openBlank: "_blank" })
        }
    }

    handleOpen = href => {
        if (href && this.state.queryFlag === true && this.state.openBlank === "") {
            this.setState({ ...this.state, gallerySrc: href, showGallery: true, externalOpen: "" })
        } else if (href && this.state.queryFlag === false && this.state.openBlank === "_blank") {
            this.setState({ ...this.state, externalOpen: href })
        }
    }

    handleClose = () => {
        this.setState({ ...this.state, gallerySrc: "", showGallery: false })
    }

    cardType = (cardTitle) => {
        switch (cardTitle) {
            case 'bluedot-podcast':
                return { title: 'Bluedot Podcast', shortText: 'Podcast playing site', text: 'Objectives: layout, styling and deploy of a static web page with embebed content.', note: '*Note: this is a non-commercial project', img: projectImg1, href: "https://luporinibluedotpodcast.netlify.app" }
            case 'gifos':
                return { title: 'GifOs', shortText: 'Enjoy best gifs and make your own!', text: "Objectives: GIPHY's API conection, API querying, light/dark theme change, javascript ES6 (async/await) and media devices conection.", note: '*Note: this is a non-commercial project', img: projectImg2, href: "https://romanluporini-gifos.netlify.app" }
            case 'delilah-resto':
                return { title: 'Delilah Resto', shortText: 'Restaurant order management', text: 'Objectives: API programming, SQL database creation and querying, user authentication with JWT, folder structure for project scaling.', note: '*Note: this is a non-commercial project', img: projectImg3, href: "https://github.com/romanluporini/DelilahResto---TPn3-Acamica" }
            case 'egeria':
                return { title: 'Egeria', shortText: 'International E-commerce', text: 'UX/UI design of international e-commerce', img: projectImg4, href: "https://egeriaonlinetesting.netlify.app" }
            default:
                break;
        }
    }

    render() {
        return (
            <Fragment>
                {
                    this.state.showGallery &&
                    <Fragment>
                        <span
                            className="iframe-x"
                            show={this.state.showGallery}
                            onClick={() => { this.handleClose() }}
                        >
                            x
                        </span>
                        <Gallery gallerySrc={this.state.gallerySrc} />
                    </Fragment>
                }
                <Fragment>
                    <div className="card">
                        <div className="card__img-wrapper">
                            <img src={this.cardType(this.state.title).img} alt={this.cardType(this.state.title).title} className="card__img" />
                            <div className="card__button-box">
                                <Button variant="contained" color="secondary" className="button card__button">
                                    <a
                                        target={this.state.openBlank}
                                        href={this.state.externalOpen}
                                        onClick={(e) => {
                                            if (this.state.openBlank === "") { e.preventDefault() }
                                            this.handleOpen(this.cardType(this.state.title).href)
                                        }}
                                    >
                                        {this.state.queryFlag ? "open" : <FontAwesomeIcon icon={faExternalLinkAlt}/>}
                                    </a>
                                </Button>
                            </div>
                        </div>
                        <div className="card__content">
                            <h3 className="card__title">{this.cardType(this.state.title).title}</h3>
                            <p>{this.state.queryFlag ? this.cardType(this.state.title).text : this.cardType(this.state.title).shortText}</p>
                            <p>{this.cardType(this.state.title).note}</p>
                        </div>
                    </div>
                </Fragment>
            </Fragment>
        )
    }
}


export default Card
