import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Grid } from '@material-ui/core'
import ArrowButton from '../components/ArrowButton'


function Footer() {
    return (
        <footer className="footer">
            <Grid container spacing={2}>
                <Grid item xs={12} className="footer__grid-item">
                    <ArrowButton />
                </Grid>
                <Grid item xs={12} className="footer__grid-item">
                    <FontAwesomeIcon icon={faGithub} className="git-icon" />
                    <FontAwesomeIcon icon={faLinkedin} className="li-icon" />
                </Grid>
                <Grid item xs={12} className="footer__grid-item">
                    <p className="footer__copy-right">roman luporini - copyright &#169; 2021</p>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer
