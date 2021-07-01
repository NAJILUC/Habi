import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import {Title} from './title'
import {Link} from 'react-router-dom'
const cookies = new Cookies();

export class TokenForm extends Component {

  state = {
   host: '',
   userdb: '',
   pass:'',
   db:'',
   token:'',
   port:'',
   user:'',
   state:'',
   type:''
 }

   _hostChange = (e) => {
     this.setState({ host: e.target.value})
   }


   _userdbChange= (e) => {
     this.setState({ userdb: e.target.value})
   }

  _passChange=(e) => {
    this.setState({ pass: e.target.value})
  }

  _dbChange = (e) => {
    this.setState({ db: e.target.value})
  }


  _tokenChange = (e) => {
    this.setState({ token: e.target.value})
  }

 _portChange=(e) => {
   this.setState({ port: e.target.value})
 }

 _userChange=(e) => {
   this.setState({ user: e.target.value})
 }

 _stateChange=(e) => {
   this.setState({ state: e.target.value})
 }

 _typeChange=(e) => {
   this.setState({ type: e.target.value})
 }

 componentDidMount() {
     if(!cookies.get('nombre') && cookies.get('rol')!="uno"){
         window.location.href="./";
     }
 }

   _registroSubmit = (e) => {
      e.preventDefault()
      window.location="./content";

  }


    render () {
      return (
        <center>
        <Title> Crear Token </Title>

        <form onSubmit={this._registroSubmit}>
        <div className="field has-addons" id="register">
        <div className="control">
              <input
                className="input"
                onChange={this._hostChange}
                type="text"
                placeholder="host" />
                <input
                  className="input"
                  onChange={this._userdbChange}
                  type="text"
                  placeholder="usuario db" />
                  <input
                    className="input"
                    onChange={this._passChange}
                    type="text"
                    placeholder="contraseña" />
                    <input
                      className="input"
                      onChange={this._dbChange}
                      type="text"
                      placeholder="base de datos" />
                      <input
                        className="input"
                        onChange={this._tokenChange}
                        type="text"
                        placeholder="token" />
                        <input
                          className="input"
                          onChange={this._portChange}
                          type="text"
                          placeholder="port" />
                          <input
                            className="input"
                            onChange={this._userChange}
                            type="text"
                            placeholder="usuario" />
                            <input
                              className="input"
                              onChange={this._stateChange}
                              type="text"
                              placeholder="estado" />
                              <input
                                className="input"
                                onChange={this._typeChange}
                                type="text"
                                placeholder="tipo" />

            <button className="button is-info">
              Crear token
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
