import React from 'react';


import ContactComponent from '../pure/contact';
import { Contact } from '../../models/contact.class';


const ContactListComponent = () => {
    const defaultContact = new Contact('luis','asdos','email@gmail.com',false);
    return (
        <section>
            <h1>Contacto:</h1>
            <ContactComponent contact={defaultContact}></ContactComponent>    
        </section>

    );
};



export default ContactListComponent;
