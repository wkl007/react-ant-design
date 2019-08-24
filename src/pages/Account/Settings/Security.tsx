import React, { FC, Fragment } from 'react'
import { List } from 'antd'

const passwordStrength = {
  strong: (
    <span className='strong' style={{ color: '#52c41a' }}>
      强
    </span>
  ),
  medium: (
    <span className='medium'>
      中
    </span>
  ),
  weak: (
    <span className='weak'>
      弱
    </span>
  )
}
const getData = () => [
  {
    title: '账户密码',
    description: (
      <Fragment>
        当前密码强度：{passwordStrength.strong}
      </Fragment>
    ),
    actions: [
      <span className='link-button'>
          修改
      </span>
    ]
  },
  {
    title: '密保手机',
    description: (
      <Fragment>
        已绑定手机：138****8293
      </Fragment>
    ),
    actions: [
      <span className='link-button'>
          修改
      </span>
    ]
  },
  {
    title: '密保问题',
    description: (
      <Fragment>
        未设置密保问题，密保问题可有效保护账户安全
      </Fragment>
    ),
    actions: [
      <span className='link-button'>
          设置
      </span>
    ]
  },
  {
    title: '备用邮箱',
    description: (
      <Fragment>
        已绑定邮箱：ant***sign.com
      </Fragment>
    ),
    actions: [
      <span className='link-button'>
          修改
      </span>
    ]
  },
  {
    title: 'MFA 设备',
    description: (
      <Fragment>
        未绑定 MFA 设备，绑定后，可以进行二次确认
      </Fragment>
    ),
    actions: [
      <span className='link-button'>
          绑定
      </span>
    ]
  }
]

const Security: FC = () => (
  <Fragment>
    <List
      itemLayout='horizontal'
      dataSource={getData()}
      renderItem={item => (
        <List.Item actions={item.actions}>
          <List.Item.Meta
            title={item.title}
            description={item.description}/>
        </List.Item>
      )}
    />
  </Fragment>
)

export default Security
