import React, { useState, useEffect } from 'react'
import { Fragment } from 'react'
import '../Styles/1-components/_scroll.scss'



function Scroll(props) {

    const [queryFlag, setQueryFlag] = useState()

    useEffect(() => {
        if (props.queryFlag > 1024) {
            return setQueryFlag(true)
        } else {
            return setQueryFlag(false)
        }
    }, [props.queryFlag])

    return (
        <Fragment>
            {queryFlag &&
                <div className="scroll__box">
                    <div className="scroll__mouse" >
                        <a href="#about">
                            <div className="scroll__wheel"></div>
                        </a>
                    </div>
                </div>
            }
        </Fragment>
    )
}
export default Scroll
