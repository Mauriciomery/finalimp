import React, {Component} from "react";
import {Link} from "react-router-dom";

class APReact extends Component{
    render() {
        return (
            <div className="paginaAux">
                <h1>
                    Calcular Perimetro y Area Rectangulo
                </h1>
                <p>
                    En los siguientes recuadros ingresa los valores de los lados diferentes del rectangulo
                </p>
                <form>
                    <input type="number" placeholder="Ingrese el primer lado"/>
                    <input type="number" placeholder="Ingrese el segundo lado"/>
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
export default APReact