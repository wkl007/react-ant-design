import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './index.less'

class GlobalFooter extends Component {
  static propTypes = {
    links: PropTypes.array,
    copyright: PropTypes.element,
  }

  render () {
    let {links, copyright} = this.props
    return (
      <div className={styles.globalFooter}>
        {
          links && (
            <div className={styles.links}>
              {
                links.map(item => {
                  return <a key={item.key}
                            target={item.blankTarget ? '_blank' : '_self'}
                            href={item.href}>{item.title}</a>
                })
              }
            </div>
          )
        }
        {copyright && <div className={styles.copyright}>{copyright}</div>}
      </div>
    )
  }
}

export default GlobalFooter