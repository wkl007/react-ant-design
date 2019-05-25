import React from 'react'
import Loadable from 'react-loadable'
import { Button, Spin } from 'antd'
import { Exception } from 'ant-design-pro'

const actions = (props) => (
  <Button type="primary" onClick={props.retry}>重新加载</Button>
)

const ErrorComponent = (props) => (
  <Exception
    title='504'
    desc='似乎出了点问题'
    backText='重新加载'
    actions={actions(props)}
    style={{ minHeight: 500, height: '80%' }}
  />
)

const LoadingComponent = (
  <div style={{ textAlign: 'center', marginTop: 100 }}>
    <Spin size='large'/>
  </div>
)

const Loading = (props) => {
  if (props.error || props.timedOut) {
    return <ErrorComponent {...props}/>
  } else {
    return LoadingComponent
  }
}

const DefaultProps = {
  loading: Loading,
  timeout: 20000, // 20 seconds
  delay: 300 // 0.3 seconds
}

/**
 * 异步加载页面
 * @param component
 * @param callback
 * @returns {*}
 */
export function asyncComponent (component, callback) {
  return Loadable({
    ...DefaultProps,
    loader: component,

    render (loaded, props) {
      callback && callback()
      let Component = loaded.default
      return <Component {...props}/>
    }
  })
}

/**
 * 异步加载页面 同时 添加其他文件
 * @param component
 * @param models
 * @returns {*}
 */
export function asyncComponentWithModels (component, models) {
  let name = 'componentName'
  return Loadable.Map({
    ...DefaultProps,
    loader: {
      [name]: component,
      ...models
    },
    render (loaded, props) {
      let Component = loaded[name].default
      return <Component {...props}/>
    }
  })
}
