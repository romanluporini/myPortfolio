import React, { useState } from 'react'
import '../Styles/1-components/_floatingButtonAdd.scss'

function FloatingButtonAdd() {
    const [action, setAction] = useState("+")
    
    function changeActionSymbol() {
        if (action === "x") {
            setAction("+")
        } else{
            setAction("x")
        }
    }

    return (
        <div className="floating-button-add" onClick={changeActionSymbol}>
            <p>{action}</p>
        </div>
    )
}

export default FloatingButtonAdd
