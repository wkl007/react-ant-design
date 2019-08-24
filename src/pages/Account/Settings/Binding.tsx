import React, { Component, Fragment, FC } from 'react'
import { Icon, List } from 'antd'

const getData = () => [
  {
    title: '绑定淘宝',
    description: '当前未绑定淘宝账号',
    actions: [
      <span className='link-button'>
          绑定
      </span>
    ],
    avatar: <Icon type='taobao' className='taobao'/>
  },
  {
    title: '绑定支付宝',
    description: '当前未绑定支付宝账号',
    actions: [
      <span className='link-button'>
          绑定
      </span>
    ],
    avatar: <Icon type='alipay' className='alipay'/>
  },
  {
    title: '绑定钉钉',
    description: '当前未绑定钉钉账号',
    actions: [
      <span className='link-button'>
          绑定
      </span>
    ],
    avatar: <Icon type='dingding' className='dingding'/>
  }
]

const Binding: FC = () => (
  <Fragment>
    <List
      itemLayout='horizontal'
      dataSource={getData()}
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

export default Binding
