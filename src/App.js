import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import NProgress from 'nprogress'
import { getRouterData } from './router/router'

@connect(
  ({ userInfo }) => ({ userInfo })
)
class App extends Component {
  componentWillUpdate () {
    NProgress.start()
  }

  componentDidUpdate () {
    NProgress.done()
  }

  render () {
    const { userInfo } = this.props
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

export default App
