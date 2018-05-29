import React, { Component } from 'react'
import {
  Card,
  Button,
  Form,
  Icon,
  Col,
  Row,
  DatePicker,
  TimePicker,
  Input,
  Select,
  Popover,
} from 'antd'
import FooterToolbar from 'ant-design-pro/lib/FooterToolbar'
import PageHeaderLayout from '../../layouts/pageHeaderLayout'

import styles from './style.less'

const {Option} = Select
const {RangePicker} = DatePicker
const fieldLabels = {
  name: '仓库名',
  url: '仓库域名',
  owner: '仓库管理员',
  approver: '审批人',
  dateRange: '生效日期',
  type: '仓库类型',
  name2: '任务名',
  url2: '任务描述',
  owner2: '执行人',
  approver2: '责任人',
  dateRange2: '生效日期',
  type2: '任务类型',
}
const tableData = [
  {
    key: '1',
    workId: '00001',
    name: 'John Brown',
    department: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    workId: '00002',
    name: 'Jim Green',
    department: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    workId: '00003',
    name: 'Joe Black',
    department: 'Sidney No. 1 Lake Park',
  },
]

class AdvancedForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      width: '100%',
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.resizeFooterToolBar)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resizeFooterToolBar)

  }

  resizeFooterToolBar = () => {
    const sider = document.querySelectorAll('.ant-layout-sider')[0]
    if (!sider) return
    const width = `calc(100% - ${sider.style.width})`
    if (this.state.width !== width) {
      this.setState({
        width: width,
      })
    }
  }

  render () {
    return (
      <PageHeaderLayout
        title="高级表单"
        content="高级表单常见于一次性输入和提交大批量数据的场景。"
        wrapperClassName={styles.advancedForm}>

      </PageHeaderLayout>
    )
  }
}

export default AdvancedForm