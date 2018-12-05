import React, { Component, Fragment } from 'react'
import { List, Switch, message } from 'antd'

class Notification extends Component {
  onChange = (title, e) => {
    switch (e) {
      case true:
        message.success(`${title}开`)
        break
      case false:
        message.error(`${title}关`)
        break
      default:
        break
    }
  }

  action = (title) => {
    return <Switch
      checkedChildren='开'
      unCheckedChildren='关'
      defaultChecked
      onChange={e => this.onChange(title, e)}
    />
  }

  getData = () => {
    return [
      {
        title: '其他用户消息',
        description: '其他用户的消息将以站内信的形式通知',
      },
      {
        title: '系统消息',
        description: '系统消息将以站内信的形式通知',
      },
      {
        title: '账户密码',
        description: '账户密码',
      },
    ]
  }

  render () {
    return (
      <Fragment>
        <List
          itemLayout='horizontal'
          dataSource={this.getData()}
          renderItem={item => (
            <List.Item actions={[this.action(item.title)]}>
              <List.Item.Meta
                title={item.title}
                description={item.description}/>
            </List.Item>
          )}
        />
      </Fragment>
    )
  }
}

export default Notification
