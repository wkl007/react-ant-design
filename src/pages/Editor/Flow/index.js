import React from 'react'
import { Col, Row } from 'antd'
import GGEditor, { Flow } from 'gg-editor'
import PageHeaderWrapper from '../../../components/PageHeaderWrapper'
import EditorMinimap from '../components/EditorMinimap'
import { FlowToolbar } from '../components/EditorToolbar'
import { FlowItemPanel } from '../components/EditorItemPanel'
import { FlowDetailPanel } from '../components/EditorDetailPanel'

import styles from './index.less'

GGEditor.setTrackable(false)

const FlowPage = () => {
  return (
    <PageHeaderWrapper
      title='流程图编辑器'
      content='千言万语不如一张图，流程图是表示算法思路的好方法'
    >
      <GGEditor className={styles.editor}>
        <Row type='flex' className={styles.editorHd}>
          <Col span={24}>
            <FlowToolbar/>
          </Col>
        </Row>
        <Row type='flex' className={styles.editorBd}>
          <Col span={4} className={styles.editorSidebar}>
            <FlowItemPanel/>
          </Col>
          <Col span={16} className={styles.editorContent}>
            <Flow className={styles.flow}/>
          </Col>
          <Col span={4} className={styles.editorSidebar}>
            <FlowDetailPanel/>
            <EditorMinimap/>
          </Col>
        </Row>
      </GGEditor>
    </PageHeaderWrapper>
  )
}

export default FlowPage
