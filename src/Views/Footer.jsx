import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Grid } from '@material-ui/core'
import ArrowButton from '../components/ArrowButton'



function Footer() {
    return (
        <footer className="footer">
            <div className="footer__Bg">
                <div className="stars1"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
            </div>
            <div className="footer__Bg--filtered-layer"></div>
            <Grid container spacing={2}>
                <Grid item xs={12} className="footer__grid-item">
                    <ArrowButton scrollTo={'home'} />
                </Grid>
                <Grid item xs={12} className="footer__grid-item">
                    <a href="https://github.com/romanluporini" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="git-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/romanluporini" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="li-icon" />
                    </a>
                </Grid>
                <Grid item xs={12} className="footer__grid-item">
                    <p className="footer__copy-right">roman luporini - copyright &#169; 2021</p>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer
