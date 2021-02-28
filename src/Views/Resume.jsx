import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Title from '../components/Title'
import { Button } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import '../Styles/3-layout/_resume.scss'
import '../Styles/1-components/_button.scss'
import Modal from '../components/Modal'
import { downloadPDF } from '../Helpers/DownloadFiles'

function Resume() {

    const [showModal, setShowModal] = useState(false)

    // function handleDownload() {
    //     try {
    //         fetch('https://github.com/romanluporini/portfolio/files/5989207/CV.Luporini.-.Full.Stack.Web.developer.pdf', {mode: "cors"})
    //             .then(
    //                 data => {
    //                     const response = data
    //                     return response
    //                 }
    //             )
    //             .then(response => {
    //                 downloadPDF(response, "CV Luporini - Full Stack Web Developer")
    //             }
    //             )
    //     } catch (error) {
    //         console.log(error)
    //         return error
    //     }
    // }

    function closeModal() {
        setShowModal(prevState => !prevState)
    }

    function openModal() {
        setShowModal(prevState => !prevState)
        // handleDownload()
        setTimeout(() => {
            closeModal()
        }, 2000)
    }

    return (
        <div className="resume" id="resume">
            {showModal &&
                <Modal showModal={showModal} from="resume" />
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
                                Frameworks/Libraries/Systems
                            </span>
                            <p>
                                Express.js, Sequelize, bcrypt, JSON Web Token, MongoDB, MySql, phpMyAdmin, VS code, Postman, Adobe XD.
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
                                Diseño y desarrollo de interfaz de usuario en sitio web para reservas de transporte de pasajeros.
                    </p>
                            <span>
                                Heliconia Software | agosto/sept. 2020
                    </span>
                            <p>
                                Diseño y desarrollo de interfaz de usuario en sitio web para comercio internacional.
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
                                Estudios secundarios | Técnico electromecánico
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
                            <p>
                                https://egeriaonlinetesting.netlify.app
                    </p>
                            <p>Ref: Rotondaro, Agustín +598 95 606 245</p>
                            <p>https://central-reservas-rev01.netlify.app/index.html log-in: opción 1 DNI: 123  Pass: 123</p>
                            <p>Ref: Iglesias, Marcos +54 9 3364 31-2887</p>
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
                                href="https://github.com/romanluporini/portfolio/files/5989207/CV.Luporini.-.Full.Stack.Web.developer.pdf"
                                download="CV Luporini - Full Stack Web Developer"
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