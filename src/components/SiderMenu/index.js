import React, { Component } from 'react'
import DrawerMenu from 'rc-drawer'
import SiderMenu from './SiderMenu'

import 'rc-drawer/assets/index.css'

class SiderMenuWrapper extends Component {
  render () {
    const {isMobile, collapsed, onCollapse} = this.props
    return (
      isMobile ? (
        <DrawerMenu
          getContainer={null}
          level={null}
          handleChild={false}
          open={!collapsed}
          onMaskClick={() => {
            onCollapse(true)
          }}
        >
          <SiderMenu {...this.props} collapsed={isMobile ? false : collapsed}/>
        </DrawerMenu>
      ) : <SiderMenu {...this.props}/>
    )
  }
}

export default SiderMenuWrapper
