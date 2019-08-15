import React from 'react'
import { Col, Row } from 'antd'
import GGEditor, { Koni } from 'gg-editor'
import EditorMinimap from '@/pages/Editor/components/EditorMinimap'
import { KoniContextMenu } from '@/pages/Editor/components/EditorContextMenu'
import { KoniToolbar } from '@/pages/Editor/components/EditorToolbar'
import { KoniItemPanel } from '@/pages/Editor/components/EditorItemPanel'
import { KoniDetailPanel } from '@/pages/Editor/components/EditorDetailPanel'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import KoniCustomNode from './shape/nodes/KoniCustomNode'

import styles from '@/pages/Editor/Flow/index.less'

GGEditor.setTrackable(false)

const KoniPage = () => {
  return (
    <PageHeaderWrapper
      title='拓扑编辑器'
      content='拓扑结构图是指由网络节点设备和通信介质构成的网络结构图'
    >
      <GGEditor className={styles.editor}>
        <Row type='flex' className={styles.editorHd}>
          <Col span={24}>
            <KoniToolbar/>
          </Col>
        </Row>
        <Row type='flex' className={styles.editorBd}>
          <Col span={4} className={styles.editorSidebar}>
            <KoniItemPanel/>
          </Col>
          <Col span={16} className={styles.editorContent}>
            <Koni className={styles.koni}/>
          </Col>
          <Col span={4} className={styles.editorSidebar}>
            <KoniDetailPanel/>
            <EditorMinimap/>
          </Col>
        </Row>
        <KoniCustomNode/>
        <KoniContextMenu/>
      </GGEditor>
    </PageHeaderWrapper>
  )
}

export default KoniPage
