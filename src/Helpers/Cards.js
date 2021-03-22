import projectImg1 from '../Assets/Images/bluedot.png';
import projectImg2 from '../Assets/Images/gifos.png';
import projectImg3 from '../Assets/Images/delilah.png';
import projectImg4 from '../Assets/Images/egeria.jpg';
import projectImg5 from '../Assets/Images/sentate.png';
import projectImg6 from '../Assets/Images/estudio.png';

export default function cardType(cardTitle) {
    switch (cardTitle) {
        case 'bluedot-podcast':
            return { title: 'Bluedot Podcast', shortText: 'Podcast playing site', text: 'Objectives: layout, styling and deploy of a static web page with embebed content.', note: '*Note: this is a non-commercial project', img: projectImg1, href: "https://luporinibluedotpodcast.netlify.app" }
        case 'gifos':
            return { title: 'GifOs', shortText: 'Enjoy best gifs and make your own!', text: "Objectives: GIPHY's API conection, API querying, light/dark theme change, javascript ES6 (async/await) and media devices conection.", note: '*Note: this is a non-commercial project', img: projectImg2, href: "https://romanluporini-gifos.netlify.app" }
        case 'delilah-resto':
            return { title: 'Delilah Resto', shortText: 'Restaurant order management', text: 'Objectives: API programming, SQL database creation and querying, user authentication with JWT, folder structure for project scaling.', note: '*Note: this is a non-commercial project', img: projectImg3, href: "https://github.com/romanluporini/DelilahResto---TPn3-Acamica" }
        case 'egeria':
            return { title: 'Egeria', shortText: 'International E-commerce', text: 'UX/UI design of international e-commerce', img: projectImg4, href: "https://egeriaonlinetesting.netlify.app" }
        case 'sentate':
            return { title: 'Sentate', shortText: 'travel booking platform', text: 'full-stack development of a travel booking platform', img: projectImg5, href: "https://sentate.com.ar/" }
        case 'estudio-juridico':
            return { title: 'Cinzano Estudio Jurídico', shortText: 'online presence for a law firm', text: 'freelance front-end development of a static website for a lawfirm', img: projectImg6, href: "http://cinzanoestudiojuridico.com.ar/" }
        default:
            break;
    }
}
