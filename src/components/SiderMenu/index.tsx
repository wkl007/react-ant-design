import React, { FC } from 'react'
import DrawerMenu from 'rc-drawer'
import SiderMenu from './SiderMenu'

import 'rc-drawer/assets/index.css'

const DrawerMenuCopy: any = DrawerMenu

interface SiderMenuWrapperProps {
  logo: string,
  collapsed: boolean,
  menuData: any,
  isMobile: boolean,
  onCollapse: (collapsed: boolean) => void,
  Authorized?: any,
  location?: Location,
}

const SiderMenuWrapper: FC<SiderMenuWrapperProps> = props => {
  const { isMobile, collapsed, onCollapse } = props
  return (
    isMobile ? (
      <DrawerMenuCopy
        getContainer={null}
        level={null}
        open={!collapsed}
        maskClosable
        onClose={() => {
          onCollapse(true)
        }}
      >
        <SiderMenu {...props} collapsed={isMobile ? false : collapsed}/>
      </DrawerMenuCopy>
    ) : <SiderMenu {...props}/>
  )
}

export default SiderMenuWrapper
