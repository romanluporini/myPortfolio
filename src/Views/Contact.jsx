import React from 'react'
import Title from '../components/Title'
import ContactEmail from '../Helpers/ContactEmail'

function Contact() {
    return (
        <div className="contact" id="contact">
            <Title section="contact" />
            <ContactEmail />
        </div>
    )
}

export default Contact 
