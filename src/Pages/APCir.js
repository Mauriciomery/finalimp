import React, {Component} from "react";
import {Link} from "react-router-dom";

class APCir extends Component{
    render() {
        return (
            <div className="paginaAux">
                <h1>
                    Calcular Perimetro y Area Circulo
                </h1>
                <p>
                    En el siguiente recuadro ingresa el radio del circulo
                </p>
                <form>
                    <input type="number" placeholder="Ingrese el radio"/>
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
export default APCir