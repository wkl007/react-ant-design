import React, { FC, Fragment } from 'react'
import { Button, Col, Result, Row } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
import { History } from 'history'
import { parse } from 'qs'
import styles from './index.less'

interface Step1Props extends FormComponentProps {
  history: History,
  location: Location
}

const Step3: FC<Step1Props> = props => {
  const { history, location } = props
  const data = parse(location.search.substring(1))
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
  const extra = (
    <Fragment>
      <Button type='primary' onClick={onFinish}>再转一笔</Button>
      <Button>查看账单</Button>
    </Fragment>
  )
  return (
    <Result
      status='success'
      title='操作成功'
      subTitle='预计两小时内到账'
      extra={extra}
      className={styles.result}
    >
      {information}
    </Result>
  )
}

export default Step3
