import React from 'react'
import { Button, Grid, TextareaAutosize} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function ContactForm(props) {
    return (
        <form noValidate autoComplete="off" className="contact__form" onSubmit={props.submit}>
            <Grid container spacing={0 , 2}>
                <Grid item xs={12} sm={6}>
                    <div className="input-box">
                        <input type="text" name="from_name" required />
                        <label htmlFor="">full-name</label>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="input-box">
                        <input type="email" name="reply_to" required />
                        <label htmlFor="">email</label>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <TextareaAutosize rows={10} name="message" placeholder="Please enter your message here..." className="contact__email-body" required></TextareaAutosize>
                </Grid>
                <div className="contact__button-box">
                    <Button variant="contained" color="secondary" className="button" type="submit">
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
