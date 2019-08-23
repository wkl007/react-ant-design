import React, { FC } from 'react'
import { Tooltip } from 'antd'
import { Command } from 'gg-editor'
import upperFirst from 'lodash/upperFirst'
import IconFont from '@/pages/Editor/components/IconFont'
import styles from './index.less'

interface ToolbarButtonProps {
  command: string,
  icon?: string,
  text?: string
}

const ToolbarButton: FC<ToolbarButtonProps> = ({ command, icon, text }) => (
  <Command name={command}>
    <Tooltip
      title={text || upperFirst(command)}
      placement='bottom'
      overlayClassName={styles.tooltip}
    >
      <IconFont type={`icon-${icon || command}`}/>
    </Tooltip>
  </Command>
)

export default ToolbarButton
