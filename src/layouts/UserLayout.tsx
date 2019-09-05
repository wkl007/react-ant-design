import React, { Component, Fragment, ReactNode } from 'react'
import { match } from 'react-router'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import { Icon } from 'antd'
import { GlobalFooter } from 'ant-design-pro'
import { getRoutes } from '@/utils/utils'
import logo from '@/assets/images/logo.svg'

import styles from './UserLayout.less'

const links: Array<{
  key?: string;
  title: React.ReactNode;
  href: string;
  blankTarget?: boolean;
}> = [
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

const copyright: ReactNode = (
  <Fragment>
    Copyright <Icon type='copyright'/> 2019 蚂蚁金服体验技术部出品
  </Fragment>
)

interface UserLayoutProps {
  routerList: any;
  location: Location;
  match: match;
}

class UserLayout extends Component<UserLayoutProps, {}> {
  // 获取页面标题
  getPageTitle = () => {
    const { routerList, location: { pathname } } = this.props
    let title = '小王管理系统'
    if (routerList[pathname] && routerList[pathname].name) {
      title = `${routerList[pathname].name} - ${title}`
    }
    return title
  }

  render () {
    const { match, routerList } = this.props
    const routes = getRoutes(match.path, routerList)
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
