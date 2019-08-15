import React, { Component, Fragment } from 'react'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import { Icon } from 'antd'
import { GlobalFooter } from 'ant-design-pro'
import { getRoutes } from '@/utils/utils'
import logo from '@/assets/images/logo.svg'

import styles from './UserLayout.less'

const links = [
  {
    key: 'help',
    title: '帮助',
    href: ''
  },
  {
    key: 'privacy',
    title: '隐私',
    href: ''
  },
  {
    key: 'terms',
    title: '条款',
    href: ''
  }
]

const copyright = (
  <Fragment>
    Copyright <Icon type='copyright'/> 2018 蚂蚁金服体验技术部出品
  </Fragment>
)

class UserLayout extends Component {
  // 获取页面标题
  getPageTitle = () => {
    let { routerData, location } = this.props
    let { pathname } = location
    let title = '小王管理系统'
    if (routerData[pathname] && routerData[pathname].name) {
      title = `${routerData[pathname].name} - ${title}`
    }
    return title
  }

  render () {
    let { match, routerData } = this.props
    let routes = getRoutes(match.path, routerData)
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to='/'>
                  <img className={styles.logo} src={logo} alt='logo'/>
                  <span className={styles.title}>Ant Design</span>
                </Link>
              </div>
              <div className={styles.desc}>Ant Design 是西湖区最具影响力的 Web 设计规范
              </div>
            </div>
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
              <Redirect exact from='/user' to='/user/login'/>
            </Switch>
          </div>
          <GlobalFooter links={links} copyright={copyright}/>
        </div>
      </DocumentTitle>
    )
  }
}

export default UserLayout
