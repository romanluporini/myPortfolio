import React, { useState } from 'react'
import { Button, Grid, TextareaAutosize } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import SendEmail from '../Helpers/SendEmail'
import Modal from '../components/Modal'
import '../Styles/1-components/_modal.scss'

function ContactForm(props) {

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(prevState => !prevState)

    // tengo que incorporar redux para poder cerrar y abrir el modal

    return (
        <form
            noValidate
            autoComplete="off"
            className="contact__form"
            onSubmit={e => SendEmail(e)}
        >
            {showModal &&
                <Modal
                    showModal={showModal}
                    from="contact"
                />
            }
            <Grid
                container
                spacing={0, 2}
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <div className={props.inView ? "input-box visible" : "input-box"}>
                        <input type="text" name="from_name" required />
                        <label htmlFor="">full-name</label>
                    </div>
                </Grid>
                <Grid
                    item xs={12}
                    sm={6}
                >
                    <div className={props.inView ? "input-box visible" : "input-box"}>
                        <input type="email" name="reply_to" required />
                        <label htmlFor="">email</label>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <TextareaAutosize
                        rows={10}
                        name="message"
                        placeholder="Please enter your message here..."
                        className={props.inView ? "contact__email-body visible" : "contact__email-body"}
                        required
                    >
                    </TextareaAutosize>
                </Grid>
                <div className="contact__button-box">
                    <Button
                        variant="contained"
                        color="secondary"
                        className={props.inView ? "button visible" : "button"}
                        type="submit"
                        onClick={() => openModal()}
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a>
                            send
                        </a>
                    </Button>
                </div>
            </Grid>
        </form>
    )
}

export default ContactForm
