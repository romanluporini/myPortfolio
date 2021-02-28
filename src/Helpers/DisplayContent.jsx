import React from 'react'

function DisplayContent(height) {
    if (window.scrollY >= height) {
        return true
    } else {
        return false
    }
}

export default DisplayContent
