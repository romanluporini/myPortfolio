import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '../Styles/1-components/_arrowButton.scss'

export default function ArrowButton(props) {

    const scroll = () => {
        switch (props.scrollTo) {
            case 'about':
                return '#about'
            case 'home':
                return '#home'
            default:
                break;
        }
    }

    return (
        <div className="arrow-button">
            <a href={scroll()}>
                <FontAwesomeIcon icon={faChevronDown} />
            </a>
        </div>
    )
}
