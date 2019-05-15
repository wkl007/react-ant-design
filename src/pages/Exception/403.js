import React from 'react'
import { Link } from 'react-router-dom'
import { Exception } from 'ant-design-pro'

export default () => (
  <Exception backText='返回首页' type="403" linkElement={Link}
             style={{minHeight: 500, height: '80%'}}/>
)
