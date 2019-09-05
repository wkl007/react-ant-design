import React, { Component, FormEvent, Fragment } from 'react'
import moment from 'moment'
import {
  Badge,
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  Icon,
  Input,
  InputNumber,
  Menu,
  message,
  Modal,
  Row,
  Select
} from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
import PageHeaderWrapper from '@/components/PageHeader'
import StandardTable from '@/components/StandardTable'
import styles from './index.less'

const FormItem = Form.Item
const { Option } = Select
const getValue = (obj: { [x: string]: any; }) =>
  Object.keys(obj).map(key => obj[key]).join(',')
const statusMap: any = ['default', 'processing', 'success', 'error']
const status = ['关闭', '运行中', '已上线', '异常']
const data = {
  list: [
    {
      key: 4108,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      no: 'TradeCode 4108',
      title: '一个任务名称 4108',
      owner: '曲丽丽',
      description: '2222',
      callNo: 589,
      status: 0,
      updatedAt: '2018-06-03T02:14:39.899Z',
      createdAt: '2018-06-03T02:14:39.899Z',
      progress: 20
    },
    {
      key: 0,
      disabled: true,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      no: 'TradeCode 0',
      title: '一个任务名称 0',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 27,
      status: 1,
      updatedAt: '2017-06-30T16:00:00.000Z',
      createdAt: '2017-06-30T16:00:00.000Z',
      progress: 53
    },
    {
      key: 6,
      disabled: true,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      no: 'TradeCode 6',
      title: '一个任务名称 6',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 301,
      status: 3,
      updatedAt: '2017-07-03T16:00:00.000Z',
      createdAt: '2017-07-03T16:00:00.000Z',
      progress: 31
    },
    {
      key: 12,
      disabled: true,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      no: 'TradeCode 12',
      title: '一个任务名称 12',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 722,
      status: 1,
      updatedAt: '2017-07-06T16:00:00.000Z',
      createdAt: '2017-07-06T16:00:00.000Z',
      progress: 31
    },
    {
      key: 18,
      disabled: true,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      no: 'TradeCode 18',
      title: '一个任务名称 18',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 66,
      status: 2,
      updatedAt: '2017-07-10T00:00:00.000Z',
      createdAt: '2017-07-10T00:00:00.000Z',
      progress: 59
    },
    {
      key: 19,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      no: 'TradeCode 19',
      title: '一个任务名称 19',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 571,
      status: 1,
      updatedAt: '2017-07-10T00:00:00.000Z',
      createdAt: '2017-07-10T00:00:00.000Z',
      progress: 49
    },
    {
      key: 20,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      no: 'TradeCode 20',
      title: '一个任务名称 20',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 145,
      status: 0,
      updatedAt: '2017-07-11T00:00:00.000Z',
      createdAt: '2017-07-11T00:00:00.000Z',
      progress: 47
    },
    {
      key: 21,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      no: 'TradeCode 21',
      title: '一个任务名称 21',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 731,
      status: 3,
      updatedAt: '2017-07-11T00:00:00.000Z',
      createdAt: '2017-07-11T00:00:00.000Z',
      progress: 13
    },
    {
      key: 22,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      no: 'TradeCode 22',
      title: '一个任务名称 22',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 220,
      status: 1,
      updatedAt: '2017-07-12T00:00:00.000Z',
      createdAt: '2017-07-12T00:00:00.000Z',
      progress: 92
    },
    {
      key: 23,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      no: 'TradeCode 23',
      title: '一个任务名称 23',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 952,
      status: 0,
      updatedAt: '2017-07-12T00:00:00.000Z',
      createdAt: '2017-07-12T00:00:00.000Z',
      progress: 82
    },
    {
      key: 24,
      disabled: true,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      no: 'TradeCode 24',
      title: '一个任务名称 24',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 959,
      status: 3,
      updatedAt: '2017-07-13T00:00:00.000Z',
      createdAt: '2017-07-13T00:00:00.000Z',
      progress: 22
    },
    {
      key: 25,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      no: 'TradeCode 25',
      title: '一个任务名称 25',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 426,
      status: 3,
      updatedAt: '2017-07-13T00:00:00.000Z',
      createdAt: '2017-07-13T00:00:00.000Z',
      progress: 44
    },
    {
      key: 26,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      no: 'TradeCode 26',
      title: '一个任务名称 26',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 472,
      status: 0,
      updatedAt: '2017-07-14T00:00:00.000Z',
      createdAt: '2017-07-14T00:00:00.000Z',
      progress: 27
    },
    {
      key: 27,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      no: 'TradeCode 27',
      title: '一个任务名称 27',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 355,
      status: 0,
      updatedAt: '2017-07-14T00:00:00.000Z',
      createdAt: '2017-07-14T00:00:00.000Z',
      progress: 53
    },
    {
      key: 28,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      no: 'TradeCode 28',
      title: '一个任务名称 28',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 819,
      status: 1,
      updatedAt: '2017-07-15T00:00:00.000Z',
      createdAt: '2017-07-15T00:00:00.000Z',
      progress: 53
    },
    {
      key: 29,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      no: 'TradeCode 29',
      title: '一个任务名称 29',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 360,
      status: 1,
      updatedAt: '2017-07-15T00:00:00.000Z',
      createdAt: '2017-07-15T00:00:00.000Z',
      progress: 97
    },
    {
      key: 30,
      disabled: true,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      no: 'TradeCode 30',
      title: '一个任务名称 30',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 210,
      status: 2,
      updatedAt: '2017-07-16T00:00:00.000Z',
      createdAt: '2017-07-16T00:00:00.000Z',
      progress: 17
    },
    {
      key: 31,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      no: 'TradeCode 31',
      title: '一个任务名称 31',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 410,
      status: 2,
      updatedAt: '2017-07-16T00:00:00.000Z',
      createdAt: '2017-07-16T00:00:00.000Z',
      progress: 84
    },
    {
      key: 32,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      no: 'TradeCode 32',
      title: '一个任务名称 32',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 163,
      status: 1,
      updatedAt: '2017-07-17T00:00:00.000Z',
      createdAt: '2017-07-17T00:00:00.000Z',
      progress: 35
    },
    {
      key: 33,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      no: 'TradeCode 33',
      title: '一个任务名称 33',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 662,
      status: 1,
      updatedAt: '2017-07-17T00:00:00.000Z',
      createdAt: '2017-07-17T00:00:00.000Z',
      progress: 76
    },
    {
      key: 34,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      no: 'TradeCode 34',
      title: '一个任务名称 34',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 55,
      status: 3,
      updatedAt: '2017-07-18T00:00:00.000Z',
      createdAt: '2017-07-18T00:00:00.000Z',
      progress: 8
    },
    {
      key: 35,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      no: 'TradeCode 35',
      title: '一个任务名称 35',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 814,
      status: 2,
      updatedAt: '2017-07-18T00:00:00.000Z',
      createdAt: '2017-07-18T00:00:00.000Z',
      progress: 46
    },
    {
      key: 36,
      disabled: true,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      no: 'TradeCode 36',
      title: '一个任务名称 36',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 44,
      status: 0,
      updatedAt: '2017-07-19T00:00:00.000Z',
      createdAt: '2017-07-19T00:00:00.000Z',
      progress: 2
    },
    {
      key: 37,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      no: 'TradeCode 37',
      title: '一个任务名称 37',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 803,
      status: 3,
      updatedAt: '2017-07-19T00:00:00.000Z',
      createdAt: '2017-07-19T00:00:00.000Z',
      progress: 92
    },
    {
      key: 38,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      no: 'TradeCode 38',
      title: '一个任务名称 38',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 994,
      status: 3,
      updatedAt: '2017-07-20T00:00:00.000Z',
      createdAt: '2017-07-20T00:00:00.000Z',
      progress: 54
    },
    {
      key: 39,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      no: 'TradeCode 39',
      title: '一个任务名称 39',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 22,
      status: 1,
      updatedAt: '2017-07-20T00:00:00.000Z',
      createdAt: '2017-07-20T00:00:00.000Z',
      progress: 84
    },
    {
      key: 40,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      no: 'TradeCode 40',
      title: '一个任务名称 40',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 191,
      status: 0,
      updatedAt: '2017-07-21T00:00:00.000Z',
      createdAt: '2017-07-21T00:00:00.000Z',
      progress: 40
    },
    {
      key: 41,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      no: 'TradeCode 41',
      title: '一个任务名称 41',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 425,
      status: 2,
      updatedAt: '2017-07-21T00:00:00.000Z',
      createdAt: '2017-07-21T00:00:00.000Z',
      progress: 51
    },
    {
      key: 42,
      disabled: true,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      no: 'TradeCode 42',
      title: '一个任务名称 42',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 141,
      status: 2,
      updatedAt: '2017-07-22T00:00:00.000Z',
      createdAt: '2017-07-22T00:00:00.000Z',
      progress: 98
    },
    {
      key: 43,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      no: 'TradeCode 43',
      title: '一个任务名称 43',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 811,
      status: 0,
      updatedAt: '2017-07-22T00:00:00.000Z',
      createdAt: '2017-07-22T00:00:00.000Z',
      progress: 8
    },
    {
      key: 44,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      no: 'TradeCode 44',
      title: '一个任务名称 44',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 848,
      status: 1,
      updatedAt: '2017-07-23T00:00:00.000Z',
      createdAt: '2017-07-23T00:00:00.000Z',
      progress: 76
    },
    {
      key: 45,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      no: 'TradeCode 45',
      title: '一个任务名称 45',
      owner: '曲丽丽',
      description: '这是一段描述',
      callNo: 921,
      status: 1,
      updatedAt: '2017-07-23T00:00:00.000Z',
      createdAt: '2017-07-23T00:00:00.000Z',
      progress: 67
    }],
  pagination: { total: 32, pageSize: 10, current: 1 }
}

interface TableListProps extends FormComponentProps {}

interface TableListState {
  loading: boolean;
  modalVisible: boolean;
  expandForm: boolean;
  selectedRows: any;
  formValues: any;
  data: any;
  pagination: any;
}

class TableList extends Component<TableListProps, TableListState> {
  state = {
    loading: true,
    modalVisible: false,
    expandForm: false,
    selectedRows: [],
    formValues: {},
    data: data,
    pagination: data.pagination
  }

  componentDidMount (): void {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 500)
  }

  // 搜索
  handleSearch = (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    const { form } = this.props
    form.validateFields((err, fieldsValue) => {
      if (err) return
      const values = {
        ...fieldsValue,
        updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf()
      }
      this.setState({
        formValues: values
      })
      console.log(values)
    })
  }

  // 重置
  handleFormReset = () => {
    const { form } = this.props
    form.resetFields()
    this.setState({
      formValues: {}
    })
  }

  // 切换表单
  toggleForm = () => {
    this.setState({
      expandForm: !this.state.expandForm
    })
  }

  // 操作弹窗
  handleModalVisible = (flag: boolean) => {
    this.setState({
      modalVisible: flag
    })
  }

  // 添加
  handleAdd = (fieldsValue: any) => {
    console.log(fieldsValue)
    message.success('添加成功')
    this.handleModalVisible(false)
  }

  // 选中
  handleSelectRows = (rows: any) => {
    this.setState({
      selectedRows: rows
    })
  }

  // 分页相关
  handleStandardTableChange = (pagination: any, filtersArg: any, sorter: any) => {
    const { formValues } = this.state

    const filters: any = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj: any = { ...obj }
      newObj[key] = getValue(filtersArg[key])
      return newObj
    }, {})
    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters
    }
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`
    }
    console.log(params)
    const data = Object.assign({}, this.state.pagination,
      { pageSize: pagination.pageSize, current: pagination.current })
    this.setState({
      pagination: data
    })
  }

  // 基本表单
  renderSimpleForm = () => {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSearch} layout='inline'>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label='规则编号'>
              {getFieldDecorator('no')(<Input autoComplete='off' placeholder='请输入'/>)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label='使用状态'>
              {getFieldDecorator('status')(
                <Select placeholder='请选择' style={{ width: '100%' }}>
                  <Option value='0'>关闭</Option>
                  <Option value='1'>运行中</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type='primary' htmlType='submit'>
                  查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                  重置
              </Button>
              <span className='link-button' style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                  展开 <Icon type='down'/>
              </span>
            </span>
          </Col>
        </Row>
      </Form>
    )
  }

  // 高级表单
  renderAdvancedForm = () => {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSearch} layout='inline'>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label='规则编号'>
              {getFieldDecorator('no')(
                <Input
                  autoComplete='off'
                  placeholder='请输入'/>)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label='使用状态'>
              {getFieldDecorator('status')(
                <Select placeholder='请选择' style={{ width: '100%' }}>
                  <Option value='0'>关闭</Option>
                  <Option value='1'>运行中</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label='调用次数'>
              {getFieldDecorator('number')(<InputNumber
                style={{ width: '100%' }}/>)}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label='更新日期'>
              {getFieldDecorator('date')(
                <DatePicker style={{ width: '100%' }} placeholder='请输入更新日期'/>
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label='使用状态'>
              {getFieldDecorator('status3')(
                <Select placeholder='请选择' style={{ width: '100%' }}>
                  <Option value='0'>关闭</Option>
                  <Option value='1'>运行中</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label='使用状态'>
              {getFieldDecorator('status4')(
                <Select placeholder='请选择' style={{ width: '100%' }}>
                  <Option value='0'>关闭</Option>
                  <Option value='1'>运行中</Option>
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <div style={{ overflow: 'hidden' }}>
          <span style={{ float: 'right', marginBottom: 24 }}>
            <Button type='primary' htmlType='submit'>
              查询
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
              重置
            </Button>
            <span className='link-button' style={{ marginLeft: 8 }} onClick={this.toggleForm}>
              收起 <Icon type='up'/>
            </span>
          </span>
        </div>
      </Form>
    )
  }

  renderForm = () => {
    return this.state.expandForm
      ? this.renderAdvancedForm()
      : this.renderSimpleForm()
  }

  renderCreateForm = () => {
    const { modalVisible } = this.state
    const { form } = this.props
    const okHandle = () => {
      form.validateFields((err, fieldsValue) => {
        if (err) return
        form.resetFields()
        this.handleAdd(fieldsValue)
      })
    }
    return <Modal
      title='新建规则'
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => this.handleModalVisible(false)}
    >
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label='描述'>
        {
          form.getFieldDecorator('desc', {
            rules: [
              {
                required: true,
                message: 'Please input some description...'
              }]
          })(<Input autoComplete='off' placeholder='请输入'/>)
        }
      </FormItem>
    </Modal>
  }

  render () {
    const { loading, selectedRows, data, pagination } = this.state
    const columns = [
      {
        title: '规则编号',
        dataIndex: 'no'
      },
      {
        title: '描述',
        dataIndex: 'description'
      },
      {
        title: '服务调用次数',
        dataIndex: 'callNo',
        sorter: true,
        align: 'right',
        render: (val: any) => `${val} 万`,
        needTotal: true
      },
      {
        title: '状态',
        dataIndex: 'status',
        filters: [
          {
            text: status[0],
            value: 0
          },
          {
            text: status[1],
            value: 1
          },
          {
            text: status[2],
            value: 2
          },
          {
            text: status[3],
            value: 3
          }
        ],
        onFilter: (value: any, record: any) => record.status.toString() === value,
        render (val: any) {
          return <Badge status={statusMap[val]} text={status[val]}/>
        }
      },
      {
        title: '更新时间',
        dataIndex: 'updateAt',
        sorter: true,
        render: (val: any) =>
          <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>
      },
      {
        title: '操作',
        render: () => (
          <Fragment>
            <span className='link-button'>配置</span>
            <Divider type='vertical'/>
            <span className='link-button'>订阅预报</span>
          </Fragment>
        )
      }
    ]
    const menu = (
      <Menu selectedKeys={[]}>
        <Menu.Item key='remove'>删除</Menu.Item>
        <Menu.Item key='approval'>批量审批</Menu.Item>
      </Menu>
    )
    return (
      <PageHeaderWrapper title='查询表格'>
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderForm()}</div>
            <div className={styles.tableListOperator}>
              <Button
                icon='plus'
                type='primary'
                onClick={() => this.handleModalVisible(true)}>
                新建
              </Button>
              {
                selectedRows.length > 0 ? (
                  <span>
                    <Button>批量操作</Button>
                    <Dropdown overlay={menu}>
                      <Button>
                        更多操作 <Icon type='down'/>
                      </Button>
                    </Dropdown>
                  </span>
                ) : null
              }
            </div>
            <StandardTable
              data={data}
              pagination={pagination}
              loading={loading}
              columns={columns}

              selectedRows={selectedRows}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleStandardTableChange}
            />
            {this.renderCreateForm()}
          </div>
        </Card>
      </PageHeaderWrapper>
    )
  }
}

export default Form.create()(TableList)
