import React, {Component} from "react";
import "../Assets/CSS/Menu.css"
import {Link} from "react-router-dom";

class Menu extends Component{
    render() {
        return (
            <div className="container">
                <h1>
                    Calculations
                </h1>
                <h4>
                    By Mauricio Mery
                </h4>
                <div className="buttons">
                    <Link to="/fibonacci">
                         <button>
                          Calcular Fibonacci
                        </button>
                    </Link>
                    <Link to="/factorial">
                    <button>
                        Calcular Factorial
                    </button>
                    </Link>
                    <Link to="/triangulo">
                    <button>
                        Calcular Area y Perimetro de un Triangulo
                    </button>
                    </Link>
                    <Link to="/circulo">
                    <button>
                        Calcular Area y Perimetro de un Circulo
                    </button>
                    </Link>
                    <Link to="/rectangulo">
                    <button>
                        Calcular Area y Perimetro de un Rectangulo
                    </button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Menu
