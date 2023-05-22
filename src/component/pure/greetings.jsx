import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greetings extends Component {
    myAge  = 29;

    constructor(props){
        super(props);
        this.state = {
            age : this.myAge,
            myName: this.props.name,
        }
    }
    render() {
        return (
            <div>
                <h1> Hola mundo Componente {this.props.name}</h1>
                <div>
                    <button onClick={this.setName}>
                        añadir texto
                    </button>
                </div>
                <h2>mi verdadero nombre {this.state.myName}</h2>
                <h2> tu edad es {this.state.age}</h2>

                <div>
                    <button onClick={this.birthday}>
                        cumplir años 
                    </button>
                </div>
            </div>

        );
    }
    setName = () =>{
        this.setState((prevState)=>({
            myName: prevState.myName +"experto"
        }))
    }
    birthday = () =>{
        this.setState(
            (prevState)=>(
                {
                    age: prevState.age + 1,
                    
                }
            )
        )
    }
}


Greetings.propTypes = {
    name: PropTypes.string
};


export default Greetings;
