import React, { useState } from 'react'
import { Fragment } from 'react'
import { Button } from '@material-ui/core'
import loadingSpinner from '../Assets/Animations/loadingSpinner.gif'
import emailSent from '../Assets/Animations/successAction.gif'

function Modal(props) {

    const [modal, setModal] = useState(props.showModal)

    function handleClose(e) {
        e.preventDefault()
        setModal(prev => !prev)
    }

    const content = callFrom => {
        switch (callFrom) {
            case "contact":
                return { title: "Email enviado correctamente", anim: emailSent, showButton: true }
            case "resume":
                return { title: "Downloading resume, please wait...", anim: loadingSpinner, showButton: false }
            default:
                break;
        }
    }

    return (
        <Fragment>
            {modal &&
                <div className="modal">
                    <div className="modal__overlay">
                        <div className="modal--success">
                            <div className="modal__content">
                                <h4 className="modal__content__title">
                                    {content(props.from).title}
                                </h4>
                                <div className="modal__img-box">
                                    <img
                                        src={content(props.from).anim}
                                        alt="email-sent"
                                    />
                                </div>
                                <div className="button-box">
                                    {content(props.from).showButton &&
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className="button"
                                            onClick={(e) => {
                                                handleClose(e)
                                            }}
                                        >
                                            <a>
                                                aceptar
                                        </a>
                                        </Button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default Modal

