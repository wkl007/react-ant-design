import React, { Component } from 'react'
import { Form, Input, Button, Alert, Divider } from 'antd'
import { digitUppercase } from '../../../utils/utils'

import styles from './styles.less'

const qs = require('qs')
const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
}

@Form.create()
class Step2 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      submitting: false,
    }
  }

  render () {
    const {form, history, location} = this.props
    const {submitting} = this.state
    const data = qs.parse(location.search.substring(1))
    const {getFieldDecorator, validateFields} = form
    const onPrev = () => {
      history.push('/form/step-form')
    }
    const onValidateForm = (e) => {
      e.preventDefault()
      validateFields((err, values) => {
        if (!err) {
          console.log(values)
          this.setState({
            submitting: true,
          })
          setTimeout(()=>{
            this.setState({
              submitting: false,
            })
            history.push({
              pathname: '/form/step-form/result',
              search: qs.stringify({...data, ...values}),
            })
          },1000)
        }
      })
    }
    return (
      <Form onSubmit={onValidateForm} layout="horizontal"
            className={styles.stepForm}>
        <Alert
          closable
          showIcon
          message="确认转账后，资金将直接打入对方账户，无法退回。"
          style={{marginBottom: 24}}
        />
        <Form.Item {...formItemLayout} className={styles.stepForm}
                   label="付款账户">
          {data.payAccount}
        </Form.Item>
        <Form.Item {...formItemLayout} className={styles.stepForm}
                   label="收款账户">
          {data.receiverAccount}
        </Form.Item>
        <Form.Item {...formItemLayout} className={styles.stepForm}
                   label="收款人姓名">
          {data.receiverName}
        </Form.Item>
        <Form.Item {...formItemLayout} className={styles.stepForm}
                   label="转账金额">
          <span className={styles.money}>{data.amount}</span>
          <span className={styles.uppercase}>（{digitUppercase(
            data.amount)}）</span>
        </Form.Item>
        <Divider style={{margin: '21px 0'}}/>
        <Form.Item {...formItemLayout} label="支付密码"
                   required={false}>
          {
            getFieldDecorator('password', {
              initialValue: '123456',
              rules: [
                {required: true, message: '需要支付密码才能进行支付'},
              ],
            })(<Input type="password" autoComplete="off"
                      style={{width: '80%'}}/>)
          }
        </Form.Item>
        <Form.Item style={{marginBottom: 8}} wrapperCol={{
          xs: {span: 24, offset: 0},
          sm: {
            span: formItemLayout.wrapperCol.span,
            offset: formItemLayout.labelCol.span,
          },
        }}
                   label="">
          <Button type="primary"
                  htmlType="submit"
                  loading={submitting}>提交</Button>
          <Button onClick={onPrev} style={{marginLeft: 8}}>
            上一步
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Step2
