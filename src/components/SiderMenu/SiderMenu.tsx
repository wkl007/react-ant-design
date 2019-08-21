import React, { Component, ReactElement } from 'react'
import { Link, withRouter } from 'react-router-dom'
import pathToRegexp from 'path-to-regexp'
import { Icon, Layout, Menu } from 'antd'
import { urlToList } from '@/utils/utils'

import styles from './index.less'

const { Sider } = Layout
const { SubMenu } = Menu

/* 获取导航icon
* Allow menu.js config icon as string or ReactNode
*   icon: 'setting',
*   icon: 'http://demo.com/icon.png',
*   icon: <Icon type="setting" />,
* */
const getIcon = (icon: string | ReactElement) => {
  if (typeof icon === 'string' && icon.indexOf('http') === 0) {
    return <img
      src={icon}
      alt='icon'
      className={`${styles.icon} sider-menu-item-img`}
    />
  }
  if (typeof icon === 'string') {
    return <Icon type={icon}/>
  }
  return icon
}

/**
 * 递归缩小数据
 * [{path:string},{path:string}] => {path,path2}
 * @param menu
 */
export const getFlatMenuKeys = (menu: any) =>
  menu.reduce((keys: any, item: any) => {
    keys.push(item.path)
    if (item.children) {
      return keys.concat(getFlatMenuKeys(item.children))
    }
    return keys
  }, [])

/**
 * 基于路径查找所有匹配的菜单键
 * @param flatMenuKeys:[/abc, /abc/:id, /abc/:id/info]
 * @param paths:[/abc, /abc/:id, /abc/:id/info]
 * @returns {*}
 */
export const getMenuMatchKeys = (flatMenuKeys: any, paths: any) =>
  paths.reduce((matchKeys: any, path: any) => (
    matchKeys.concat(
      flatMenuKeys.filter((item: any) => pathToRegexp(item).test(path))
    )
  ), [])

interface SiderMenuProps {
  logo: string,
  collapsed: boolean,
  menuData: any,
  isMobile: boolean,
  onCollapse: (collapsed: boolean) => void,
  Authorized?: any,
  location?: any,
}

interface SiderMenuState {
  openKeys: any
}

class SiderMenu extends Component<SiderMenuProps, SiderMenuState> {
  menus: any
  flatMenuKeys: any

  constructor (props: Readonly<SiderMenuProps>) {
    super(props)
    this.menus = props.menuData
    this.flatMenuKeys = getFlatMenuKeys(props.menuData)
    this.state = {
      openKeys: this.getDefaultCollapsedSubMenus(props)
    }
  }

  componentWillReceiveProps (nextProps: any) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        openKeys: this.getDefaultCollapsedSubMenus(nextProps)
      })
    }
  }

  // 默认展开的subMenu
  getDefaultCollapsedSubMenus = (props: any) => {
    const { location: { pathname } } = props || this.props
    return getMenuMatchKeys(this.flatMenuKeys, urlToList(pathname))
  }

  /**
   * 判断是否是http链接.返回 Link 或 a
   * Judge whether it is http link.return a or Link
   * @memberof SiderMenu
   */
  getMenuItemPath = (item: { target?: any; name?: any; path?: any; icon?: any; }) => {
    const itemPath = this.conversionPath(item.path)
    const icon = getIcon(item.icon)
    const { target, name } = item
    if (/^https?:\/\//.test(itemPath)) {
      return (
        <a href={itemPath} target={target}>
          {icon}
          <span>{name}</span>
        </a>
      )
    }
    return (
      <Link
        to={itemPath}
        target={target}
        replace={itemPath === this.props.location.pathname}
        onClick={
          this.props.isMobile
            ? () => {
              this.props.onCollapse(true)
            }
            : undefined
        }
      >
        {icon}
        <span>{name}</span>
      </Link>
    )
  }

  // 获取子菜单
  getSubMenuOrItem = (item: { target?: any; name?: string; path?: string; icon?: any; children?: any; authority?: any }) => {
    if (item.children && item.children.some((child: { name: string; }) => child.name)) {
      let childrenItems = this.getNavMenuItems(item.children)
      // 当无子菜单时就不展示菜单
      if (childrenItems && childrenItems.length > 0) {
        return (
          <SubMenu
            title={
              item.icon ? (
                <span>
                  {getIcon(item.icon)}
                  <span>{item.name}</span>
                </span>
              ) : (item.name)
            }
            key={item.path}
          >
            {childrenItems}
          </SubMenu>
        )
      }
      return null
    } else {
      return <Menu.Item key={item.path}>{this.getMenuItemPath(item)}</Menu.Item>
    }
  }

  // 获取菜单子节点
  getNavMenuItems = (menusData: any) => {
    if (!menusData) return []
    return menusData.filter((item: { name: string; hideInMenu: boolean; }) => item.name && !item.hideInMenu).map((item: { target?: any; name?: string; path?: string; icon?: any; children?: any; authority?: any; }) => {
      let ItemDom = this.getSubMenuOrItem(item)
      return this.checkPermissionItem(item.authority, ItemDom)
    }).filter((item: any) => item)
  }

  // 获取选择节点
  getSelectedMenuKeys = () => {
    const { location: { pathname } } = this.props
    return getMenuMatchKeys(this.flatMenuKeys, urlToList(pathname))
  }

  // 权限检查
  checkPermissionItem = (authority: any, ItemDom: any) => {
    if (this.props.Authorized && this.props.Authorized.check) {
      const { check } = this.props.Authorized
      return check(authority, ItemDom)
    }
    return ItemDom
  }

  // 主菜单
  isMainMenu = (key: any) => {
    return this.menus.some(
      (item: { key: any; path: any; }) => key && (item.key === key || item.path === key))
  }

  // SubMenu 展开/关闭
  handleOpenChange = (openKeys: any[]) => {
    let lastOpenKey = openKeys[openKeys.length - 1]
    let moreThanOne = openKeys.filter(
      openKey => this.isMainMenu(openKey)).length > 1
    this.setState({
      openKeys: moreThanOne ? [lastOpenKey] : [...openKeys]
    })
  }

  // 转化路径
  conversionPath = (path: string) => {
    if (path && path.indexOf('http') === 0) {
      return path
    } else {
      return `/${path || ''}`.replace(/\/+/g, '/')
    }
  }

  render () {
    const { logo, collapsed, onCollapse } = this.props
    const { openKeys } = this.state
    // 不要显示弹出式菜单
    const menuProps = collapsed
      ? {}
      : {
        openKeys
      }
    let selectedKeys = this.getSelectedMenuKeys()
    if (!selectedKeys.length) selectedKeys = [openKeys[openKeys.length - 1]]
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint='lg'
        onCollapse={onCollapse}
        width={256}
        className={styles.sider}
      >
        <div className={styles.logo} key='logo'>
          <Link to='/'>
            <img src={logo} alt='logo'/>
            <h1>Ant Design Pro</h1>
          </Link>
        </div>
        <Menu
          key='Menu'
          theme='dark'
          mode='inline'
          {...menuProps}
          onOpenChange={this.handleOpenChange}
          selectedKeys={selectedKeys}
          style={{ padding: '16px 0', width: '100%' }}
        >
          {this.getNavMenuItems(this.menus)}
        </Menu>
      </Sider>
    )
  }
}

// @ts-ignore
export default withRouter(SiderMenu)
