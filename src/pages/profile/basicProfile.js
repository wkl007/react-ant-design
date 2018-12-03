import React, { Component } from 'react'
import { Card, Badge, Table, Divider } from 'antd'
import { DescriptionList } from 'ant-design-pro'
import PageHeaderLayout from '../../layouts/pageHeaderLayout'

import styles from './basicProfile.less'

const {Description} = DescriptionList
const profileData = {
  'basicGoods': [
    {
      'id': '1234561',
      'name': '矿泉水 550ml',
      'barcode': '12421432143214321',
      'price': '2.00',
      'num': '1',
      'amount': '2.00',
    },
    {
      'id': '1234562',
      'name': '凉茶 300ml',
      'barcode': '12421432143214322',
      'price': '3.00',
      'num': '2',
      'amount': '6.00',
    },
    {
      'id': '1234563',
      'name': '好吃的薯片',
      'barcode': '12421432143214323',
      'price': '7.00',
      'num': '4',
      'amount': '28.00',
    },
    {
      'id': '1234564',
      'name': '特别好吃的蛋卷',
      'barcode': '12421432143214324',
      'price': '8.50',
      'num': '3',
      'amount': '25.50',
    }],
  'advancedOperation1': [],
  'advancedOperation2': [],
  'advancedOperation3': [],
  'basicProgress': [
    {
      'key': '1',
      'time': '2017-10-01 14:10',
      'rate': '联系客户',
      'status': 'processing',
      'operator': '取货员 ID1234',
      'cost': '5mins',
    },
    {
      'key': '2',
      'time': '2017-10-01 14:05',
      'rate': '取货员出发',
      'status': 'success',
      'operator': '取货员 ID1234',
      'cost': '1h',
    },
    {
      'key': '3',
      'time': '2017-10-01 13:05',
      'rate': '取货员接单',
      'status': 'success',
      'operator': '取货员 ID1234',
      'cost': '5mins',
    },
    {
      'key': '4',
      'time': '2017-10-01 13:00',
      'rate': '申请审批通过',
      'status': 'success',
      'operator': '系统',
      'cost': '1h',
    },
    {
      'key': '5',
      'time': '2017-10-01 12:00',
      'rate': '发起退货申请',
      'status': 'success',
      'operator': '用户',
      'cost': '5mins',
    }],
}

const progressColumns = [
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '当前进度',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: text =>
      text === 'success' ? (
          <Badge status="success" text="成功"/>)
        : (
          <Badge status="processing" text="进行中"/>
        ),
  },
  {
    title: '操作员ID',
    dataIndex: 'operator',
    key: 'operator',
  },
  {
    title: '耗时',
    dataIndex: 'cost',
    key: 'cost',
  },
]

class BasicProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
    }
  }

  render () {
    let {loading} = this.state
    let {basicGoods, basicProgress} = profileData
    let goodsData = []
    if (basicGoods.length) {
      let num = 0
      let amount = 0
      basicGoods.forEach(item => {
        num += Number(item.num)
        amount += Number(item.amount)
      })
      goodsData = basicGoods.concat({
        id: '总计',
        num,
        amount,
      })
    }
    let renderContent = (value, row, index) => {
      let obj = {
        children: value,
        props: {},
      }
      if (index === basicGoods.length) {
        obj.props.colSpan = 0
      }
      return obj
    }
    let goodsColumns = [
      {
        title: '商品编号',
        dataIndex: 'id',
        key: 'id',
        render: (text, row, index) => {
          if (index < basicGoods.length) {
            return <span className='link-button'>{text}</span>
          }
          return {
            children: <span style={{fontWeight: 600}}>总计</span>,
            props: {
              colSpan: 4,
            },
          }
        },
      },
      {
        title: '商品名称',
        dataIndex: 'name',
        key: 'name',
        render: renderContent,
      },
      {
        title: '商品条码',
        dataIndex: 'barcode',
        key: 'barcode',
        render: renderContent,
      },
      {
        title: '单价',
        dataIndex: 'price',
        key: 'price',
        align: 'right',
        render: renderContent,
      },
      {
        title: '数量（件）',
        dataIndex: 'num',
        key: 'num',
        align: 'right',
        render: (text, row, index) => {
          if (index < basicGoods.length) {
            return text
          }
          return <span style={{fontWeight: 600}}>{text}</span>
        },
      },
      {
        title: '金额',
        dataIndex: 'amount',
        key: 'amount',
        align: 'right',
        render: (text, row, index) => {
          if (index < basicGoods.length) {
            return text
          }
          return <span style={{fontWeight: 600}}>{text}</span>
        },
      },
    ]
    return (
      <PageHeaderLayout title="基础详情页">
        <Card bordered={false}>
          <DescriptionList size="large" title="退款申请" style={{marginBottom: 32}}>
            <Description term="取货单号">1000000000</Description>
            <Description term="状态">已取货</Description>
            <Description term="销售单号">1234123421</Description>
            <Description term="子订单">3214321432</Description>
          </DescriptionList>
          <Divider style={{marginBottom: 32}}/>
          <DescriptionList size="large" title="用户信息" style={{marginBottom: 32}}>
            <Description term="用户姓名">付小小</Description>
            <Description term="联系电话">18100000000</Description>
            <Description term="常用快递">菜鸟仓储</Description>
            <Description term="取货地址">浙江省杭州市西湖区万塘路18号</Description>
            <Description term="备注">无</Description>
          </DescriptionList>
          <Divider style={{marginBottom: 32}}/>
          <div className={styles.title}>退货商品</div>
          <Table
            style={{marginBottom: 24}}
            pagination={false}
            loading={loading}
            dataSource={goodsData}
            columns={goodsColumns}
            rowKey="id"
          />
          <div className={styles.title}>退货进度</div>
          <Table
            style={{marginBottom: 16}}
            pagination={false}
            loading={loading}
            dataSource={basicProgress}
            columns={progressColumns}
          />
        </Card>
      </PageHeaderLayout>
    )
  }
}

export default BasicProfile
