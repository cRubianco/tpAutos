import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import './CarBrowse.css';

import editCar from '../EditCar/EditCar';
 
const axios = require('axios');

class CarBrowse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listaDeAutos: [],
      ctdadAutos: null
    }

  }

  componentDidMount() {
    this.getDataAuto()
  }

  getDataAuto() {
    let self = this
    return axios.get('/api/cars')
      .then(function (response) {
        const json = response.data
        self.setDataAutos(json)
      })
      .catch(function (error) {
        console.log("algo paso ... ")
      })
  }

  setDataAutos(json){
    this.setState({
      listaDeAutos: json
    })
    // console.log(this.state.listaDeAutos)
  }

  // removeAuto(auto) {
  //   let autoEliminar = auto;
  //   return axios
  //     .delete("/api/cars/" + "/autos/" + auto._id)
  //     .then(function(response) {
  //       console.log(" Se elimino ");

  //     })
  //     .catch(function(error) {
  //       console.log("Error, no se pudo eliminar el alumno : ", error);
  //     });
  // }

  render() {
    return (
      <div id="container" className="m-4 container-fluid recuadroPantalla">
        <div id="recuadro externo" className="col-md-11">
          <div id="titulos" className="align-self-center">
            <h4> Listado de Autos </h4>
          </div>
          <div className="card-body text-dark">
            <div className="row">
              <div className="col-md-12">{this.tablaAutos()}</div>
            </div>
          </div>    
        </div>
      </div>
    );
  }

  // Tabla con info de los Autos
  tablaAutos(){
    return (
      <Table dark >
        <thead>
          <tr>
            {this.encabezadoTabla([
              "Marca",
              "Modelo",
              "Categoria",
              "Ctdad Puertas",
              "Precio"
            ])}
          </tr>  
        </thead>
        <tbody>
         {this.state.listaDeAutos.map(auto => this.infoAuto(auto))}
        </tbody>
      </Table> 
    );
  }

// Encabezado de la tabla 
  encabezadoTabla(titulos){
    return titulos.map((titulo, ix) => <th key={ix}>{titulo}</th>);
    
  }
  
// Información de cada uno de los autos de la tabla
  infoAuto(auto) {
    const rowDatosAuto = (
      <tr id="infoCar" key={auto._id} >
        <td> {auto.brand} </td>
        <td> {auto.model} </td>
        <td> {auto.category} </td>
        <td> {auto.nroDoors} </td>
        <td> {auto.price} </td>
        <td className="Action-Buttons">
          <Button className="Edit-Button" color="info" onClick={() => editCar()}> Modificar
             {/* <span className={"fa " + glyphIcon}> Modificar </span> */}
          </Button>
          <Button className="Delete-Button" color="danger">Eliminar</Button>
        </td>
      </tr>
    )
    return rowDatosAuto
  }
}

export default CarBrowse;