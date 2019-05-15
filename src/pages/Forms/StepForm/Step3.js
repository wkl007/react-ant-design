import React, { Component, Fragment } from 'react'
import { Button, Row, Col } from 'antd'
import { Result } from 'ant-design-pro'
import styles from './styles.less'

const qs = require('qs')

class Step3 extends Component {

  render () {
    const { history, location } = this.props
    const data = qs.parse(location.search.substring(1))
    const onFinish = () => {
      history.push('/form/step-form')
    }
    const information = (
      <div className={styles.information}>
        <Row>
          <Col xs={24} sm={8} className={styles.label}>
            付款账户：
          </Col>
          <Col xs={24} sm={16}>
            {data.payAccount}
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={8} className={styles.label}>
            收款账户：
          </Col>
          <Col xs={24} sm={16}>
            {data.receiverAccount}
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={8} className={styles.label}>
            收款人姓名：
          </Col>
          <Col xs={24} sm={16}>
            {data.receiverName}
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={8} className={styles.label}>
            转账金额：
          </Col>
          <Col xs={24} sm={16}>
            <span className={styles.money}>{data.amount}</span> 元
          </Col>
        </Row>
      </div>
    )
    const actions = (
      <Fragment>
        <Button type="primary" onClick={onFinish}>再转一笔</Button>
        <Button>查看账单</Button>
      </Fragment>
    )
    return (
      <Result
        type="success"
        title="操作成功"
        descripotion="预计两小时内到账"
        extra={information}
        actions={actions}
        className={styles.result}
      />
    )
  }
}

export default Step3
