import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import {Result} from 'ant-design-pro'
import styles from './RegisterResult.less'

const qs = require('qs')
const actions = (
  <div className={styles.actions}>
    <span className='link-button'>
      <Button size="large" type="primary">
        产看邮箱
      </Button>
    </span>
    <Link to="/">
      <Button size="large">返回首页</Button>
    </Link>
  </div>
)

class RegisterResult extends Component {
  render () {
    const {location} = this.props
    const data = qs.parse(location.search.substring(1))
    return (
      <Result
        className={styles.registerResult}
        type="success"
        title={
          <div className={styles.title}>
            你的账户：{location.search ? data.mail : 'AntDesign@example.com'} 注册成功
          </div>
        }
        description="激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。"
        actions={actions}
        style={{ marginTop: 56 }}
      >

      </Result>
    )
  }
}

export default RegisterResult
