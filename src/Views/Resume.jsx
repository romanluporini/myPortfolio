import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Title from '../components/Title'
import Modal from '../components/Modal'
import { Button } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { downloadPDF } from '../Helpers/DownloadFiles'
import FileToDownload from '../Assets/Resume/CV Luporini - Full Stack Web Developer.pdf'
import '../Styles/1-components/_button.scss'
import '../Styles/3-layout/_resume.scss'

function Resume() {

    const [showModal, setShowModal] = useState(false)
    const [error, setError] = useState()

    function handleDownload() {
        try {
            downloadPDF(FileToDownload, "CV Luporini - Full Stack Web developer.pdf")
            setTimeout(() => {
                closeModal()
            }, 2000)
        } catch (err) {
            console.log(err)
            modalOnError()
        }
    }

    function modalOnError() {
        setError(true)
    }

    function closeModal() {
        setShowModal(false)
    }

    function openModal() {
        setShowModal(true)
        handleDownload()
    }

    return (
        <div className="resume" id="resume">
            {showModal &&
                <Modal showModal={showModal} error={error} from="resume" />
            }
            <Grid
                container
                className="resume__grid-container"
            >
                <Grid
                    item
                    xs={12}>
                    <Title section="resume" />
                </Grid>
                <Grid
                    item
                    xs={12} sm={6}
                    className="resume__grid-item"
                >
                    <div className="resume__profile resume__section">
                        <h3 className="resume__section-title">profile</h3>
                        <div className="text">
                            <span>
                                Coding
                            </span>
                            <p>
                                HTML, CSS/Sass-Sasscript, Javascript, nodeJS, SQL, visual basic(MS Excel macros).
                            </p>
                            <span>
                                Frameworks/ Libraries/ Databases/ Systems
                            </span>
                            <p>
                                React, Redux, Express.js, Sequelize, bcrypt, JSON Web Token, MongoDB, MySql, phpMyAdmin, VS code, Postman, Adobe XD.
                            </p>
                            <span>
                                English
                            </span>
                            <p>
                                intermediate/advanced level
                            </p>
                        </div>
                    </div>
                </Grid>
                <Grid
                    item xs={12} sm={6}
                    className="resume__grid-item"
                >
                    <div className="resume__work-experience resume__section">
                        <h3 className="resume__section-title">work-experience</h3>
                        <div className="text">
                            <span>
                                Freelance Front-End Web Developer
                    </span>
                            <p>
                                UX/ UI desing and development of a travel booking platform.
                    </p>
                            <span>
                                Heliconia Software | august/sept. 2020
                    </span>
                            <p>
                                UX/ UI desing and development of an international e-commerce.
                    </p>
                            <span>
                                Climatizadores SN S.A. | sept 2018/sept. 2020
                    </span>
                            <p>
                                Head of the technical-administration office.
                    </p>
                        </div>
                    </div>
                </Grid>
                <Grid
                    item
                    xs={12} sm={6}
                    className="resume__grid-item"
                >
                    <div className="resume__education resume__section">
                        <h3 className="resume__section-title">education</h3>
                        <div className="text">
                            <span>
                                acámica
                    </span>
                            <p>
                                Full Stack Web Developer | March/August 2020
                        </p>
                            <span>
                                Universidad Tecnológica Nacional
                    </span>
                            <p>
                                Mechanical Engineering | 5th year, not finished.
                        </p>
                            <span>
                                E.E.T. N°6
                    </span>
                            <p>
                                Secondary School | Electro-Mechanic technician
                    </p>
                        </div>
                    </div>
                </Grid>
                <Grid
                    item
                    xs={12} sm={6}
                    className="resume__grid-item"
                >
                    <div className="resume__projects resume__section">
                        <h3 className="resume__section-title">links to projects</h3>
                        <div className="text">
                            <span>
                                freelance
                    </span>
                            <a href="https://egeriaonlinetesting.netlify.app" target="_blank">
                                https://egeriaonlinetesting.netlify.app
                        </a>
                            <p>Ref: Rotondaro, Agustín +598 95 606 245</p>
                            <a href="https://www.sentate.com.ar" target="_blank">
                                https://www.sentate.com.ar
                        </a>
                            <p>Ref: Iglesias, Marcos +54 9 3364 31-2887</p>
                            <span>For more projects, you can checkout my github</span>
                            <a href="https://github.com/romanluporini" target="_blank">
                                https://github.com/romanluporini
                        </a>
                        </div>
                    </div>
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <div className="resume__button-box">
                        <Button
                            variant="contained"
                            color="secondary"
                            className="button"
                        >
                            <FontAwesomeIcon icon={faDownload} />
                            <a
                                onClick={() => {
                                    openModal()
                                }}
                            >
                                resume
                            </a>
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Resume
