import React, { Fragment } from 'react'
import { Button } from '@material-ui/core';
import cardType from '../Helpers/Cards'
import Gallery from '../components/Gallery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import '../Styles/1-components/_card.scss'
import '../Styles/1-components/_button.scss'

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
        this.handleClose = this.handleClose.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    //for the queryFlag
    componentWillMount() {
        if (this.state.queryFlag >= 1024) {
            this.setState({ queryFlag: true })
        } else {
            this.setState({ queryFlag: false, openBlank: "_blank" })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.queryFlag >= 1024 && this.state.queryFlag !== true && this.state.openBlank === "_blank") {
            this.setState({ queryFlag: true, openBlank: "" })
        } else if (nextProps.queryFlag < 1024 && this.state.queryFlag !== false && this.state.openBlank === "") {
            this.setState({ queryFlag: false, showGallery: false, openBlank: "_blank" })
        }
    }

    handleOpen(href) {
        if (href && this.state.queryFlag === true && this.state.openBlank === "") {
            this.setState({ gallerySrc: href, showGallery: true, externalOpen: "" })
        } else if (href && this.state.queryFlag === false && this.state.openBlank === "_blank") {
            this.setState({ externalOpen: href })
        }
    }

    handleClose() {
        this.setState({ gallerySrc: "", showGallery: false })
    }

    handleOnClick(e) {
        if (this.state.openBlank === "") { e.preventDefault() }
        this.handleOpen(cardType(this.state.title).href)
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
                            onClick={() => this.handleClose()}
                        >
                            x
                        </span>
                        <Gallery gallerySrc={this.state.gallerySrc} />
                    </Fragment>
                }
                <div className="card">
                    <div className="card__img-wrapper">
                        <img src={cardType(this.state.title).img} alt={cardType(this.state.title).title} className="card__img" />
                        <div className="card__button-box">
                            <Button variant="contained" color="secondary" className="button card__button">
                                <a
                                    target={this.state.openBlank}
                                    href={this.state.externalOpen}
                                    onClick={e => this.handleOnClick(e)}
                                >
                                    {this.state.queryFlag
                                        ? "open"
                                        : <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    }
                                </a>
                            </Button>
                        </div>
                    </div>
                    <div className="card__content">
                        <h3 className="card__title">{cardType(this.state.title).title}</h3>
                        <p>{this.state.queryFlag
                            ? cardType(this.state.title).text
                            : cardType(this.state.title).shortText
                        }
                        </p>
                        <p>{cardType(this.state.title).note}</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default Card
