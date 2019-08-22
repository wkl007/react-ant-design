import React, { Component, FC, ReactNode } from 'react'
import classNames from 'classnames'

import styles from './index.less'

interface StandardFormRowProps {
  title: string,
  children: ReactNode,
  last: string,
  block: string,
  gird: string,
}

const StandardFormRow: FC<StandardFormRowProps> = ({ title, children, last, block, gird, ...rest }) => {
  const cls = classNames(styles.standardFormRow, {
    [styles.standardFormRowBlock]: block,
    [styles.standardFormRowLast]: last,
    [styles.standardFormRowGrid]: gird
  })
  return (
    <div className={cls} {...rest}>
      {title && (
        <div className={styles.label}>
          <span>{title}</span>
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default StandardFormRow
