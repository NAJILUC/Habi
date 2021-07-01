import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Token } from './token'
import {Link} from 'react-router-dom'

export class ListTokens extends Component {
  static propTypes = {
    tokens: PropTypes.array
  }

  render () {
    const { tokens } = this.props
    return (
      <div>
        <Link to={`/creartoken`} className="card">  Crear Tokens  </Link>

      <div className='List'>
        {
          tokens.map(token => {
            return (
              <div key={token.id} className='List-item'>
                <Token
                  id={token.id}
                  host={token.host}
                  userdb={token.userdb}
                  pass={token.pass}
                  db={token.db}
                  token={token.token}
                  port={token.port}
                  user={token.user}
                  state={token.state}
                  type={token.type}
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
