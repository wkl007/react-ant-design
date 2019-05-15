import React, { Component } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Menu } from 'antd'
import NotFound from '../../Exception/404'
import { getRouterData } from '../../../router/router'
import { getRoutes } from '../../../utils/utils'
import styles from './Info.less'

const {Item} = Menu
const currentUser = {
  'name': 'Serati Ma',
  'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  'userid': '00000001',
  'email': 'antdesign@alipay.com',
  'signature': '海纳百川，有容乃大',
  'title': '交互专家',
  'group': '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
  'tags': [
    {'key': '0', 'label': '很有想法的'},
    {'key': '1', 'label': '专注设计'},
    {'key': '2', 'label': '辣~'},
    {'key': '3', 'label': '大长腿'},
    {'key': '4', 'label': '川妹子'},
    {'key': '5', 'label': '海纳百川'}],
  'notifyCount': 12,
  'unreadCount': 11,
  'country': 'China',
  'geographic': {
    'province': {'label': '浙江省', 'key': '330000'},
    'city': {'label': '杭州市', 'key': '330100'},
  },
  'address': '西湖区工专路 77 号',
  'phone': '0752-268888888',
}

class Info extends Component {
  constructor (props) {
    super(props)
    const {match, location} = props
    const menuMap = {
      base: <span>基本设置</span>,
      security: (
        <span>安全设置</span>
      ),
      binding: (
        <span>账号绑定</span>
      ),
      notification: (
        <span>新消息通知</span>
      ),
    }
    const key = location.pathname.replace(`${match.path}/`, '')
    this.state = {
      currentUser: currentUser,
      mode: 'inline',
      menuMap,
      selectKey: menuMap[key] ? key : 'base',
    }
  }

  static getDerivedStateFromProps (props, state) {
    return null
  }

  componentDidMount () {
    window.addEventListener('resize', this.resize)
    this.resize()
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resize)
  }

  getMenu = () => {
    const {menuMap} = this.state
    return Object.keys(menuMap)
      .map(item => <Item key={item}>{menuMap[item]}</Item>)
  }

  getRightTitle = () => {
    const {selectKey, menuMap} = this.state
    return menuMap[selectKey]
  }

  selectKey = ({key}) => {
    const {history} = this.props
    history.push({
      pathname: `/account/settings/${key}`,
    })
    this.setState({
      selectKey: key,
    })
  }

  resize = () => {
    if (!this.main) {
      return
    }
    requestAnimationFrame(() => {
      let mode = 'inline'
      const {offsetWidth} = this.main
      if (this.main.offsetWidth < 641 && offsetWidth > 400) {
        mode = 'horizontal'
      }
      if (window.innerWidth < 768 && offsetWidth > 400) {
        mode = 'horizontal'
      }
      this.setState({
        mode,
      })
    })
  }

  render () {
    const {mode, selectKey} = this.state
    const {match} = this.props

    const routerData = getRouterData()
    const routes = getRoutes(match.path, routerData)
    return (
      <div
        className={styles.main}
        ref={ref => {this.main = ref}}
      >
        <div className={styles.leftmenu}>
          <Menu mode={mode} selectedKeys={[selectKey]}
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
              from="/account/settings"
              to="/account/settings/base"
            />
            <Route render={NotFound}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default Info
