import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

import App from './App'

//创建Redux的store对象
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
