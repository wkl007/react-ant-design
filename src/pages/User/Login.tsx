import React, { FC, Component, ReactNode } from 'react'
import { connect } from 'react-redux'
import { Alert, Checkbox, Icon } from 'antd'
import { Login } from 'ant-design-pro'
import actions from '@/redux/actions'

import styles from './Login.less'

const { Mobile, Captcha, Submit } = Login
const Tab: any = Login.Tab
const UserName: any = Login.UserName
const Password: any = Login.Password

const rulesOption = {
  username: [
    {
      required: true, message: '请输入账号！'
    }
  ],
  password: [
    {
      required: true, message: '请输入密码！'
    }
  ],
  mobile: [
    {
      required: true, message: '请输入手机号！'
    },
    {
      pattern: /^1\d{10}$/,
      message: '手机号格式错误！'
    }
  ]
}

interface LoginProps {
  userInfo: string,
  setUserInfo: Function
}

interface LoginState {
  type: string,
  autoLogin: boolean,
  notice: string,
  submitting: boolean
}

class LoginPage extends Component<LoginProps, LoginState> {
  loginForm: any

  state = {
    type: 'account',
    autoLogin: true,
    notice: '',
    submitting: false
  }

  // 自动登录
  changeAutoLogin = (e: { target: { checked: boolean } }) => {
    this.setState({
      autoLogin: e.target.checked
    })
  }

  // 错误弹框
  renderMessage = (content: string) => {
    return <Alert
      style={{ marginBottom: 24 }}
      message={content}
      type='error'
      showIcon/>
  }

  // tab切换
  onTabChange = (type: string) => {
    this.setState({
      type: type
    })
  }

  // 验证码回调
  onGetCaptcha = () =>
    new Promise((resolve, reject) => {
      this.loginForm.validateFields(['mobile'], {}, (err: any, values: any) => {
        if (err) {
          reject(err)
        } else {
          console.log(values)
        }
      })
    })

  // 登录
  handleSubmit = (err: any, values: any) => {
    const { setUserInfo } = this.props
    if (this.state.type === 'account') {
      if (!err &&
        (values.username !== 'admin' || values.password !== '888888')) {
        this.setState({
          notice: '账户或密码错误（admin/888888）！'
        })
      } else if (!err) {
        this.setState({
          submitting: true
        })
        setTimeout(() => {
          setUserInfo(values.username)
          console.log(values.username, values.password)
        }, 1000)
      }
    } else {
      if (!err) {
        this.setState({
          submitting: true
        })
        setUserInfo(values.mobile)
        console.log(values.mobile, values.captcha)
      }
    }
  }

  render () {
    const { type, autoLogin, notice, submitting } = this.state
    return <div className={styles.main}>
      <Login
        defaultActiveKey={type}
        onTabChange={this.onTabChange}
        onSubmit={this.handleSubmit}
        ref={ref => {
          this.loginForm = ref
        }}
      >
        <Tab key='account' tab='账户密码登录'>
          {
            notice && this.renderMessage(notice)
          }
          <UserName
            name='username'
            autoComplete='off'
            placeholder='admin'
            rules={rulesOption.username}
          />
          <Password
            name='password'
            autoComplete='off'
            placeholder='888888'
            rules={rulesOption.password}
            onPressEnter={
              () => this.loginForm.validateFields(
                this.handleSubmit)
            }
          />
        </Tab>
      </Login>
    </div>
  }
}

const mapStateToProps = (state: LoginProps) => ({ userInfo: state.userInfo })
const mapDispatchToProps = (dispatch: any) => ({ setUserInfo: (data: any) => dispatch(actions.setUserInfo(data)) })

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
