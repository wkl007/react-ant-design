import React, { Fragment, ReactNode } from 'react'
import { Icon, Layout } from 'antd'
import { GlobalFooter } from 'ant-design-pro'

const { Footer } = Layout

const FooterView: ReactNode = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'Pro 首页',
          title: 'Pro 首页',
          href: 'http://pro.ant.design',
          blankTarget: true
        },
        {
          key: 'github',
          title: <Icon type='github'/>,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'http://ant.design',
          blankTarget: true
        }
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type='copyright'/> 2019 蚂蚁金服体验技术部出品
        </Fragment>
      }/>
  </Footer>
)

export default FooterView
