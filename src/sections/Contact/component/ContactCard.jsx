import React from 'react'
import { CgInstagram } from 'react-icons/cg'
import "./ContactCard.css"  
const ContactCard = ({icon, link}) => {
  return (
    <div onClick={() => (window.open(link))} className="contact-card">
      <div className="icon">{icon}</div>
    </div>
  )
}

export default ContactCard