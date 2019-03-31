import * as React from 'react';

import './styles.scss'
import { ContactType } from '../PropTypes/Contact/index';

type ComponentProps = {
  contact: ContactType
}
const Contact = ({
  contact
}: ComponentProps) => (
  <div className="contact">
    <div className="contact-details">
      <img className="contact-avatar" src={contact.picture.medium}/>
      <div className="contact-name">
        <span className="contact-first-name">{contact.name.first}</span>
        <span className="contact-last-name">{contact.name.last}</span>
      </div>
      <span className="contact-email">{contact.email}</span>
    </div>
  </div>
)

export default Contact
