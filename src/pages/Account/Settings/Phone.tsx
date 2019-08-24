import React, { Component, Fragment } from 'react'
import { Input } from 'antd'
import styles from './Phone.less'

interface PhoneProps {
  value?: any,
  onChange?: (value: string) => void
}

class Phone extends Component<PhoneProps, {}> {
  render () {
    const { value, onChange } = this.props
    let values = ['', '']
    if (value) values = value.split('-')
    return <Fragment>
      <Input
        maxLength={4}
        className={styles.area_code}
        value={values[0]}
        onChange={e => {
          if (!onChange) return
          onChange(`${e.target.value}-${values[1]}`)
        }}
      />
      <Input
        maxLength={11}
        className={styles.phone_number}
        value={values[1]}
        onChange={e => {
          if (!onChange) return
          onChange(`${values[0]}-${e.target.value}`)
        }}
      />
    </Fragment>
  }
}

export default Phone
