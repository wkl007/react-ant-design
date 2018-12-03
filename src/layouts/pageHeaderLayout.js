import React from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from 'ant-design-pro'
import MenuContext from './menuContext'
import styles from './pageHeaderLayout.less'

export default ({children, wrapperClassName, top, ...restProps}) => (
  <div style={{margin: '-24px -24px 0'}} className={wrapperClassName}>
    {top}
    <MenuContext.Consumer>
      {
        value=>(
          <PageHeader key="pageheader" {...restProps} {...value} linkElement={Link}/>
        )
      }
    </MenuContext.Consumer>
    {children ? <div className={styles.content}>{children}</div> : null}
  </div>
)

