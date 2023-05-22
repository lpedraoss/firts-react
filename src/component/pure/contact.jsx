import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';




const ContactComponent = ({contact}) => {
    return (
        <ul>
            <h2>Nombre: {contact.name}</h2>
            <h2>Apellido: {contact.lastName}</h2>
            <h3>Email: {contact.email}</h3>
            <h4>Conectado: {contact.conected?'Contacto En Línea':'Contacto No Disponible'}</h4>
        </ul>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};


export default ContactComponent;
