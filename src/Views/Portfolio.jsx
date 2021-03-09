import React from 'react'
import Title from '../components/Title'
import Card from '../components/Card'
import Grid from '@material-ui/core/Grid';
import useWindowDimensions from '../Hooks/UseWindowDimensions'
import { useInView } from 'react-intersection-observer';
import '../Styles/3-layout/_portfolio.scss'

function Portfolio() {

    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

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
                    <Grid
                        item xs={12}
                        className={
                            inView
                                ? "portfolio__cards-item visited"
                                : "portfolio__cards-item"
                        }
                    >
                        <Card
                            title="bluedot-podcast"
                            queryFlag={width}
                        />
                    </Grid>
                    <Grid
                        item xs={12}
                        className={
                            inView
                                ? "portfolio__cards-item visited"
                                : "portfolio__cards-item"
                        }
                    >
                        <Card
                            title="gifos"
                            queryFlag={width}
                        />
                    </Grid>
                    <Grid
                        item xs={12}
                        className={
                            inView
                                ? "portfolio__cards-item visited"
                                : "portfolio__cards-item"
                        }
                    >
                        <Card
                            title="delilah-resto"
                            queryFlag={width}
                        />
                    </Grid>
                    <Grid
                        item xs={12}
                        className={
                            inView
                                ? "portfolio__cards-item visited"
                                : "portfolio__cards-item"
                        }
                    >
                        <Card
                            title="egeria"
                            queryFlag={width}
                        />
                    </Grid>
                    <Grid
                        item xs={12}
                        className={
                            inView
                                ? "portfolio__cards-item visited"
                                : "portfolio__cards-item"
                        }
                    >
                        <Card
                            title="sentate"
                            queryFlag={width}
                        />
                    </Grid>
                </Grid>
            </div >
        </div>
    )
}

export default Portfolio
