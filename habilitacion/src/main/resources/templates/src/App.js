import './App.css';
import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import 'bulma/css/bulma.css'
import {Home} from './pages/home'
import {Content} from './pages/content'
import {RegisterForm} from './pages/register'
import {ReportForm} from './components/creacteReport'
import {TokenForm} from './components/creacteToken'
import {ContentA} from './pages/content0'
import {DReportForm} from './components/creacteReport0'
import {DTokenForm} from './components/creacteToken0'
import {NotFound} from './pages/notfounds'
class App extends Component {


  render(){
    return (
      <div className="App">
       <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path="/content" component={Content}/>
          <Route exact path="/content1" component={ContentA}/>
          <Route exact path="/register" component={RegisterForm}/>
          <Route exact path="/crearreporte" component={ReportForm}/>
          <Route exact path="/creartoken" component={TokenForm}/>
          <Route path='/detailR/:Rid' component={DReportForm}/>
          <Route path='/detailT/:Tid' component={DTokenForm}/>
          <Route  component={NotFound}/>
       </Switch>
      </div>
    );
  }
}

export default App;
