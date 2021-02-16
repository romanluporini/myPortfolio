import React, { Fragment } from 'react'
import Title from '../components/Title'
import Card from '../components/Card'
import '../Styles/3-layout/_portfolio.scss'

function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <Title section="portfolio"/>
            <div className="portfolio__cards">
                <Card title="bluedot-podcast"/>
                <Card title="gifos"/>
                <Card title="delilah-resto"/>
            </div>          
        </div>
    )
}

export default Portfolio
