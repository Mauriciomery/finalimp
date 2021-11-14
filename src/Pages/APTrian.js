import React, {Component} from "react";
import {Link} from "react-router-dom";

class APTrian extends Component{
    render() {
        return (
            <div className="paginaAux">
                <h1>
                    Calcular Perimetro y Area
                </h1>
                <p>
                    En los siguientes recuadros ingresa los valores de los lados del triangulo.
                </p>
                <form>
                    <input type="number" placeholder="Ingrese el primer lado"/>
                    <input type="number" placeholder="Ingrese el segundo lado"/>
                    <input type="number" placeholder="Ingrese el tercer lado"/>
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
export default APTrian