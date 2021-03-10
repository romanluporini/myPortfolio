import React from 'react'
import Title from '../components/Title'
import Card from '../components/Card'
import Grid from '@material-ui/core/Grid';
import useWindowDimensions from '../Hooks/UseWindowDimensions'
import { useInView } from 'react-intersection-observer';
import '../Styles/3-layout/_portfolio.scss'

function Portfolio() {

    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
    const projects = ["bluedot-podcast", "gifos", "delilah-resto", "egeria", "sentate"]

    //for queryFlag
    const { width } = useWindowDimensions()

    return (
        <div className="portfolio" id="portfolio" inView={inView}>
            <div className="portfolio__Bg">
                <div className="stars1"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
            </div>
            <div className="portfolio__Bg--filtered-layer"></div>
            <Title section="portfolio" />
            < div className="portfolio__cards" ref={ref}>
                <Grid
                    container
                    spacing={6}
                    direction="column"
                    justify="center"
                >
                    {projects.map((project, key) =>
                        <Grid
                            key={key}
                            item xs={12}
                            className={
                                inView
                                    ? "portfolio__cards-item visited"
                                    : "portfolio__cards-item"
                            }
                        >
                            <Card
                                key={key}
                                title={project}
                                queryFlag={width}
                            />
                        </Grid>
                    )}
                </Grid>
            </div >
        </div>
    )
}

export default Portfolio
