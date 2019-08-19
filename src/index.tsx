import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import 'moment/locale/zh-cn'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import * as serviceWorker from './serviceWorker'

import '@/assets/styles/index.less'

import App from './App'

const app = (
  <ConfigProvider locale={zhCN}>
    <App/>
  </ConfigProvider>
)

ReactDOM.render(
  app,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

if (module.hot) module.hot.accept()
