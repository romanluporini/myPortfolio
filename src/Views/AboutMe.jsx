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
                    The most relevant technologies I use are:
                    React-redux, JavaScript, MongoDB, CSS/Sass-SassCript (BEM - methodology), HTML5, GIT. Modules like Express, Axios,
                    bcrypt, Jason Web Token, just to name a few.
                </p>
            </div>
        </div>
    )
}

export default AboutMe
