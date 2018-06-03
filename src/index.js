import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore'
import registerServiceWorker from './registerServiceWorker'
import 'moment/locale/zh-cn'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import { LocaleProvider } from 'antd'

import './index.css'
import 'nprogress/nprogress.css'
import 'ant-design-pro/dist/ant-design-pro.css'

import App from './App'

//创建Redux的store对象
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={zhCN}>
      <HashRouter>
        <App/>
      </HashRouter>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
