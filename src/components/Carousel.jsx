import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import '../Styles/1-components/_carousel.scss'


export default function freelanceCarousel(props) {
    var items = [
        {
            img: props.img.slide1,
            title: 'interactive prototyping',
            text: 'Interactive prototyping is a trend in design. It allows the client to see the final product and to make changes before jump into code which make things a lot easier, speed up the work flow and deliver times.'
        },
        {
            img: props.img.slide2,
            title: 'front-end development',
            text: 'If you are looking for an entire front-end solution, i offer UX/UI design as well as coding. I use technologies like Sass, React combined with Material UI, to make your site faster and make it more likely to get clients.'
        },
        {
            img: props.img.slide3,
            title: 'back-end development',
            text: 'RESTful API programming with NodeJS as well as any other solution you may need on your backend.'
        }
    ]

    function Item(props) {
        return (
            <Paper>
                <div className="slide">
                    <div className="slide__img-box">
                        <img src={props.item.img} alt="profile" className="slide-img" />
                    </div>
                    <div className="slide__text">
                        <h4>{props.item.title}</h4>
                        <p>
                            {props.item.text}
                        </p>
                    </div>
                </div>
            </Paper>
        )
    }

    return (
        <Carousel className="carousel">
            { items.map((item, i) => <Item key={i} item={item} />) }
        </Carousel>
    )
}


