import React from 'react'
import { Card } from 'antd'
import { CanvasPanel, DetailPanel, EdgePanel, GroupPanel, MultiPanel, NodePanel } from 'gg-editor'
import DetailForm from './DetailForm'
import styles from './index.less'

const FlowDetailPanel = (
  <DetailPanel className={styles.detailPanel}>
    <NodePanel>
      <DetailForm type='type'/>
    </NodePanel>
    <EdgePanel>
      <DetailForm type='edge'/>
    </EdgePanel>
    <GroupPanel>
      <DetailForm type='group'/>
    </GroupPanel>
    <MultiPanel>
      <Card type='inner' size='small' title='Multi Select' bordered={false}/>
    </MultiPanel>
    <CanvasPanel>
      <Card type='inner' size='small' title='Canvas' bordered={false}/>
    </CanvasPanel>
  </DetailPanel>
)

export default FlowDetailPanel
