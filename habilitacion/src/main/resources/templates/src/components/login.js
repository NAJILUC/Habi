import React, {Component} from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


export class LoginForm extends Component {

  state = {
   usuario: '',
   clave:'',
   rol:''
 }

   _userChange = (e) => {
     this.setState({ usuario: e.target.value})
   }

   _passwordChange = (e) => {
     this.setState({ clave: e.target.value})
   }

   _rolChange = (e) => {
     this.setState({ rol: e.target.value})
   }


   _loginSubmit = (e) => {
      e.preventDefault()
      const usuario = this.state.usuario;
      const clave = this.state.clave;
      const rol = this.state.rol;
      console.log(usuario);
      console.log(clave);
      const ver = 1;
      cookies.set('nombre',usuario, {path: "/"});
      cookies.set('clave',clave, {path: "/"});
      cookies.set('rol',rol, {path: "/"});

      if(rol=="dos")  {window.location="./content"; return;}
      if(rol=="uno")  {window.location="./content1"; return;}

       alert(`Error ${usuario} ${clave}`);

  }


    render () {
      return (
        <form onSubmit={this._loginSubmit}>
          <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this._rolChange}
              type="text"
              placeholder="Rol" />
          </div>
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
          </div>
          <div className="control">
            <button className="button is-info">
              Loguear
            </button>
          </div>
        </form>

      )
    }
}
