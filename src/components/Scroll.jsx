import React, { useState, useEffect } from 'react'
import { Fragment } from 'react'
import '../Styles/1-components/_scroll.scss'



function Scroll(props) {

    return (
        props.queryFlag > 1024 &&
        <div className="scroll__box">
            <div className="scroll__mouse" >
                <a href="#about">
                    <div className="scroll__wheel"></div>
                </a>
            </div>
        </div>
    )
}
export default Scroll
