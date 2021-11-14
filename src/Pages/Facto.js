import React, {Component} from "react";

class Facto extends Component{
    render() {
        return (
            <div className="paginaAux">
                <h1>
                    Calcular Factorial
                </h1>
                <p>
                    En el siguiente cuadro ingresa el número al que le quieres calcular el factorial:
                </p>
                <form>
                    <input type="number" placeholder="Ingrese el número"/>
                </form>
            </div>
        )
    }
}
export default Facto
