import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import pathToRegexp from 'path-to-regexp'
import { getMenuData } from '../router/menu'
import { getRoutes } from '../utils/utils'

//根据菜单获取重定向地址
const redirectData = []
const getRedirect = item => {
  if (item && item.children) {
    if (item.children[0] && item.children[0].path) {
      redirectData.push({
        from: `${item.path}`,
        to: `${item.children[0].path}`,
      })
      item.children.forEach(children => {
        getRedirect(children)
      })
    }
  }
}
getMenuData().forEach(getRedirect)

class basicLayout extends Component {
  //获取页面标题
  getPageTitle = () => {
    let {routerData, location} = this.props
    let {pathname} = location
    let title = '小王管理系统'
    let currentRouterData = null
    Object.keys(routerData).forEach(key => {
      if (pathToRegexp(key).test(pathname)) {
        currentRouterData = routerData[key]
      }
    })
    if (currentRouterData && currentRouterData.name) {
      title = `${currentRouterData.name} - ${title}`
    }
    return title
  }

  render () {
    let {match, routerData} = this.props
    let routes = getRoutes(match.path, routerData)
    let bashRedirect = routes[0].path
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div id="basic-layout">
          <Switch>
            {
              redirectData.map(item => {
                return <Redirect
                  exact
                  key={item.from}
                  from={item.from}
                  to={item.to}/>
              })
            }
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
            <Redirect exact from="/" to={bashRedirect}/>
          </Switch>
        </div>
      </DocumentTitle>
    )
  }
}

export default basicLayout