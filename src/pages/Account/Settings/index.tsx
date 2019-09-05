import React, { Component } from 'react'
import { match } from 'react-router'
import { History } from 'history'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Menu } from 'antd'
import NotFound from '@/pages/Exception/404'
import { getRouterList } from '@/router'
import { getRoutes } from '@/utils/utils'
import styles from './index.less'

const { Item } = Menu
const currentUser = {
  name: 'Serati Ma',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  userid: '00000001',
  email: 'antdesign@alipay.com',
  signature: '海纳百川，有容乃大',
  title: '交互专家',
  group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
  tags: [
    { key: '0', label: '很有想法的' },
    { key: '1', label: '专注设计' },
    { key: '2', label: '辣~' },
    { key: '3', label: '大长腿' },
    { key: '4', label: '川妹子' },
    { key: '5', label: '海纳百川' }],
  notifyCount: 12,
  unreadCount: 11,
  country: 'China',
  geographic: {
    province: { label: '浙江省', key: '330000' },
    city: { label: '杭州市', key: '330100' }
  },
  address: '西湖区工专路 77 号',
  phone: '0752-268888888'
}
const menuMap: any = {
  base: <span>基本设置</span>,
  security: (
    <span>安全设置</span>
  ),
  binding: (
    <span>账号绑定</span>
  ),
  notification: (
    <span>新消息通知</span>
  )
}

interface SettingProps {
  location: Location;
  match: match;
  history: History;
}

interface SettingState {
  currentUser: any;
  mode: string;
  menuMap: any;
  selectKey: string | number;
}

class Setting extends Component<SettingProps, SettingState> {
  main: any

  constructor (props: Readonly<SettingProps>) {
    super(props)
    const { match, location } = props
    const key = location.pathname.replace(`${match.path}/`, '')
    this.state = {
      currentUser: currentUser,
      mode: 'inline',
      menuMap,
      selectKey: menuMap[key] ? key : 'base'
    }
  }

  componentDidMount (): void {
    window.addEventListener('resize', this.resize)
    this.resize()
  }

  componentWillUnmount (): void {
    window.removeEventListener('resize', this.resize)
  }

  resize = () => {
    if (!this.main) {
      return
    }
    requestAnimationFrame(() => {
      let mode = 'inline'
      const { offsetWidth } = this.main
      if (this.main.offsetWidth < 641 && offsetWidth > 400) {
        mode = 'horizontal'
      }
      if (window.innerWidth < 768 && offsetWidth > 400) {
        mode = 'horizontal'
      }
      this.setState({
        mode
      })
    })
  }

  getMenu = () => {
    const { menuMap } = this.state
    return Object.keys(menuMap)
      .map((item: any) => <Item key={item}>{menuMap[item]}</Item>)
  }

  getRightTitle = () => {
    const { selectKey, menuMap } = this.state
    return menuMap[selectKey]
  }

  selectKey = (data: any) => {
    const { history } = this.props
    history.push({
      pathname: `/account/settings/${data.key}`
    })
    this.setState({
      selectKey: data.key
    })
  }

  render () {
    const { mode, selectKey } = this.state
    const { match } = this.props
    const routerList = getRouterList()
    const routes = getRoutes(match.path, routerList)
    const modeCopy: any = mode
    const selectedKeys: any = [selectKey]
    return <div
      className={styles.main}
      ref={ref => { this.main = ref }}
    >
      <div className={styles.leftmenu}>
        <Menu
          mode={modeCopy}
          selectedKeys={selectedKeys}
          onClick={this.selectKey}>
          {this.getMenu()}
        </Menu>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>{this.getRightTitle()}</div>
        <Switch>
          {
            routes.map(item => (
              <Route
                key={item.key}
                path={item.path}
                component={item.component}
                exact={item.exact}
              />
            ))
          }
          <Redirect
            exact
            from='/account/settings'
            to='/account/settings/base'
          />
          <Route render={NotFound}/>
        </Switch>
      </div>
    </div>
  }
}

export default Setting
