import React, { PureComponent } from 'react'
import styles from './GridContent.less'

export default class GridContent extends PureComponent {
  render () {
    const { contentWidth, children } = this.props
    let className = `${styles.main}`
    if (contentWidth === 'Fixed') {
      className = `${styles.main} ${styles.wide}`
    }
    return <div className={className}>{children}</div>
  }
}
