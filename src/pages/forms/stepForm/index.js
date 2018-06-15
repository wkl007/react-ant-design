import React, { Component, Fragment } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Card, Steps } from 'antd'
import PageHeaderLayout from '../../../layouts/pageHeaderLayout'
import NotFound from '../../exception/404'
import { getRouterData } from '../../../router/router'
import { getRoutes } from '../../../utils/utils'

import styles from '../style.less'

const {Step} = Steps

class StepForm extends Component {
  getCurrentStep = () => {
    let {location} = this.props
    let {pathname} = location
    let pathList = pathname.split('/')
    switch (pathList[pathList.length - 1]) {
      case 'info':
        return 0
      case 'confirm':
        return 1
      case 'result':
        return 2
      default:
        return 0
    }
  }

  render () {
    let {match, location} = this.props
    let routerData = getRouterData()
    let routes = getRoutes(match.path, routerData)

    return (
      <PageHeaderLayout
        title="分步表单"
        tabActiveKey={location.pathname}
        content="将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。"
      >
        <Card bordered={false}>
          <Fragment>
            <Steps current={this.getCurrentStep()}
                   className={styles.steps}>
              <Step title="填写转账信息"/>
              <Step title="确认转账信息"/>
              <Step title="完成"/>
            </Steps>
          </Fragment>
          <Switch>
            {
              routes.map(item => (
                <Route
                  key={item.key}
                  path={item.path}
                  component={item.component}
                  exact={item.exact}
                />
              ))
            }
            <Redirect exact from="/form/step-form" to="/form/step-form/info"/>
            <Route render={NotFound}/>
          </Switch>
        </Card>
      </PageHeaderLayout>
    )
  }
}

export default StepForm