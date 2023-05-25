/* crear un componente de tipo funcion y acceder a su estado privado a traves de un hook */
import React, {useState} from 'react';

const Ejemplo = () => {
    const valorInicial = 0;
    const valorInicialPersona = {
        name: 'PERSONA INICIAL',
        email: 'EMAIL PERSONA',
    }
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(valorInicialPersona);
    /* funcion para actualizar el estado de contador */
    function incrementarContador(){
        setContador(contador+1);
    }
/* funcion para actualizar el estado de persona */

    function actualizaPersona(){
        setPersona(
            {
                name: 'Persona Cambiada',
                emai: 'Email cambiado'
            }
        );
    }
    return (
        <div>
        <h1>Ejemplo de useState</h1>
        <h2>contador: {contador}</h2>
        <h2>** persona **</h2>
        <h3>name: {persona.name}</h3>
        <h4>email: {persona.email}</h4>
        <u>
            <li><button onClick={incrementarContador}>Incrementar contador</button></li>
            <li><button onClick={actualizaPersona}>actualizar Persona</button></li>
        </u>    
        </div>
    );
}

export default Ejemplo;
