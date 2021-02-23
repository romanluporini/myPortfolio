import React, { Fragment, useState } from 'react'
import Title from '../components/Title'
import Card from '../components/Card'
import Grid from '@material-ui/core/Grid';
import '../Styles/3-layout/_portfolio.scss'

function Portfolio() {

    const [portfolioContent, setPortfolioContent] = useState(false)

    function displayContent() {
        if (window.scrollY >= 1000) {
            setPortfolioContent(true)
        } else {
            setPortfolioContent(false)
        }
    }

    window.addEventListener('scroll', displayContent)

    return (
        <div className="portfolio" id="portfolio">
            <div className="portfolio__Bg">
                <div className="stars1"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
            </div>
            <div className="portfolio__Bg--filtered-layer"></div>
            <Title section="portfolio" />
            <div className="portfolio__cards">
                <Grid container spacing={6} direction="column" justify="center">
                    <Grid item xs={12}className={portfolioContent ? "portfolio__cards-item visited" : "portfolio__cards-item"}>
                        <Card title="bluedot-podcast" />
                    </Grid>
                    <Grid item xs={12} className={portfolioContent ? "portfolio__cards-item visited" : "portfolio__cards-item"}>
                        <Card title="gifos" />
                    </Grid>
                    <Grid item xs={12} className={portfolioContent ? "portfolio__cards-item visited" : "portfolio__cards-item"}>
                        <Card title="delilah-resto" />
                    </Grid>
                    <Grid item xs={12} className={portfolioContent ? "portfolio__cards-item visited" : "portfolio__cards-item"}>
                        <Card title="egeria" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Portfolio
