import React from 'react'
import '../Styles/1-components/_title.scss';


function Title(props) {
   
    const section = section => {
        switch (section) {
            case 'about me':
                return { titleText: "Roman Luporini", subtitleText: "full stack web developer" };
                case 'freelance':
                    return {titleText: section, subtitleText: "services"}
                case 'portfolio':
                    return {titleText: section, subtitleText: "my work"}
                case 'resume':
                    return {titleText: section, subtitleText: "my experience"}
                case 'contact':
                    return {titleText: section, subtitleText: "get in touch"}
                default:
                    return { titleText: "", subtitleText: "" };
        }
    }

    return (
        <div className="title">
            <h1>{section(props.section).titleText}</h1>
            <h6>{section(props.section).subtitleText}</h6>
            <hr></hr>
        </div>
    )
}

export default Title
