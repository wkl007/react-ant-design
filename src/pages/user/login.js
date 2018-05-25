import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Checkbox, Alert, Icon, Button } from 'antd'
import styles from './login.less'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionFromOtherFile from '../../redux/actions/userinfo'

import { saveUserinfo } from '../../utils/catche'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      type: 'account',
      autoLogin: true,
    }
  }

  login = () => {
    this.props.userInfoActions.add(saveUserinfo('wkl'))
  }

  render () {
    return (
      <div className={styles.main}>
        <Button onClick={this.login}>点击登录</Button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    userinfo: state.userinfo,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    userInfoActions: bindActionCreators(
      userInfoActionFromOtherFile, dispatch,
    ),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)