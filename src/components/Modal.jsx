import React, { useState } from 'react'
import { Fragment } from 'react'
import { Button } from '@material-ui/core'
import loadingSpinner from '../Assets/Animations/loadingSpinner.svg'
import success from '../Assets/Images/success.svg'
import error from '../Assets/Images/error.svg'

function Modal(props) {

    const [modal, setModal] = useState(props.showModal)

    function handleClose(e) {
        e.preventDefault()
        setModal(prev => !prev)
    }

    const content = callFrom => {
        switch (callFrom) {
            case "contact":
                return { title: "Email sent correctly", anim: success, showButton: true }
            case "resume":
                if(props.error){
                   return  { title: "Something went wrong, please try again.", anim: error, showButton: true }
                }
                return { title: "downloading resume, please wait...", anim: loadingSpinner, showButton: false }
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
                                <div className={props.from === "resume" ? props.error ? "modal__img-box" : "modal__anim-box" : "modal__img-box"}>
                                    <img
                                        src={content(props.from).anim}
                                        alt="error-success"
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
                                            {props.from === "resume" ? "retry" : "ok"}
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

