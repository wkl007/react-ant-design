import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getRouterData } from './router/router'

class App extends Component {
  render () {
    let {userinfo} = this.props
    let routerData = getRouterData()
    let UserLayout = routerData['/user'].component
    let BasicLayout = routerData['/'].component
    return (
      <div className="App">
        <Switch>
          <Route path="/user" render={(props) => {
            return !userinfo
              ? <UserLayout {...props} routerData={routerData}/>
              : <Redirect to="/"/>
          }}/>
          <Route path="/" render={(props) => {
            return userinfo
              ? <BasicLayout {...props} routerData={routerData}/>
              : <Redirect to="/user/login"/>
          }}/>
        </Switch>
      </div>
    )
  }
}

//redux react 绑定
function mapStateToProps (state) {
  return {
    userinfo: state.userinfo,
  }
}

export default withRouter(connect(
  mapStateToProps,
)(App))
