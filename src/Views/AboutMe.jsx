import React from 'react'
import Title from '../components/Title'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import profilePhoto from '../Assets/Images/profile-photo.png'

function AboutMe() {
    return (
        <div className="about-me" id="about">
            <div className="about-me__header">
                <div className="about-me__profile-photo">
                    <img src={profilePhoto} alt="profile" />
                </div>
                <Title section="about me" />
            </div>
            <div className="about-me__text">
                <p>
                    My name is Román Luporini and I'm a FSWD graduated from Acámica. I'm currently working at Sentate as a Full Stack Web
                    Developer as well as I'm part-time freelancer. 
                    <br/>
                    I have 6 months of experience working with Sentate on a seat booking platform for companies administration Project.
                    The most relevant technologies are:
                    React-redux, JavaScript, MongoDB, CSS/Sass-SassCript (BEM - methodology), HTML5, GIT. Libraries/Modules like Express, Axios,
                    bcrypt, JWT, just to name a few.
                </p>
            </div>
            <div className="about-me__links">
                <div className="about-me__link">
                    <a href='https://github.com/romanluporini'><GitHubIcon className="git-icon"/></a>
                </div>
                <div className="about-me__link">
                    <a href='https://www.linkedin.com/in/romanluporini'><LinkedInIcon className="li-icon"/></a>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
