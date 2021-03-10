import React, { useState, useEffect } from 'react'
import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import '../Styles/1-components/_gallery.scss'

function Gallery(props) {

    const [galleryActive, setGalleryActive] = useState(false)

    useEffect(prevState => setGalleryActive(!prevState), [props.gallerySrc])

    return (
        <Fragment>
            {galleryActive &&
                <div className="gallery">
                    <div className="gallery__filtered-layer"  >
                        <div className="gallery__content">

                            {/*  incorporar redux (ya instalado) */}

                            {/* <a href={props.gallerySrc} className="gallery__prev">
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </a>
                            <a href={props.gallerySrc} className="gallery__next">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </a> */}

                            {/* incorporar redux (ya instalado) */}

                            <div className="gallery__iframe">
                                <a href={props.gallerySrc} target="_blank" className="iframe__external-link">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                </a>
                                <iframe
                                    src={props.gallerySrc}
                                    frameBorder="0"
                                >
                                    {/* {showWarnMessage &&
                                        <div className="iframe__gh-warn-msg-box">
                                            <p>github rejects 3rd part conexions to his server, please open it externally. <br />
                                        Click on top right corner button.</p>
                                        </div>
                                    } */}
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
}
// }

export default Gallery
