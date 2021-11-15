import React, {Component} from "react";
import {Link} from "react-router-dom";
import Axios from "axios";

class Facto extends Component{
    constructor() {
        super();
        this.state = {
            number:0,
            factoresult:1
        }
        this.operate = this.operate.bind(this)
    }
    async operate (o) {
        o.preventDefault()
        const url = "https://calculations-back-mery.herokuapp.com/api/factorial"
        const config = {
            method: 'get',
            url: url,
            headers: {
                'numberfactorial': this.state.number,
                'factoresult': this.state.factoresult
            }

        }
        const response = await Axios(config)
        const data = response.data
        this.setState({factoresult:data.factoresult})

    }

    render() {
        return (
            <div className="paginaAux">
                <h1>
                    Calcular Factorial
                </h1>
                <p>
                    En el siguiente cuadro ingresa el número al que le quieres calcular el factorial:
                </p>
                <form onSubmit={this.operate}>
                    <input type="number" placeholder="Ingrese el número" onChange={o => this.setState({number:o.target.value})}/>
                    <button type="submit">
                        Calcular
                    </button>
                </form>
                <div>
                    <h5>
                        El factorial de este numero: {this.state.number} es = {this.state.factoresult}
                    </h5>
                </div>
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
