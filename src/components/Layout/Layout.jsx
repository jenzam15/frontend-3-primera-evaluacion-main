import React, { Component } from "react";
import data from "../data.json";
import Historia from "../Historia/Historia";
import Historial from "../Historial/Historial";
import Opciones from "../Opciones/Opciones";
import Swal from "sweetalert2";



const historial = [];

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      seleccionAnterior: "",
    };
  }

  componentDidUpdate(estadoPrevio) {
    if (estadoPrevio.contador !== this.state.contador) {
      historial.push(this.state.seleccionAnterior);
    }
  }

  componentDidMount = () => {
    const alerta = {
      title: "Bienvenido quieres descubrir tu propia aventura?",
      
    };
    Swal.fire(alerta);
  };

 
  handleClick = (element) => {
    const id = element.target.id;
    const contador = this.state.contador;
    const anterior = this.state.seleccionAnterior;
    if (contador >= 7) {
      Swal.fire("Fin de tu aventura.");
    } else if (id === "A" && anterior !== "A") {
      this.setState({
        contador: contador + 1,
        seleccionAnterior: "A",
      });
    } else if (id === "A" && anterior === "A") {
      this.setState({
        contador: contador + 2,
      });
    } else if (id === "B" && anterior === "A") {
      this.setState({
        contador: contador + 3,
        seleccionAnterior: "B",
      });
    } else if (id === "B") {
      this.setState({
        contador: contador + 2,
        seleccionAnterior: "B",
      });
    }
    console.log(historial);

    console.log(contador);
  };

  

  render() {
    return (
      <>
        <Historia contador={[this.state.contador]} />
        <Opciones
          handleClick={this.handleClick}
          opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b}
        />
        <Historial
          seleccionAnterior={this.state.seleccionAnterior}
          historial={historial.map(
            (historial, i) => (
              <li key={i}>{historial}</li>
            ),
            data[this.state.contador].id
          )}
        />
      </>
    );
  }
}
export default Layout;
