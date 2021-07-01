import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {Title} from '../components/title'
import {ListReports} from '../components/listReports'
import {ListTokens} from '../components/listTokens'
const cookies = new Cookies();

const report = [{id:1, conexion:"asasa", datacreate:"asas", state:"asasas", descripcion:"asasasas", name:"Asasasas"},{id:2, conexion:"asasa", datacreate:"asas", state:"asasas", descripcion:"asasasas", name:"Asasasas"},{id:3, conexion:"asasa", datacreate:"asas", state:"asasas", descripcion:"asasasas", name:"Asasasas"}];



export class Content extends Component {

  state = {
     pagina :'0'
   }


    cerrarSesion=()=>{
        cookies.remove('nombre', {path: "/"});
        cookies.remove('clave', {path: "/"});
        window.location.href='./';
    }

    componentDidMount() {
        if(!cookies.get('nombre') && cookies.get('rol')!="dos"){
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
                 <Title> Menu principal Listado de registro</Title>

              <div className="field has-addons" id="opcionesmenu">
                <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
              </div>



{
                <ListReports reports={report}/>

}



            </div>

        );
    }
}
