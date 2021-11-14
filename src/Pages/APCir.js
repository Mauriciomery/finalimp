import React, {Component} from "react";
import {Link} from "react-router-dom";
import Axios from "axios";

class APCir extends Component{

    constructor() {
        super();
        this.state = {
            radius:0,
            p:0,
            area:0,
        }
        this.operate = this.operate.bind(this)
    }
    async operate (o) {
        o.preventDefault()
        const url = "https://calculations-back-mery.herokuapp.com/api/circulo"
        const config = {
            method: 'get',
            url: url,
            headers: {
                'radiuscircle': this.state.radius,
                'p': this.state.p,
                'area': this.state.area
            }

        }
        const response = await Axios(config)
        const data = response.data
        this.setState({p: data.p, area: data.area})

    }
    render() {
        return (
            <div className="paginaAux">
                <h1>
                    Calcular Perimetro y Area del Circulo
                </h1>
                <p>
                    En el siguiente recuadro ingresa el radio del circulo
                </p>
                <form onSubmit={this.operate}>
                    <input type="number" placeholder="Ingrese el radio" onChange={o => this.setState({radius:o.target.value})}/>
                    <button type="submit">
                        Calcular
                    </button>
                </form>
                <div>
                    <h5>
                        Los resultados son: perimetro= {this.state.p}  y el area es {this.state.area}
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
export default APCir