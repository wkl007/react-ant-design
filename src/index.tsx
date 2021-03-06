import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import 'moment/locale/zh-cn'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import configureStore from '@/redux/store'
import * as serviceWorker from '@/serviceWorker'

import 'ant-design-pro/dist/ant-design-pro.min.css'
import '@/assets/styles/index.less'

import App from './App'

// 创建Redux的store对象
const store = configureStore()

const app = (
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <App/>
      </HashRouter>
    </ConfigProvider>
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()

if (module.hot) module.hot.accept()
