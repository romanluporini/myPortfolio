import React, { Fragment } from 'react'
import Title from '../components/Title'
import Carousel from '../components/Carousel'
import { Button } from '@material-ui/core'
import '../Styles/1-components/_button.scss'
import slide1 from '../Assets/Images/slide1.png'
import slide2 from '../Assets/Images/slide2.jpg'
import slide3 from '../Assets/Images/slide3.jpg'
import '../Styles/1-components/_carousel.scss'


function Freelance() {
    return (
        <div className="freelance" id="freelance">
            <Title section="freelance"/>
            <Carousel img={{slide1,slide2,slide3}} />
            <div className="button-box">
                <Button variant="contained" color="secondary" className="button">
                    <a href="#contact">
                        hire me
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default Freelance
