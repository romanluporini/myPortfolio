import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import '../Styles/1-components/_floatingButtonAdd.scss'

function FloatingButtonAdd() {
    const [floatingArrowButton, setfloatingArrowButton] = useState(false)

    function displayButton() {
        if (window.scrollY >= 500 && window.scrollY < 2500) {
            setfloatingArrowButton(true)
        } else {
            setfloatingArrowButton(false)
        }
    }

    window.addEventListener('scroll', displayButton)

    return (
        <div className={floatingArrowButton ? 'floating-button-add active' : 'floating-button-add'}>
            <a href="#home">
                <FontAwesomeIcon icon={faChevronUp} />
            </a>
        </div>
    )
}

export default FloatingButtonAdd
