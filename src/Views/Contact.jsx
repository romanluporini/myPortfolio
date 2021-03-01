import React from 'react'
import ContactForm from '../components/ContactForm'
import Title from '../components/Title'
import { useInView } from 'react-intersection-observer';

function Contact() {

    const [ref, inView] = useInView({ threshold: 0.5, triggerOnce:true })

    return (
        <div className="contact" id="contact" ref={ref}>
            <Title section="contact" inView={inView}/>
            <ContactForm inView={inView}/>
        </div>
    )
}

export default Contact 
