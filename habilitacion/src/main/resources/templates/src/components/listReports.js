import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Report } from './report'
import {Link} from 'react-router-dom'

import Cookies from 'universal-cookie';
const cookies = new Cookies();


export class ListReports extends Component {
  static propTypes = {
    reports: PropTypes.array
  }

  render () {
    const { reports } = this.props
    console.log(reports[1]);
    return (


<div>
  <Link to={`/crearreporte`} className="card" >  Crear Report  </Link>
      <div className='List'>

        {
          reports.map(report => {
            return (
              <div key={report.id} className='List-item'>
                <Report
                  id={report.id}
                  conexion={report.conexion}
                  datacreate={report.datecreate}
                  state={report.state}
                  descripcion={report.descripcion}
                  datacreate={report.datacreate}
                  name={report.name}
                />
              </div>
            )
          })
        }
      </div>
  </div>
    )
  }
}
