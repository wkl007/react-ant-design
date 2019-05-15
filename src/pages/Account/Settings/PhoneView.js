import React, { Fragment, Component } from 'react'
import { Input } from 'antd'
import styles from './PhoneView.less'

class PhoneView extends Component {
  render () {
    const {value, onChange} = this.props
    let values = ['', '']
    if (value) {
      values = value.split('-')
    }
    return (
      <Fragment>
        <Input
          maxLength={4}
          className={styles.area_code}
          value={values[0]}
          onChange={e => {
            onChange(`${e.target.value}-${values[1]}`)
          }}
        />
        <Input
          maxLength={11}
          className={styles.phone_number}
          value={values[1]}
          onChange={e => {
            onChange(`${values[0]}-${e.target.value}`)
          }}
        />
      </Fragment>
    )
  }
}

export default PhoneView
