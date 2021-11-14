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
                    <button>
                        Calcular Area y Perimetro de un Triangulo
                    </button>
                    <button>
                        Calcular Area y Perimetro de un Triangulo
                    </button>
                    <button>
                        Calcular Area y Perimetro de un Triangulo
                    </button>
                </div>
            </div>
        )
    }
}
export default Menu
