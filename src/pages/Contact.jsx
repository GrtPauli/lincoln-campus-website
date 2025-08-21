import React from 'react'
import ContactMapSection from '../components/contact/ContactMapSection'
import ContactAccordion from '../components/contact/ContactAccordion'
import ContactHero from '../components/contact/ContactHero'

export default function Contact() {
  return (
    <div>
        <ContactHero />
        
        <p className='p-12 text-xl'>Have a question? Want to leave feedback or just say hi? Please don’t hesitate to complete the form below if you want to discuss ways we could help you reach your objectives.</p>

        <ContactMapSection />
        <ContactAccordion />
    </div>
  )
}
