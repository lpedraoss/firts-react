import React, { useState } from 'react'
import PropTypes from 'prop-types'


const GreetingsF = (props) => {
    //breve introduccion con useState
    //const [variable, Metodo para actualizarla] = useState(valor inicial);
    const [age, setAge] = useState(29);
    const birthday = ()=>{
        // actualizar el age
        setAge(age+1);
    }
  return (
        <div>
            <h1> Hola  {props.name} desde componente funcional</h1>
            <div>
                <h2>tu edad es: {age}</h2>
                <div>
                    <button onClick={birthday}>
                        cumplir años
                    </button>
                </div>
            </div>
        </div>
    );
};


GreetingsF.propTypes = {
    name: PropTypes.string,

};


export default GreetingsF;
