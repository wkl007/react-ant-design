import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Login from './pages/user/login'
import Register from './pages/user/register'
import Index from './pages/dashBoard/index'
import Table from './pages/dashBoard/table'

const userInfo = '222'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Switch>
          <Redirect path="/" to={{pathname: '/login'}} exact/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/dashBoard"
                 render={() =>
                   userInfo === 'wkl' ?
                     <div>
                       <div style={{float: 'left'}}>
                         左边
                       </div>
                       <div style={{float: 'right'}}>
                         <Switch>
                           <Route path="/dashBoard/index" component={Index}/>
                           <Route path="/dashBoard/table" component={Table}/>
                           <Redirect path="/dashBoard"
                                     to={{pathname: '/dashBoard/index'}} exact/>
                         </Switch>
                       </div>
                     </div>
                     :
                     <Redirect to={{pathname: '/login'}}/>
                 }
          />
        </Switch>
      </div>
    )
  }
}

export default App
