import React, { useState } from 'react'
import { Fragment } from 'react'
import emailSent from '../Assets/Animations/image_processing20200523-13638-7f3ztd.gif'
import {Button} from '@material-ui/core'

function Modal(props) {

    const [modal, setModal] = useState(props.showModal)

    function handleClose() {
        setModal(prev => !prev)
    }

    return (
        <Fragment>
            {modal &&
                <div className="modal">
                    <div className="modal__overlay">
                        <div className="modal--success">
                            <div className="modal__content">
                                <h4 className="modal__content__title">
                                    E-mail enviado correctamente
                                </h4>
                                <div className="modal__img-box">
                                    <img 
                                    src={emailSent}
                                    alt="email-sent"

                                    />
                                </div>
                                <div className="button-box">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className="button"
                                        onClick={() => { handleClose() }}
                                    >
                                        aceptar
                                    </Button>
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

