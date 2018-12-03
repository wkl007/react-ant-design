import React from 'react'
import { Link } from 'react-router-dom'
import { Exception } from 'ant-design-pro'

export default () => (
  <Exception type="500" linkElement={Link}
             style={{minHeight: 500, height: '80%'}}/>
)
