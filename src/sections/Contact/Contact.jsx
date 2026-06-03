import React from 'react'
import "./Contact.css"
import ContactCard from './component/ContactCard'
import { contactContext } from '../../context/ContactContext'
const Contact = () => {
  return (
    <div id="contact" className='contact-section'>
        <p className='contact-heading'>Contact Me</p>
        <div className="contact-cards">
          {contactContext.map((item) => (
            <ContactCard icon = {item.icon} link = {item.link} />
          ))}
        </div>
    </div>
  )
}

export default Contact