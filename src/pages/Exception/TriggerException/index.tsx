import React, { Component } from 'react'
import { History } from 'history'
import { Button, Card, Spin } from 'antd'
import styles from './index.less'

interface TriggerExceptionProps {
  history: History;
}

interface TriggerExceptionState {
  isLoading: boolean;
}

class TriggerException extends Component<TriggerExceptionProps, TriggerExceptionState> {
  state = {
    isLoading: false
  }

  triggerError = (code: string) => {
    const { history } = this.props
    history.push(`/exception/${code}`)
  }

  render () {
    return (
      <Card>
        <Spin spinning={this.state.isLoading} wrapperClassName={styles.trigger}>
          <Button type='danger' onClick={() => this.triggerError('403')}>
            403
          </Button>
          <Button type='danger' onClick={() => this.triggerError('404')}>
            404
          </Button>
          <Button type='danger' onClick={() => this.triggerError('500')}>
            500
          </Button>
        </Spin>
      </Card>
    )
  }
}

export default TriggerException
