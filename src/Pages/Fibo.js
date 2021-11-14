import React, {Component} from "react";
import {Link} from "react-router-dom";
import Axios from "axios";

class Fibo extends Component{

    constructor() {
        super();
        this.state = {
            number:0,
            arr:[]}

        this.operate = this.operate.bind(this)
    }
    async operate (o) {
        o.preventDefault()
        const url = "https://calculations-back-mery.herokuapp.com/api/fibonacci"
        const config = {
            method: 'get',
            url: url,
            headers: {
                'numberfibonacci': this.state.number,
                'arr': this.state.arr
            }

        }
        const response = await Axios(config)
        const data = response.data
        this.setState({
            arr:  data.arr.map((n)=>
                <li>{n}</li>
            )
        })

    }
    render() {
        return (
            <div className="paginaAux">
                <h1>
                    Calcular Fibonacci
                </h1>
                <p>
                    En el siguiente cuadro ingresa el número al que le quieres calcular el fibonacci:
                </p>
                <form onSubmit={this.operate}>
                    <input type="number" placeholder="Ingrese el número" onChange={o => this.setState({number:o.target.value})}/>
                    <button type="submit">
                        Calcular
                    </button>
                </form>
                <div>
                    <h5>
                        La secuencia hasta los {this.state.number} numeros de fibonacci son: {this.state.arr}
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
export default Fibo
