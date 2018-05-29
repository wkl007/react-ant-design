import React, { Component, Fragment } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import pathToRegexp from 'path-to-regexp'
import { enquireScreen, unenquireScreen } from 'enquire-js'
import { ContainerQuery } from 'react-container-query'
import classNames from 'classnames'
import { Layout, Icon, message } from 'antd'
import GlobalHeader from '../components/GlobalHeader'
import GlobalFooter from 'ant-design-pro/lib/GlobalFooter'
import SiderMenu from '../components/SiderMenu'
import PropTypes from 'prop-types'
import { getMenuData } from '../router/menu'
import { getRoutes } from '../utils/utils'

import logo from '../assets/images/logo.svg'

const {Content, Header, Footer} = Layout
const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
}

let isMobile
enquireScreen(b => {
  isMobile = b
})

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

/**
 * 获取面包屑映射
 * @param menuData 菜单配置
 * @param routerData 路由配置
 */
const getBreadcrumbNameMap = (menuData, routerData) => {
  let result = {}
  let childResult = {}
  for (let i of menuData) {
    if (!routerData[i.path]) {
      result[i.path] = i
    }
    if (i.children) {
      Object.assign(childResult, getBreadcrumbNameMap(i.children, routerData))
    }
  }
  return Object.assign({}, routerData, result, childResult)
}

class basicLayout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentUser: {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
        name: '小王',
        notifyCount: 12,
        userid: '00000001',
      },
      isMobile: isMobile,
      fetchingNotices: false,

      collapsed: false,//菜单展开收缩
      notices: [
        {
          id: '000000001',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          title: '你收到了 14 份新周报',
          datetime: '2017-08-09',
          type: '通知',
        }, {
          id: '000000002',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
          title: '你推荐的 曲妮妮 已通过第三轮面试',
          datetime: '2017-08-08',
          type: '通知',
        }, {
          id: '000000003',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
          title: '这种模板可以区分多种通知类型',
          datetime: '2017-08-07',
          read: true,
          type: '通知',
        }, {
          id: '000000004',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
          title: '左侧图标用于区分不同的类型',
          datetime: '2017-08-07',
          type: '通知',
        }, {
          id: '000000005',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          title: '内容不要超过两行字，超出时自动截断',
          datetime: '2017-08-07',
          type: '通知',
        }, {
          id: '000000006',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
          title: '曲丽丽 评论了你',
          description: '描述信息描述信息描述信息',
          datetime: '2017-08-07',
          type: '消息',
        }, {
          id: '000000007',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
          title: '朱偏右 回复了你',
          description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
          datetime: '2017-08-07',
          type: '消息',
        }, {
          id: '000000008',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
          title: '标题',
          description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
          datetime: '2017-08-07',
          type: '消息',
        }, {
          id: '000000009',
          title: '任务名称',
          description: '任务需要在 2017-01-12 20:00 前启动',
          extra: '未开始',
          status: 'todo',
          type: '待办',
        }, {
          id: '000000010',
          title: '第三方紧急代码变更',
          description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
          extra: '马上到期',
          status: 'urgent',
          type: '待办',
        }, {
          id: '000000011',
          title: '信息安全考试',
          description: '指派竹尔于 2017-01-09 前完成更新并发布',
          extra: '已耗时 8 天',
          status: 'doing',
          type: '待办',
        }, {
          id: '000000012',
          title: 'ABCD 版本发布',
          description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
          extra: '进行中',
          status: 'processing',
          type: '待办',
        }],//注意消息
    }
  }

  static childContextTypes = {
    location: PropTypes.object,
    breadcrumbNameMap: PropTypes.object,
  }

  getChildContext () {
    let {routerData, location} = this.props
    return {
      location,
      breadcrumbNameMap: getBreadcrumbNameMap(getMenuData(), routerData),
    }
  }

  componentDidMount () {
    this.enquireHandler = enquireScreen(mobile => {
      this.setState({
        isMobile: mobile,
      })
    })
  }

  componentWillUnmount () {
    unenquireScreen(this.enquireHandler)
  }

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

  //消息清除
  handleNoticeClear = (tabTitle) => {
    let {notices, currentUser} = this.state
    let newNotice = []
    notices.map(notice => {
      if (notice.type !== tabTitle) {
        newNotice.push(notice)
      }
    })
    let data = Object.assign({}, currentUser, {notifyCount: newNotice.length})
    this.setState({
      notices: newNotice,
      currentUser: data,
    })
    message.success(`清空了${tabTitle}`)
  }

  //控制左侧menu收缩展开
  handleMenuCollapse = (collapsed) => {
    this.setState({
      collapsed: collapsed,
    })
  }

  //Dropdown menu菜单点击事件
  handleMenuClick = ({key}) => {
    if (key === 'triggerError') {
      console.log('触发报错')
    } else if (key === 'logout') {
      console.log('退出登录')
    }
  }

  //notice框点击事件
  handleNoticeVisibleChange = (visible) => {
    if (visible) {
      this.setState({
        fetchingNotices: true,
      })
      setTimeout(() => {
        this.setState({
          fetchingNotices: false,
        })
      }, 200)
    }
  }

  render () {
    let {match, routerData} = this.props
    let {currentUser, isMobile, fetchingNotices, collapsed, notices} = this.state
    let routes = getRoutes(match.path, routerData)
    let bashRedirect = routes[0].path
    let layout = (
      <Layout>
        <SiderMenu
          logo={logo}
          menuData={getMenuData()}
          collapsed={collapsed}
          isMobile={isMobile}
          onCollapse={this.handleMenuCollapse}
        />
        <Layout>
          <Header style={{padding: 0}}>
            <GlobalHeader
              logo={logo}
              currentUser={currentUser}
              isMobile={isMobile}
              fetchingNotices={fetchingNotices}
              notices={notices}
              collapsed={collapsed}
              onNoticeClear={this.handleNoticeClear}
              onCollapse={this.handleMenuCollapse}
              onMenuClick={this.handleMenuClick}
              onNoticeVisibleChange={this.handleNoticeVisibleChange}
            />
          </Header>
          <Content style={{margin: '24px 24px 0', height: '100%'}}>
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
          </Content>
          <Footer style={{padding: 0}}>
            <GlobalFooter
              links={[
                {
                  key: 'Pro 首页',
                  title: 'Pro 首页',
                  href: 'http://pro.ant.design',
                  blankTarget: true,
                },
                {
                  key: 'github',
                  title: <Icon type="github"/>,
                  href: 'https://github.com/ant-design/ant-design-pro',
                  blankTarget: true,
                },
                {
                  key: 'Ant Design',
                  title: 'Ant Design',
                  href: 'http://ant.design',
                  blankTarget: true,
                },
              ]}
              copyright={
                <Fragment>
                  Copyright <Icon type="copyright"/> 2018 蚂蚁金服体验技术部出品
                </Fragment>
              }>
            </GlobalFooter>
          </Footer>
        </Layout>
      </Layout>
    )
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      </DocumentTitle>
    )
  }
}

export default basicLayout