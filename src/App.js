import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getRouterData } from './router/router'

class App extends Component {
  render () {
    let {userInfo} = this.props
    let routerData = getRouterData()
    let UserLayout = routerData['/user'].component
    let BasicLayout = routerData['/'].component
    return (
      <div className="App">
        <Switch>
          <Route path="/user" render={(props) => {
            return !userInfo
              ? <UserLayout {...props} routerData={routerData}/>
              : <Redirect to="/"/>
          }}/>
          <Route path="/" render={(props) => {
            return userInfo
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
    userInfo: state.userInfo,
  }
}

export default withRouter(connect(
  mapStateToProps,
)(App))
