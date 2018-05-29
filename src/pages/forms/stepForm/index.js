import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import PageHeaderLayout from '../../../layouts/pageHeaderLayout'

class StepForm extends Component {
  render () {
    return (
      <PageHeaderLayout
        title="分步表单"
        content="将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。"
      >
        <Switch>
          <Redirect exact from="/form/step-form" to="/form/step-form/info"/>
        </Switch>
      </PageHeaderLayout>
    )
  }
}

export default StepForm