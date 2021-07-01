import React , {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import Cookies from 'universal-cookie';
const cookies = new Cookies();


export class Token extends Component {
static propTypes = {
id : PropTypes.string,
host : PropTypes.string,
userdb : PropTypes.string,
pass: PropTypes.string,
db: PropTypes.string,
token: PropTypes.string,
port : PropTypes.string,
user: PropTypes.string,
state: PropTypes.string,
type: PropTypes.string,

componentDidMount() {
    if(!cookies.get('nombre')){
        window.location.href="./";
    }
}

}
render(){
  const {id, host, userdb, pas, db, token, port, user, state, type} = this.props
  return(
    <Link to={`/detailT/${id}`} className="card">
  <div className="card-content">

    <p className="title is-4">token: {id}</p>
    <div className="media">
      <div className="media-content">
        <p className="subtitle is-6">host :{host}</p>
        <p className="subtitle is-6">userdb :{userdb}</p>
        <p className="subtitle is-6">token: {token}</p>
        <p className="subtitle is-6">port: {port}</p>
        <p className="subtitle is-6">user: {user}</p>
        <p className="subtitle is-6">type: {type}</p>
      </div>
    </div>
  </div>
</Link>
  );
}



}
