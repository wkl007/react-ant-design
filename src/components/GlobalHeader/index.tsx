import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import groupBy from 'lodash/groupBy'
import { Debounce } from 'lodash-decorators'
import { Avatar, Divider, Dropdown, Icon, Menu, message, Spin, Tag, Tooltip } from 'antd'
import { HeaderSearch, NoticeIcon } from 'ant-design-pro'
import styles from './index.less'

const NoticeIconCopy: any = NoticeIcon
const NoticeIconTab: any = NoticeIcon.Tab

interface GlobalHeaderProps {
  logo: string,
  currentUser: any,
  isMobile: boolean,
  fetchingNotices: boolean,
  notices: Array<any>,
  collapsed: boolean,
  onNoticeClear: (tabTitle: string) => void,
  onCollapse: (collapsed: boolean) => void,
  onMenuClick: (e: any) => void,
  onNoticeVisibleChange: (visible: any) => void,
}

class GlobalHeader extends Component<GlobalHeaderProps> {
  componentWillUnmount (): void {
    // @ts-ignore
    this.triggerResizeEvent.cancel()
  }

  @Debounce(600)
  triggerResizeEvent () {
    const event = document.createEvent('HTMLEvents')
    event.initEvent('resize', true, false)
    window.dispatchEvent(event)
    console.log('监听窗口事件')
  }

  // 获取notice列表
  getNoticeData = (notices: any) => {
    if (notices.length === 0) return {}
    const newNotices = notices.map((notice: any) => {
      const newNotice = { ...notice }
      if (newNotice.datetime) {
        newNotice.datetime = moment(notice.datetime).fromNow()
      }
      if (newNotice.id) {
        newNotice.key = newNotice.id
      }
      if (newNotice.extra && newNotice.status) {
        const colorList: any = {
          todo: '',
          processing: 'blue',
          urgent: 'red',
          doing: 'gold'
        }
        const color = colorList[newNotice.status]
        newNotice.extra = (
          <Tag color={color} style={{ marginRight: 0 }}>
            {newNotice.extra}
          </Tag>
        )
      }
      return newNotice
    })
    return groupBy(newNotices, 'type')
  }

  // 左侧菜单展开收缩
  toggle = () => {
    const { collapsed, onCollapse } = this.props
    onCollapse(!collapsed)
    this.triggerResizeEvent()
  }

  render () {
    const {
      currentUser,
      collapsed,
      fetchingNotices,
      isMobile,
      notices,
      logo,
      onNoticeVisibleChange,
      onMenuClick,
      onNoticeClear
    } = this.props
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
        <Menu.Item key='userCenter'>
          <Icon type='user'/>个人中心
        </Menu.Item>
        <Menu.Item key='userSettings'>
          <Icon type='setting'/>个人设置
        </Menu.Item>
        <Menu.Item key='triggerError'>
          <Icon type='close-circle'/>触发报错
        </Menu.Item>
        <Menu.Item key='logout'>
          <Icon type='logout'/>退出登录
        </Menu.Item>
      </Menu>
    )
    const noticeData = this.getNoticeData(notices)
    return (
      <div className={styles.header}>
        {
          isMobile && [
            <Link to='/' className={styles.logo} key='logo'>
              <img src={logo} alt='logo' width='32'/>
            </Link>,
            <Divider type='vertical' key='line'/>
          ]
        }
        <Icon
          className={styles.trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <div className={styles.right}>
          <HeaderSearch
            className={`${styles.action} ${styles.search}`}
            placeholder='站内搜索'
            dataSource={['搜索提示一', '搜索提示二', '搜索提示三']}
            onSearch={value => {
              console.log('input', value)
            }}
            onPressEnter={value => {
              console.log('enter', value)
            }}
          />
          <Tooltip title='使用文档'>
            <a
              target='_blank'
              href='http://pro.ant.design/docs/getting-started'
              rel='noopener noreferrer'
              className={styles.action}
            >
              <Icon type='question-circle-o'/>
            </a>
          </Tooltip>
          <NoticeIconCopy
            className={styles.action}
            count={currentUser.notifyCount}
            onItemClick={(item: any, tabProps: any) => {
              console.log(item, tabProps)
            }}
            onClear={onNoticeClear}
            onPopupVisibleChange={onNoticeVisibleChange}
            loading={fetchingNotices}
            popupAlign={{ offset: [20, -16] }}
            onViewMore={() => message.info('查看更多')}
            locale={{
              emptyText: '暂无数据',
              clear: '清空',
              viewMore: '查看 更多'
            }}
          >
            <NoticeIconTab
              list={noticeData['通知']}
              title='通知'
              emptyText='你已查看所有通知'
              emptyImage='https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg'
              showViewMore
            />
            <NoticeIconTab
              list={noticeData['消息']}
              title='消息'
              emptyText='您已读完所有消息'
              emptyImage='https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg'
              showViewMore
            />
            <NoticeIconTab
              list={noticeData['待办']}
              title='待办'
              emptyText='你已完成所有待办'
              emptyImage='https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg'
              showViewMore
            />
          </NoticeIconCopy>
          {
            currentUser.name ? (
              <Dropdown overlay={menu}>
                <span className={`${styles.action} ${styles.account}`}>
                  <Avatar
                    size='small'
                    className={styles.avatar}
                    src={currentUser.avatar}/>
                  <span className={styles.name}>{currentUser.name}</span>
                </span>
              </Dropdown>
            ) : (
              <Spin size='small' style={{ marginLeft: 8 }}/>
            )
          }
        </div>
      </div>
    )
  }
}

export default GlobalHeader
