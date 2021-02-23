import React from 'react'
import projectImg1 from '../Assets/Images/bluedot.png';
import projectImg2 from '../Assets/Images/gifos.png';
import projectImg3 from '../Assets/Images/delilah.png';
import projectImg4 from '../Assets/Images/egeria.jpg';
import '../Styles/1-components/_card.scss'


function Card(props) {

    const query=false;

    const cardType = (cardTitle) => {
        switch (cardTitle) {
            case 'bluedot-podcast':
                return { title: 'Bluedot Podcast', shortText: 'Podcast playing site',text: 'Objectives: layout, styling and deploy of a static web page with embebed content.', note: '*Note: this is a non-commercial project', img: projectImg1 }
            case 'gifos':
                return { title: 'GifOs', shortText: 'Enjoy best gifs and make your own!',text: "Objectives: GIPHY's API conection, API querying, light/dark theme change, javascript ES6 (async/await) and media devices conection.",note: '*Note: this is a non-commercial project', img: projectImg2 }
            case 'delilah-resto':
                return { title: 'Delilah Resto', shortText: 'Restaurant order management',text: 'Objectives: API programming, SQL database creation and querying, user authentication with JWT, folder structure for project scaling.',note: '*Note: this is a non-commercial project', img: projectImg3 }
            case 'egeria':
                return { title: 'Egeria', shortText: 'International E-commerce',text: 'UX/UI design of international e-commerce', img: projectImg4 }
            case 'delilah-resto':
                return { title: 'Delilah Resto', text: 'Objectives: API programming, SQL database creation and querying, user authentication with JWT, folder structure for project scaling.', img: projectImg3 }
            default:
                break;
        }
    }

    return (
        <div className="card">
            <div className="card__img--wrapper">
                <img src={cardType(props.title).img} alt={cardType(props.title).title} className="card__img" />
            </div>
            <div className="card__content">
                <h3>{cardType(props.title).title}</h3>
                <p>{query ? cardType(props.title).text : cardType(props.title).shortText}</p>
                <p>{cardType(props.title).note}</p>
            </div>
        </div>
    )
}

export default Card
