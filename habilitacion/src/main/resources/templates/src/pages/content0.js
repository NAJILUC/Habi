import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {Title} from '../components/title'
import {ListReports} from '../components/listReports'
import {ListTokens} from '../components/listTokens'
const cookies = new Cookies();

const tokens = [{id:1, host:"asasa", userdb:"asas", pass:"asasas", db:"asasasas", token:"Asasasas", port:"asasas", user:"ASas", state:"asasa", type:"Asasa"},{id:2, host:"asasa", userdb:"asas", pass:"asasas", db:"asasasas", token:"Asasasas", port:"asasas", user:"ASas", state:"asasa", type:"Asasa"},
{id:3, host:"asasa", userdb:"asas", pass:"asasas", db:"asasasas", token:"Asasasas", port:"asasas", user:"ASas", state:"asasa", type:"Asasa"}]
console.log(tokens[0]);


export class ContentA extends Component {

  state = {
     pagina :'0'
   }


    cerrarSesion=()=>{
        cookies.remove('nombre', {path: "/"});
        cookies.remove('clave', {path: "/"});
        window.location.href='./';
    }

      componentDidMount() {
          if(!cookies.get('nombre') && cookies.get('rol')!="uno"){
              window.location.href="./";
          }
      }

   paginacion1=()=>{
      this.setState({ pagina: 0})
    }

    paginacion2=()=>{
       this.setState({ pagina: 1})
     }

    render() {
        return (
            <div>
                 <Title> Menu principal  Listo de Tokens</Title>

              <div className="field has-addons" id="opcionesmenu">
                <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
              </div>



{
                <ListTokens tokens={tokens}/>

}



            </div>

        );
    }
}
