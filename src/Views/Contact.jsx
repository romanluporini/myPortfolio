import React from 'react'
import Title from '../components/Title'
import { Button, Grid, InputBase, TextareaAutosize, TextField } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Contact() {
    return (
        <div className="contact" id="contact">
            <Title section="contact" />

            <form noValidate autoComplete="off" className="contact__form">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        {/* <TextField id="outlined-basic" label="Full name" variant="outlined" required className="contact__name-input" /> */}
                        <div className="input-box">
                            <input type="text" name="full-name" id="" required/>
                            <label htmlFor="">full-name</label>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {/* <TextField id="outlined-basic" label="E-mail" variant="outlined" required className="contact__email-input" /> */}
                        <div className="input-box">
                            <input type="email" name="email" id="" required/>
                            <label htmlFor="">email</label>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <TextareaAutosize rows={10} placeholder="Please enter your message here..." className="contact__email-body" required></TextareaAutosize>
                    </Grid>
                    <div className="contact__button-box">
                        <Button variant="contained" color="secondary" className="button">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <a href="#">
                                send
                            </a>
                        </Button>
                    </div>
                </Grid>
            </form>
        </div>
    )
}

export default Contact 
