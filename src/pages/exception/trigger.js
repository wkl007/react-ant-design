import React, { PureComponent } from 'react'
import { Button, Spin, Card } from 'antd'
import styles from './style.less'

class Trigger extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      isloading: false,
    }
  }

  triggerError = code => {
    let {history} = this.props
    history.push(`/exception/${code}`)
  }

  render () {
    return (
      <Card>
        <Spin spinning={this.state.isloading} wrapperClassName={styles.trigger}>
          <Button type="danger" onClick={() => this.triggerError(403)}>
            403
          </Button>
          <Button type="danger" onClick={() => this.triggerError(404)}>
            404
          </Button>
          <Button type="danger" onClick={() => this.triggerError(500)}>
            500
          </Button>
        </Spin>
      </Card>
    )
  }
}

export default Trigger