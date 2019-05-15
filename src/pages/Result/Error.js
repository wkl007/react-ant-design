import React, { Component, Fragment } from 'react'
import { Button, Icon, Card } from 'antd'
import { Result } from 'ant-design-pro'
import PageHeaderWrapper from '../../components/PageHeaderWrapper'

const extra = (
  <Fragment>
    <div
      style={{
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.85)',
        fontWeight: '500',
        marginBottom: 16,
      }}
    >
      您提交的内容有如下错误：
    </div>
    <div style={{marginBottom: 16}}>
      <Icon style={{color: '#f5222d', marginRight: 8}} type="close-circle-o"/>您的账户已被冻结
      <span className='link-button' style={{marginLeft: 16}}>
        立即解冻 <Icon type="right"/>
      </span>
    </div>
    <div>
      <Icon style={{color: '#f5222d', marginRight: 8}} type="close-circle-o"/>您的账户还不具备申请资格
      <span className='link-button' style={{marginLeft: 16}}>
        立即升级 <Icon type="right"/>
      </span>
    </div>
  </Fragment>
)

const actions = <Button type="primary">返回修改</Button>

class Error extends Component {
  render () {
    return (
      <PageHeaderWrapper
        title='成功页面'
      >
        <Card bordered={false}>
          <Result
            type="error"
            title="提交失败"
            description="请核对并修改以下信息后，再重新提交。"
            extra={extra}
            actions={actions}
            style={{marginTop: 48, marginBottom: 16}}
          />
        </Card>
      </PageHeaderWrapper>
    )
  }
}

export default Error
