import React, { useState, useEffect } from 'react'
import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faExternalLinkAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import '../Styles/1-components/_gallery.scss'

function Gallery(props) {

    const [galleryActive, setGalleryActive] = useState(false)

    useEffect(() => setGalleryActive(props.gallerySrc.lenght > 0) , [props.gallerySrc])

    return (
        <Fragment>
            {galleryActive &&
                <div className="gallery">
                    <div className="gallery__filtered-layer"  >
                        <div className="gallery__content">

                            {/* para que funcione tengo que incorporar redux (ya instalado) */}

                            {/* <a href={props.gallerySrc} className="gallery__prev">
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </a>
                            <a href={props.gallerySrc} className="gallery__next">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </a> */}

                            {/* para que funcione tengo que incorporar redux (ya instalado) */}

                            <div className="gallery__iframe">
                                <a href={props.gallerySrc} target="_blank" className="iframe__external-link">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                </a>
                                <iframe
                                    src={props.gallerySrc}
                                    frameBorder="0"
                                >
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
