import React, { ReactNode } from 'react'
import { Spin } from 'antd'

const Loading: ReactNode = () => (
  <div style={{ textAlign: 'center', marginTop: 100 }}>
    <Spin size='large'/>
  </div>
)

export default Loading
