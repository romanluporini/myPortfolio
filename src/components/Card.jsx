import React from 'react'
import projectImg1 from '../Assets/Images/bluedot.png';
import projectImg2 from '../Assets/Images/gifos.png';
import projectImg3 from '../Assets/Images/delilah.png';
import '../Styles/1-components/_card.scss'


function Card(props) {
    const cardType = (cardTitle) => {
        switch (cardTitle) {
            case 'bluedot-podcast':
                return { title: 'Bluedot Podcast', text: 'Objectives: layout, styling and deploy of a static web page with embebed content.', img: projectImg1 }
            case 'gifos':
                return { title: 'GifOs', text: "Objectives: GIPHY's API conection, API querying, light/dark theme change, javascript ES6 (async/await) and media devices conection.", img: projectImg2 }
            case 'delilah-resto':
                return { title: 'Delilah Resto', text: 'Objectives: API programming, SQL database creation and querying, user authentication with JWT, folder structure for project scaling.', img: projectImg3 }
            default:
                break;
        }
    }

    return (
        <div className="card">
            <img src={cardType(props.title).img} alt={cardType(props.title).title} className="card__img"/>
            <div className="card__content">
                <h3>{cardType(props.title).title}</h3>
                <p>{cardType(props.title).text}</p>
            </div>
        </div>
    )
}

export default Card
