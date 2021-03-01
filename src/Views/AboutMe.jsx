import React from 'react'
import Title from '../components/Title'
import profilePhoto from '../Assets/Images/profile-photo.png'
import { useInView } from 'react-intersection-observer';

function AboutMe() {

    const [ref, inView] = useInView({ threshold: 0.6, triggerOnce:true })

    return (
        <div className="about-me" id="about" ref={ref}>
            <div inView={inView} className={inView ? "about-me__header visible" : "about-me__header"} >
                <div className="about-me__profile-photo">
                    <img src={profilePhoto} alt="profile" />
                </div>
                <Title section="about me" />
            </div>
            <div inView={inView} className={inView ? "about-me__text visible" : "about-me__text"}>
                <p>
                    I'm a FSWD graduated from Acámica. I'm currently working at Sentate as a Full Stack Web
                    Developer as well as I'm part-time freelancer.
                    <br/>
                    I have 6 months of experience working with Sentate on a booking management platform project.
                    The most relevant technologies are:
                    React-redux, JavaScript, MongoDB, CSS/Sass-SassCript (BEM - methodology), HTML5, GIT. Libraries/Modules like Express, Axios,
                    bcrypt, JWT, just to name a few.
                    <br/>
                    I like to create the best web experience, that includes efficiency on the back as well as awsome interactions on the front.
                </p>
            </div>
        </div>
    )
}

export default AboutMe
