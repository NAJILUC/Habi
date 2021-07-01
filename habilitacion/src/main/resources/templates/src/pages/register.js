import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import {Link} from 'react-router-dom'
const cookies = new Cookies();

export class RegisterForm extends Component {

  state = {
   usuario: '',
   correo: '',
   telefono:'',
   clave:''
 }

 componentDidMount() {
     if(cookies.get('nombre')){
         window.location.href="./content";
     }
 }


   _userChange = (e) => {
     this.setState({ usuario: e.target.value})
   }

   _passwordChange = (e) => {
     this.setState({ clave: e.target.value})
   }

   _correoChange = (e) => {
     this.setState({ correo: e.target.value})
   }

   _telefonoChange = (e) => {
     this.setState({ telefono: e.target.value})
   }


   _registroSubmit = (e) => {
      e.preventDefault()
      const usuario = this.state.usuario;
      const clave = this.state.clave;
      console.log(usuario);
      console.log(clave);
      const ver = 1;
      window.location="./";
  }


    render () {
      return (
        <center>
        <form onSubmit={this._registroSubmit}>
            <div className="field has-addons" id="register">
            <div className="control">
              <input
                className="input"
                onChange={this._userChange}
                type="text"
                placeholder="Usuario" />
            </div>
            <div className="control">
              <input
                className="input"
                onChange={this._passwordChange}
                type="text"
                placeholder="Clave" />
            </div>
            <div className="control">
              <input
                className="input"
                onChange={this._correoChange}
                type="text"
                placeholder="correo" />
            </div>
            <div className="control">
              <input
                className="input"
                onChange={this._telefonoChange}
                type="text"
                placeholder="telefono" />
            </div>
          <div className="control">
            <button className="button is-info">
              Register
            </button>
            <Link
              className='button is-info'
              to='/'>
              Volver al Contenido
            </Link>
          </div>
          </div>
        </form>

        </center>

      )
    }
}
