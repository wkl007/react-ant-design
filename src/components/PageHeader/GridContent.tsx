import React, { FC, ReactNode } from 'react'
import styles from './GridContent.less'

interface GridContentProps {
  children: ReactNode,
  contentWidth?: string,
}

const GridContent: FC<GridContentProps> = (props) => {
  const { contentWidth, children } = props
  let className = `${styles.main}`
  if (contentWidth === 'Fixed') {
    className = `${styles.main} ${styles.wide}`
  }
  return <div className={className}>{children}</div>
}

export default GridContent
