import React, {Component} from "react";
import {Link} from "react-router-dom";

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
                <Link to="/">
                    <button>
                        Volver a Home page
                    </button>
                </Link>
            </div>
        )
    }
}
export default Facto
