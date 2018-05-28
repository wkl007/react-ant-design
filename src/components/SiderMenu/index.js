import React, { Component } from 'react'
import DrawerMenu from 'rc-drawer-menu'
import SiderMenu from './SiderMenu'

import 'rc-drawer-menu/assets/index.css'


class SiderMenuWrapper extends Component {
  render () {
    let {isMobile, collapsed, onCollapse} = this.props
    return (
      isMobile ? (
        <DrawerMenu
          parent={null}
          level={null}
          iconChild={null}
          open={!collapsed}
          onMaskClick={() => {
            onCollapse(true)
          }}
          width="256px"
        >
          <SiderMenu {...this.props} collapsed={isMobile ? false : collapsed}/>
        </DrawerMenu>

      ) : <SiderMenu {...this.props}/>
    )
  }
}

export default SiderMenuWrapper