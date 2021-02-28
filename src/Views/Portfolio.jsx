import React, { Fragment, useState } from 'react'
import Gallery from '../components/Gallery'
import Title from '../components/Title'
import Card from '../components/Card'
import Grid from '@material-ui/core/Grid';
import useWindowDimensions from '../Hooks/UseWindowDimensions'
import '../Styles/3-layout/_portfolio.scss'
import { useInView } from 'react-intersection-observer';
import useOnScreen from '../Helpers/IntersectionObserver'

function Portfolio() {
    const [portfolioContent, setPortfolioContent] = useState(false)

    // const ref={current:null};
    // const visible=false;

    const [ref, visible] = useOnScreen({ threshold: 0.3 })
    console.log(visible)
    // function handleDisplay(ref, inView, entry) {
    //     let displayContent = intersectionObserver(ref, inView, entry)
    //     if(displayContent && portfolioContent !== displayContent ){
    //         setPortfolioContent(true)
    //     }
    // }

    // const intersectionObserver = () => {
    //     const { ref, inView, entry } = useInView({
    //         /* Optional options */
    //         threshold: 0.7,
    //     });
    // };


    // window.addEventListener('scroll', handleDisplay())

    //for queryFlag
    const { width } = useWindowDimensions()

    return (
        <div className="portfolio" id="portfolio" ref={ref}>
            <div className="portfolio__Bg">
                <div className="stars1"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
            </div>
            <div className="portfolio__Bg--filtered-layer"></div>
            <Title section="portfolio" />
            {visible &&
                < div className="portfolio__cards" >
                    <Grid container spacing={6} direction="column" justify="center" >
                        <Grid
                            item xs={12}
                            className={
                                portfolioContent
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
                                portfolioContent
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
                                portfolioContent
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
                            className={portfolioContent
                                ? "portfolio__cards-item visited"
                                : "portfolio__cards-item"
                            }
                        >
                            <Card
                                title="egeria"
                                queryFlag={width}
                            />
                        </Grid>
                    </Grid>
                </div >
            }
        </div>
    )
}

export default Portfolio
