import React , {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import Cookies from 'universal-cookie';
const cookies = new Cookies();



export class Report extends Component {
static propTypes = {
id : PropTypes.string,
conexion : PropTypes.string,
datacreate : PropTypes.string,
state: PropTypes.string,
descripcion: PropTypes.string,
name: PropTypes.string,

}

componentDidMount() {
    if(!cookies.get('nombre') && cookies.get('rol')!="dos"){
        window.location.href="./";
    }
}


render(){
  const {id, conexion, datacreate , state, descripcion, name} = this.props
  return(
    <Link to={`/detailR/${id}`} className="card">
  <div className="card-content">

    <p className="title is-4">report : {id}</p>
    <div className="media">
      <div className="media-content">
        <p className="subtitle is-6">nombre : {name}</p>
        <p className="subtitle is-6">descripcion : {descripcion}</p>
        <p className="subtitle is-6">estado: {state}</p>
        <p className="subtitle is-6">fecha : {datacreate}</p>
      </div>
    </div>
  </div>
</Link>
  );
}



}
