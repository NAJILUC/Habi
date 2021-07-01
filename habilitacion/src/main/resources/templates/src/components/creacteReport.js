import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import {Title} from './title'
import {Link} from 'react-router-dom'
const cookies = new Cookies();

export class ReportForm extends Component {

  state = {
   file: '',
   conexion: '',
   datacreate:'',
   state:'',
   descripcion:'',
   name:''
 }

   _fileChange = (e) => {
     this.setState({ file: e.target.value})
   }


   _conexionChange= (e) => {
     this.setState({ conexion: e.target.value})
   }

  _datacreateChange=(e) => {
    this.setState({ datacreate: e.target.value})
  }

  _stateChange = (e) => {
    this.setState({ state: e.target.value})
  }


  _descripcionChange = (e) => {
    this.setState({ descripcion: e.target.value})
  }

 _nameChange=(e) => {
   this.setState({ name: e.target.value})
 }



   _registroSubmit = (e) => {
      e.preventDefault()
      window.location="./content";

  }

  componentDidMount() {
      if(!cookies.get('nombre') && cookies.get('rol')!="dos"){
          window.location.href="./";
      }
  }



    render () {
      return (
        <center>
           <Title> Crear Reporte </Title>


        <form onSubmit={this._registroSubmit}>
            <div className="field has-addons" id="register">
            <div className="control">
              <input
                className="input"
                onChange={this._conexionChange}
                type="text"
                placeholder="conexion" />
                <input
                  className="input"
                  onChange={this._datacreateChange}
                  type="text"
                  placeholder="fecha de creaacion" />
                  <input
                    className="input"
                    onChange={this._stateChange}
                    type="text"
                    placeholder="estado" />
                    <input
                      className="input"
                      onChange={this._descripcionChange}
                      type="text"
                      placeholder="descripcion" />
                      <input
                        className="input"
                        onChange={this._nameChange}
                        type="text"
                        placeholder="nombre" />
                        <input
                          className="input"
                          onChange={this._fileChange}
                          type="file"
                          placeholder="archivo" />

            <button className="button is-info">
              Crear reporte
            </button>
          </div>
          </div>
        </form>
        <Link
          className='button is-info'
          to='/content'>
          Volver al Contenido
        </Link>
        </center>

      )
    }
}
