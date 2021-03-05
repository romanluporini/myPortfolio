import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '../Styles/1-components/_arrowButton.scss'

export default function ArrowButton() {
    return (
        <div className="arrow-button">
            <a href="#home">
                <FontAwesomeIcon icon={faChevronDown} />
            </a>
        </div>
    )
}
