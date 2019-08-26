import React, { FC } from 'react'
import { Command } from 'gg-editor'
import upperFirst from 'lodash/upperFirst'
import IconFont from '@/pages/Editor/components/IconFont'
import styles from './index.less'

interface MenuItemProps {
  command: string;
  icon?: string;
  text?: string;
}

const Index: FC<MenuItemProps> = ({ command, icon, text }) => <Command name={command}>
  <div className={styles.item}>
    <IconFont type={`icon-${icon || command}`}/>
    <span>{text || upperFirst(command)}</span>
  </div>
</Command>

export default Index
