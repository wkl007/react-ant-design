import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Checkbox, Alert, Icon } from 'antd'
import styles from './login.less'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      type: 'account',
      autoLogin: true,
    }
  }

  render () {
    return (
      <div className={styles.main}>
        2222
      </div>
    )
  }
}

export default Login