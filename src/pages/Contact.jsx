import React from 'react'
import NavBar from '../components/NavBar'
import ContactCard from '../components/contact-card'

export const Contact = () => {
    return (
        <div>
            <NavBar />
            <div className='contact-page'>
                <ContactCard />
            </div>
        </div>
    )
}
