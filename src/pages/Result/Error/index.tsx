import React, { FC, ReactNode, Fragment } from 'react'
import { Button, Card, Icon, Result } from 'antd'
import PageHeaderWrapper from '@/components/PageHeader'

const information: ReactNode = (
  <Fragment>
    <div
      style={{
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.85)',
        fontWeight: 500,
        marginBottom: 16
      }}
    >
      您提交的内容有如下错误：
    </div>
    <div style={{ marginBottom: 16 }}>
      <Icon style={{ color: '#f5222d', marginRight: 8 }} type='close-circle-o'/>您的账户已被冻结
      <span className='link-button' style={{ marginLeft: 16 }}>
        立即解冻 <Icon type='right'/>
      </span>
    </div>
    <div>
      <Icon style={{ color: '#f5222d', marginRight: 8 }} type='close-circle-o'/>您的账户还不具备申请资格
      <span className='link-button' style={{ marginLeft: 16 }}>
        立即升级 <Icon type='right'/>
      </span>
    </div>
  </Fragment>
)
const extra: ReactNode = <Button type='primary'>返回修改</Button>

const Error: FC = () => (
  <PageHeaderWrapper
    title='失败页面'
  >
    <Card bordered={false}>
      <Result
        status='error'
        title='提交失败'
        subTitle='请核对并修改以下信息后，再重新提交。'
        extra={extra}
      >
        {information}
      </Result>
    </Card>
  </PageHeaderWrapper>
)

export default Error
