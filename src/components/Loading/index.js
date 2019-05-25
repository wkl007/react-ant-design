import React from 'react'
import { Spin } from 'antd'

const Loading = () => (
  <div style={{ textAlign: 'center', marginTop: 100 }}>
    <Spin size='large'/>
  </div>
)

export default Loading
