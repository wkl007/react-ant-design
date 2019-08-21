import React, { FC, ReactElement } from 'react'
import Loadable from 'react-loadable'
import { Button, Result, Spin } from 'antd'

interface propsInterface {
  error: any,
  timedOut: boolean,
  retry: () => void,
}

interface defaultPropsInterface {
  loading: any,
  timeout?: number | false | null;
  delay?: number | false | null;
}

const extra: FC<propsInterface> = props => (
  <Button type='primary' onClick={props.retry}>重新加载</Button>
)

const ErrorComponent: FC<propsInterface> = props => (
  <Result
    status='500'
    title='504'
    subTitle='似乎出了点问题'
    extra={extra(props)}
  />
)

const LoadingComponent: ReactElement = (
  <div style={{ textAlign: 'center', marginTop: 100 }}>
    <Spin size='large'/>
  </div>
)

const Loading: FC<propsInterface> = props => {
  if (props.error || props.timedOut) {
    return <ErrorComponent {...props}/>
  } else {
    return LoadingComponent
  }
}

const DefaultProps: defaultPropsInterface = {
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
export function asyncComponent (component: any, callback?: () => void) {
  return Loadable({
    ...DefaultProps,
    loader: component,

    render (loaded: any, props) {
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
export function asyncComponentWithModels (component: any, models: any) {
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
