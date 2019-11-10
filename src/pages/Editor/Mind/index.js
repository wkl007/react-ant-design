import React from 'react'
import { Col, Row } from 'antd'
import GGEditor, { Mind } from 'gg-editor'
import { MindContextMenu } from '@/pages/Editor/components/EditorContextMenu'
import EditorMinimap from '@/pages/Editor/components/EditorMinimap'
import { MindToolbar } from '@/pages/Editor/components/EditorToolbar'
import { MindDetailPanel } from '@/pages/Editor/components/EditorDetailPanel'
import PageHeaderWrapper from '@/components/PageHeader'
import styles from '../Flow/index.less'

GGEditor.setTrackable(false)

const data = {
  roots: [
    {
      label: '法国',
      children: [
        {
          label: '克罗地亚',
          side: 'left',
          children: [
            {
              label: '克罗地亚',
              children: [
                {
                  label: '克罗地亚',
                  children: [
                    {
                      label: '克罗地亚'
                    },
                    {
                      label: '丹麦'
                    }
                  ]
                },
                {
                  label: '俄罗斯',
                  children: [
                    {
                      label: '俄罗斯'
                    },
                    {
                      label: '西班牙'
                    }
                  ]
                }
              ]
            },
            {
              label: '英格兰',
              children: [
                {
                  label: '英格兰',
                  children: [
                    {
                      label: '英格兰'
                    },
                    {
                      label: '哥伦比亚'
                    }
                  ]
                },
                {
                  label: '瑞典',
                  children: [
                    {
                      label: '瑞士'
                    },
                    {
                      label: '瑞典'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: '法国',
          side: 'right',
          children: [
            {
              label: '法国',
              children: [
                {
                  label: '法国',
                  children: [
                    {
                      label: '法国'
                    },
                    {
                      label: '阿根廷'
                    }
                  ]
                },
                {
                  label: '乌拉圭',
                  children: [
                    {
                      label: '乌拉圭'
                    },
                    {
                      label: '葡萄牙'
                    }
                  ]
                }
              ]
            },
            {
              label: '比利时',
              children: [
                {
                  label: '比利时',
                  children: [
                    {
                      label: '比利时'
                    },
                    {
                      label: '日本'
                    }
                  ]
                },
                {
                  label: '巴西',
                  children: [
                    {
                      label: '巴西'
                    },
                    {
                      label: '墨西哥'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

const MindPage = () => <PageHeaderWrapper
  title='脑图编辑器'
  content='脑图是表达发散性思维的有效图形思维工具 ，它简单却又很有效，是一种实用性的思维工具。'
>
  <GGEditor className={styles.editor}>
    <Row type='flex' className={styles.editorHd}>
      <Col span={24}>
        <MindToolbar/>
      </Col>
    </Row>
    <Row type='flex' className={styles.editorBd}>
      <Col span={20} className={styles.editorContent}>
        <Mind data={data} className={styles.mind}/>
      </Col>
      <Col span={4} className={styles.editorSidebar}>
        <MindDetailPanel/>
        <EditorMinimap/>
      </Col>
    </Row>
    <MindContextMenu/>
  </GGEditor>
</PageHeaderWrapper>

export default MindPage
