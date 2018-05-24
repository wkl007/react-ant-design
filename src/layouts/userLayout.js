import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'

import { getRoutes } from '../utils/utils'

class UserLayout extends Component {
  render () {
    let {match,routerData} = this.props
    let routes = getRoutes(match.path, routerData)
    return (
      <div id="user-layout">
        <Switch>
          {
            routes.map(item => {
              return <Route
                key={item.key}
                path={item.path}
                component={item.component}
                exact={item.exact}
              />
            })
          }
          <Redirect exact from="/user" to="/user/login"/>
        </Switch>
      </div>
    )
  }
}

export default UserLayout