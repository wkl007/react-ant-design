import React from 'react'
import { Link } from 'react-router-dom'
import { Result, Button } from 'antd'

export default () => (
  <Result
    status='403'
    title='403'
    subTitle='抱歉，你无权访问该页面'
    extra={<Button type='primary'><Link to='/'>返回首页</Link></Button>}
    style={{ marginTop: '10%', minHeight: 500, height: '80%' }}
  />
)
