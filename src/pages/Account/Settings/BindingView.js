import React, { Component, Fragment } from 'react'
import { List, Icon } from 'antd'

class BindingView extends Component {
  getData = () => [
    {
      title: '绑定淘宝',
      description: '当前未绑定淘宝账号',
      actions: [
        <span className='link-button'>
          绑定
        </span>,
      ],
      avatar: <Icon type="taobao" className="taobao"/>,
    },
    {
      title: '绑定支付宝',
      description: '当前未绑定支付宝账号',
      actions: [
        <span className='link-button'>
          绑定
        </span>,
      ],
      avatar: <Icon type="alipay" className="alipay"/>,
    },
    {
      title: '绑定钉钉',
      description: '当前未绑定钉钉账号',
      actions: [
        <span className='link-button'>
          绑定
        </span>,
      ],
      avatar: <Icon type="dingding" className="dingding"/>,
    },
  ]

  render () {
    return (
      <Fragment>
        <List
          itemLayout='horizontal'
          dataSource={this.getData()}
          renderItem={item => (
            <List.Item actions={item.actions}>
              <List.Item.Meta
                avatar={item.avatar}
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Fragment>
    )
  }
}

export default BindingView
