import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import {Title} from './title'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'
const cookies = new Cookies();

export class DReportForm extends Component {

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


 componentDidMount() {
     if(!cookies.get('nombre') && cookies.get('rol')!="dos"){
         window.location.href="./";
     }
 

      const { Rid } = this.props.match.params
      this._objetc({ id :Rid })
  }


  static propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string
  })
}


_objetc ({ id }) {
  this.setState({conexion:"asasa", datacreate:"asas", state:"asasas", descripcion:"asasasas", name:"Asasasas"})
}


_registroSD = (e) => {
   e.preventDefault()


}

    render () {

      const {conexion, datacreate, state, descripcion, name } = this.state
      return (
        <center>
           <Title> Actualizar Reporte</Title>


        <form onSubmit={this._registroSD}>
            <div className="field has-addons" id="register">
            <div className="control">
              <input
                className="input"
                onChange={this._conexionChange}
                type="text"
                placeholder={conexion}/>
                <input
                  className="input"
                  onChange={this._datacreateChange}
                  type="text"
                  placeholder={datacreate} />
                  <input
                    className="input"
                    onChange={this._stateChange}
                    type="text"
                    placeholder={state} />
                    <input
                      className="input"
                      onChange={this._descripcionChange}
                      type="text"
                      placeholder={descripcion} />
                      <input
                        className="input"
                        onChange={this._nameChange}
                        type="text"
                        placeholder={name} />
                        <input
                          className="input"
                          onChange={this._fileChange}
                          type="file"
                          placeholder="archivo" />

            <button className="button is-info">
              Actualizar reporte
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
