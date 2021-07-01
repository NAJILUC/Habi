import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import {Title} from './title'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const cookies = new Cookies();

export class DTokenForm extends Component {

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
     if(!cookies.get('nombre')){
         window.location.href="./";
     }
 }

   _registroSubmit = (e) => {
      e.preventDefault()
      window.location="./content";

  }

  componentDidMount() {
      if(!cookies.get('nombre') && cookies.get('rol')!="uno"){
          window.location.href="./";
      }
  

      const { Tid } = this.props.match.params
      this._objetc({ id :Tid })
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
  this.setState({host:"asasa", userdb:"asas", pass:"asasas", db:"asasasas", token:"Asasasas",port:"asas11", user:"asas", state:"asas", type:"asas"})
}



_registroSD = (e) => {
   e.preventDefault()


}





    render () {

       const {host, userdb, pass, db, token, port,user,state,type } = this.state

      return (
        <center>
        <Title> Actualizar Token </Title>

        <form onSubmit={this._registroSubmit}>
        <div className="field has-addons" id="register">
        <div className="control">
              <input
                className="input"
                onChange={this._hostChange}
                type="text"
                placeholder={host} />
                <input
                  className="input"
                  onChange={this._userdbChange}
                  type="text"
                  placeholder={userdb} />
                  <input
                    className="input"
                    onChange={this._passChange}
                    type="text"
                    placeholder={pass} />
                    <input
                      className="input"
                      onChange={this._dbChange}
                      type="text"
                      placeholder={db} />
                      <input
                        className="input"
                        onChange={this._tokenChange}
                        type="text"
                        placeholder={token} />
                        <input
                          className="input"
                          onChange={this._portChange}
                          type="text"
                          placeholder={port} />
                          <input
                            className="input"
                            onChange={this._userChange}
                            type="text"
                            placeholder={user} />
                            <input
                              className="input"
                              onChange={this._stateChange}
                              type="text"
                              placeholder={state}/>
                              <input
                                className="input"
                                onChange={this._typeChange}
                                type="text"
                                placeholder={type} />

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
