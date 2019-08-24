import React, { Component, Fragment } from 'react'
import { match } from 'react-router'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Card, Steps } from 'antd'
import PageHeaderWrapper from '@/components/PageHeader'
import NotFound from '@/pages/Exception/404'
import { getRouterList } from '@/router'
import { getRoutes } from '@/utils/utils'
import styles from '../index.less'

const { Step } = Steps

interface StepFormProps {
  location: Location,
  match: match
}

class StepForm extends Component<StepFormProps, {}> {
  getCurrentStep = () => {
    const { location } = this.props
    const { pathname } = location
    const pathList = pathname.split('/')
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
    const { match, location } = this.props
    const routerList = getRouterList()
    const routes = getRoutes(match.path, routerList)
    return <PageHeaderWrapper
      title='分步表单'
      tabActiveKey={location.pathname}
      content='将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。'
    >
      <Card bordered={false}>
        <Fragment>
          <Steps
            current={this.getCurrentStep()}
            className={styles.steps}>
            <Step title='填写转账信息'/>
            <Step title='确认转账信息'/>
            <Step title='完成'/>
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
          <Redirect exact from='/form/step-form' to='/form/step-form/info'/>
          <Route render={NotFound}/>
        </Switch>
      </Card>
    </PageHeaderWrapper>
  }
}

export default StepForm
