import React, { Component } from 'react'
import {Title} from '../components/title'
import {LoginForm} from '../components/login'
import {Link} from 'react-router-dom'

import Cookies from 'universal-cookie';
const cookies = new Cookies();

export class Home extends Component {

  componentDidMount() {
      if(cookies.get('nombre')){
          window.location.href="./content";
      }
  }

  render () {
    return (
          <div>
             <Title> Inicio de Session </Title>
               <div className="Login-wrapper">
               <LoginForm/>
               </div>
              <Link to={`/register`} className="card">
              Registro
              </Link>
          </div>


    )
  }
}
