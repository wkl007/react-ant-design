import React, { Component, Fragment } from 'react'
import numeral from 'numeral'
import classNames from 'classnames'
import { getTimeDistance } from '../../utils/utils'
import {
  Row,
  Col,
  Icon,
  Card,
  Tabs,
  Table,
  Radio,
  DatePicker,
  Tooltip,
  Menu,
  Dropdown,
} from 'antd'
import { Trend, NumberInfo, Charts } from 'ant-design-pro'

import styles from './analysis.less'

const {
  ChartCard,
  yuan,
  MiniArea,
  MiniBar,
  MiniProgress,
  Field,
  Bar,
  Pie,
  TimelineChart,
} = Charts
const {TabPane} = Tabs
const {RangePicker} = DatePicker

const rankingListData = []
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234,
  })
}

const chartData = {
  'visitData': [
    {'x': '2018-05-28', 'y': 7},
    {'x': '2018-05-29', 'y': 5},
    {'x': '2018-05-30', 'y': 4},
    {'x': '2018-05-31', 'y': 2},
    {'x': '2018-06-01', 'y': 4},
    {'x': '2018-06-02', 'y': 7},
    {'x': '2018-06-03', 'y': 5},
    {'x': '2018-06-04', 'y': 6},
    {'x': '2018-06-05', 'y': 5},
    {'x': '2018-06-06', 'y': 9},
    {'x': '2018-06-07', 'y': 6},
    {'x': '2018-06-08', 'y': 3},
    {'x': '2018-06-09', 'y': 1},
    {'x': '2018-06-10', 'y': 5},
    {'x': '2018-06-11', 'y': 3},
    {'x': '2018-06-12', 'y': 6},
    {'x': '2018-06-13', 'y': 5}],
  'visitData2': [
    {'x': '2018-05-28', 'y': 1},
    {'x': '2018-05-29', 'y': 6},
    {'x': '2018-05-30', 'y': 4},
    {'x': '2018-05-31', 'y': 8},
    {'x': '2018-06-01', 'y': 3},
    {'x': '2018-06-02', 'y': 7},
    {'x': '2018-06-03', 'y': 2}],
  'salesData': [
    {'x': '1月', 'y': 893},
    {'x': '2月', 'y': 585},
    {'x': '3月', 'y': 245},
    {'x': '4月', 'y': 370},
    {'x': '5月', 'y': 944},
    {'x': '6月', 'y': 833},
    {'x': '7月', 'y': 692},
    {'x': '8月', 'y': 597},
    {'x': '9月', 'y': 1101},
    {'x': '10月', 'y': 442},
    {'x': '11月', 'y': 259},
    {'x': '12月', 'y': 448}],
  'searchData': [
    {
      'index': 1,
      'keyword': '搜索关键词-0',
      'count': 807,
      'range': 19,
      'status': 0,
    },
    {'index': 2, 'keyword': '搜索关键词-1', 'count': 297, 'range': 70, 'status': 0},
    {'index': 3, 'keyword': '搜索关键词-2', 'count': 633, 'range': 95, 'status': 1},
    {'index': 4, 'keyword': '搜索关键词-3', 'count': 993, 'range': 58, 'status': 0},
    {'index': 5, 'keyword': '搜索关键词-4', 'count': 221, 'range': 85, 'status': 0},
    {'index': 6, 'keyword': '搜索关键词-5', 'count': 157, 'range': 41, 'status': 1},
    {'index': 7, 'keyword': '搜索关键词-6', 'count': 712, 'range': 40, 'status': 1},
    {'index': 8, 'keyword': '搜索关键词-7', 'count': 633, 'range': 3, 'status': 0},
    {'index': 9, 'keyword': '搜索关键词-8', 'count': 382, 'range': 92, 'status': 0},
    {'index': 10, 'keyword': '搜索关键词-9', 'count': 721, 'range': 87, 'status': 1},
    {
      'index': 11,
      'keyword': '搜索关键词-10',
      'count': 340,
      'range': 16,
      'status': 0,
    },
    {
      'index': 12,
      'keyword': '搜索关键词-11',
      'count': 669,
      'range': 29,
      'status': 0,
    },
    {
      'index': 13,
      'keyword': '搜索关键词-12',
      'count': 851,
      'range': 56,
      'status': 1,
    },
    {
      'index': 14,
      'keyword': '搜索关键词-13',
      'count': 823,
      'range': 93,
      'status': 0,
    },
    {
      'index': 15,
      'keyword': '搜索关键词-14',
      'count': 717,
      'range': 72,
      'status': 1,
    },
    {
      'index': 16,
      'keyword': '搜索关键词-15',
      'count': 114,
      'range': 51,
      'status': 1,
    },
    {'index': 17, 'keyword': '搜索关键词-16', 'count': 251, 'range': 3, 'status': 0},
    {
      'index': 18,
      'keyword': '搜索关键词-17',
      'count': 677,
      'range': 20,
      'status': 1,
    },
    {
      'index': 19,
      'keyword': '搜索关键词-18',
      'count': 302,
      'range': 39,
      'status': 1,
    },
    {
      'index': 20,
      'keyword': '搜索关键词-19',
      'count': 151,
      'range': 12,
      'status': 1,
    },
    {
      'index': 21,
      'keyword': '搜索关键词-20',
      'count': 363,
      'range': 46,
      'status': 0,
    },
    {
      'index': 22,
      'keyword': '搜索关键词-21',
      'count': 803,
      'range': 14,
      'status': 1,
    },
    {
      'index': 23,
      'keyword': '搜索关键词-22',
      'count': 934,
      'range': 44,
      'status': 0,
    },
    {
      'index': 24,
      'keyword': '搜索关键词-23',
      'count': 688,
      'range': 90,
      'status': 0,
    },
    {
      'index': 25,
      'keyword': '搜索关键词-24',
      'count': 915,
      'range': 42,
      'status': 1,
    },
    {'index': 26, 'keyword': '搜索关键词-25', 'count': 23, 'range': 59, 'status': 0},
    {
      'index': 27,
      'keyword': '搜索关键词-26',
      'count': 115,
      'range': 51,
      'status': 1,
    },
    {
      'index': 28,
      'keyword': '搜索关键词-27',
      'count': 532,
      'range': 14,
      'status': 1,
    },
    {
      'index': 29,
      'keyword': '搜索关键词-28',
      'count': 668,
      'range': 47,
      'status': 0,
    },
    {
      'index': 30,
      'keyword': '搜索关键词-29',
      'count': 366,
      'range': 65,
      'status': 0,
    },
    {
      'index': 31,
      'keyword': '搜索关键词-30',
      'count': 123,
      'range': 44,
      'status': 0,
    },
    {
      'index': 32,
      'keyword': '搜索关键词-31',
      'count': 175,
      'range': 83,
      'status': 1,
    },
    {
      'index': 33,
      'keyword': '搜索关键词-32',
      'count': 892,
      'range': 60,
      'status': 1,
    },
    {
      'index': 34,
      'keyword': '搜索关键词-33',
      'count': 874,
      'range': 74,
      'status': 0,
    },
    {
      'index': 35,
      'keyword': '搜索关键词-34',
      'count': 531,
      'range': 91,
      'status': 1,
    },
    {
      'index': 36,
      'keyword': '搜索关键词-35',
      'count': 304,
      'range': 20,
      'status': 0,
    },
    {
      'index': 37,
      'keyword': '搜索关键词-36',
      'count': 929,
      'range': 12,
      'status': 1,
    },
    {
      'index': 38,
      'keyword': '搜索关键词-37',
      'count': 359,
      'range': 46,
      'status': 1,
    },
    {
      'index': 39,
      'keyword': '搜索关键词-38',
      'count': 585,
      'range': 16,
      'status': 1,
    },
    {'index': 40, 'keyword': '搜索关键词-39', 'count': 60, 'range': 60, 'status': 0},
    {
      'index': 41,
      'keyword': '搜索关键词-40',
      'count': 814,
      'range': 72,
      'status': 1,
    },
    {
      'index': 42,
      'keyword': '搜索关键词-41',
      'count': 951,
      'range': 89,
      'status': 1,
    },
    {
      'index': 43,
      'keyword': '搜索关键词-42',
      'count': 397,
      'range': 50,
      'status': 0,
    },
    {
      'index': 44,
      'keyword': '搜索关键词-43',
      'count': 286,
      'range': 21,
      'status': 1,
    },
    {
      'index': 45,
      'keyword': '搜索关键词-44',
      'count': 179,
      'range': 94,
      'status': 1,
    },
    {
      'index': 46,
      'keyword': '搜索关键词-45',
      'count': 175,
      'range': 94,
      'status': 1,
    },
    {
      'index': 47,
      'keyword': '搜索关键词-46',
      'count': 883,
      'range': 27,
      'status': 1,
    },
    {'index': 48, 'keyword': '搜索关键词-47', 'count': 681, 'range': 7, 'status': 0},
    {
      'index': 49,
      'keyword': '搜索关键词-48',
      'count': 949,
      'range': 73,
      'status': 0,
    },
    {
      'index': 50,
      'keyword': '搜索关键词-49',
      'count': 106,
      'range': 44,
      'status': 1,
    }],
  'offlineData': [
    {'name': '门店0', 'cvr': 0.1},
    {'name': '门店1', 'cvr': 0.4},
    {'name': '门店2', 'cvr': 0.4},
    {'name': '门店3', 'cvr': 0.9},
    {'name': '门店4', 'cvr': 0.3},
    {'name': '门店5', 'cvr': 0.1},
    {'name': '门店6', 'cvr': 0.7},
    {'name': '门店7', 'cvr': 0.5},
    {'name': '门店8', 'cvr': 0.9},
    {'name': '门店9', 'cvr': 0.7}],
  'offlineChartData': [
    {'x': 1527470179174, 'y1': 33, 'y2': 60},
    {'x': 1527471979174, 'y1': 88, 'y2': 88},
    {'x': 1527473779174, 'y1': 91, 'y2': 38},
    {'x': 1527475579174, 'y1': 102, 'y2': 12},
    {'x': 1527477379174, 'y1': 66, 'y2': 93},
    {'x': 1527479179174, 'y1': 90, 'y2': 93},
    {'x': 1527480979174, 'y1': 100, 'y2': 30},
    {'x': 1527482779174, 'y1': 81, 'y2': 37},
    {'x': 1527484579174, 'y1': 71, 'y2': 53},
    {'x': 1527486379174, 'y1': 83, 'y2': 32},
    {'x': 1527488179174, 'y1': 60, 'y2': 64},
    {'x': 1527489979174, 'y1': 61, 'y2': 34},
    {'x': 1527491779174, 'y1': 50, 'y2': 57},
    {'x': 1527493579174, 'y1': 65, 'y2': 47},
    {'x': 1527495379174, 'y1': 19, 'y2': 83},
    {'x': 1527497179174, 'y1': 20, 'y2': 65},
    {'x': 1527498979174, 'y1': 42, 'y2': 69},
    {'x': 1527500779174, 'y1': 81, 'y2': 43},
    {'x': 1527502579174, 'y1': 15, 'y2': 39},
    {'x': 1527504379174, 'y1': 29, 'y2': 51}],
  'salesTypeData': [
    {'x': '家用电器', 'y': 4544},
    {'x': '食用酒水', 'y': 3321},
    {'x': '个护健康', 'y': 3113},
    {'x': '服饰箱包', 'y': 2341},
    {'x': '母婴产品', 'y': 1231},
    {'x': '其他', 'y': 1231}],
  'salesTypeDataOnline': [
    {'x': '家用电器', 'y': 244},
    {'x': '食用酒水', 'y': 321},
    {'x': '个护健康', 'y': 311},
    {'x': '服饰箱包', 'y': 41},
    {'x': '母婴产品', 'y': 121},
    {'x': '其他', 'y': 111}],
  'salesTypeDataOffline': [
    {'x': '家用电器', 'y': 99},
    {'x': '个护健康', 'y': 188},
    {'x': '服饰箱包', 'y': 344},
    {'x': '母婴产品', 'y': 255},
    {'x': '其他', 'y': 65}],
  'radarData': [
    {'name': '个人', 'label': '引用', 'value': 10},
    {'name': '个人', 'label': '口碑', 'value': 8},
    {'name': '个人', 'label': '产量', 'value': 4},
    {'name': '个人', 'label': '贡献', 'value': 5},
    {'name': '个人', 'label': '热度', 'value': 7},
    {'name': '团队', 'label': '引用', 'value': 3},
    {'name': '团队', 'label': '口碑', 'value': 9},
    {'name': '团队', 'label': '产量', 'value': 6},
    {'name': '团队', 'label': '贡献', 'value': 3},
    {'name': '团队', 'label': '热度', 'value': 1},
    {'name': '部门', 'label': '引用', 'value': 4},
    {'name': '部门', 'label': '口碑', 'value': 1},
    {'name': '部门', 'label': '产量', 'value': 6},
    {'name': '部门', 'label': '贡献', 'value': 5},
    {'name': '部门', 'label': '热度', 'value': 7}],
}

const Yuan = ({children}) => (
  <span dangerouslySetInnerHTML={{__html: yuan(children)}}/>
)

class Analysis extends Component {
  constructor (props) {
    super(props)
    this.state = {
      salesType: 'all',
      currentTabKey: '',
      rangePickerValue: getTimeDistance('year'),
      chart: chartData,
      loading: false,
    }
  }

  componentDidMount () {
    this.setState({
      loading: true,
    })
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 500)
  }

  //tab选择日期
  selectDate = (type) => {
    this.setState({
      rangePickerValue: getTimeDistance(type),
    })
  }

  //tab右侧日期激活
  isActive = (type) => {
    let {rangePickerValue} = this.state
    let value = getTimeDistance(type)
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return
    }
    if (rangePickerValue[0].isSame(value[0], 'day') &&
      rangePickerValue[1].isSame(value[1], 'day')) {
      return styles.currentDate
    }
  }

  //tab右侧日期选择
  handleRangePickerChange = (rangePickerValue) => {
    console.log(rangePickerValue)
    this.setState({
      rangePickerValue,
    })
  }

  //
  handleChangeSalesType = (e) => {
    this.setState({
      salesType: e.target.value,
    })
  }

  //
  handleTabChange = (key) => {
    this.setState({
      currentTabKey: key,
    })
  }

  render () {
    let {salesType, currentTabKey, rangePickerValue, chart, loading} = this.state
    let {
      visitData,
      visitData2,
      salesData,
      searchData,
      offlineData,
      offlineChartData,
      salesTypeData,
      salesTypeDataOnline,
      salesTypeDataOffline,
    } = chart

    const topColResponsiveProps = {
      xs: 24,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 6,
      style: {marginBottom: 24},
    }

    const salesExtra = (
      <div className={styles.salesExtraWrap}>
        <div className={styles.salesExtra}>
          <span className={classNames(this.isActive('today'), 'link-button')}
                onClick={() => this.selectDate('today')}>
            今日
          </span>
          <span className={classNames(this.isActive('week'), 'link-button')}
                onClick={() => this.selectDate('week')}>
            本周
          </span>
          <span className={classNames(this.isActive('month'), 'link-button')}
                onClick={() => this.selectDate('month')}>
            本月
          </span>
          <span className={classNames(this.isActive('year'), 'link-button')}
                onClick={() => this.selectDate('year')}>
            全年
          </span>
        </div>
        <RangePicker
          value={rangePickerValue}
          onChange={this.handleRangePickerChange}
          style={{width: 256}}
        />
      </div>
    )

    const menu = (
      <Menu>
        <Menu.Item>操作一</Menu.Item>
        <Menu.Item>操作二</Menu.Item>
      </Menu>
    )

    const iconGroup = (
      <span className={styles.iconGroup}>
        <Dropdown overlay={menu} placement="bottomRight">
          <Icon type="ellipsis"/>
        </Dropdown>
      </span>
    )

    const columns = [
      {
        title: '排名',
        dataIndex: 'index',
        key: 'index',
      },
      {
        title: '搜索关键词',
        dataIndex: 'keyword',
        key: 'keyword',
        render: text => <a href="/">{text}</a>,
      },
      {
        title: '用户数',
        dataIndex: 'count',
        key: 'count',
        sorter: (a, b) => a.count - b.count,
        className: styles.alignRight,
      },
      {
        title: '周涨幅',
        dataIndex: 'range',
        key: 'range',
        sorter: (a, b) => a.range - b.range,
        render: (text, record) => (
          <Trend flag={record.status === 1 ? 'down' : 'up'}>
            <span style={{marginRight: 4}}>{text}%</span>
          </Trend>
        ),
        align: 'right',
      },
    ]

    const salesPieData =
      salesType === 'all'
        ? salesTypeData
        : salesType === 'online' ? salesTypeDataOnline : salesTypeDataOffline

    const activeKey = currentTabKey || (offlineData[0] && offlineData[0].name)

    const CustomTab = ({data, currentTabKey: currentKey}) => (
      <Row gutter={8} style={{width: 138, margin: '8px 0'}}>
        <Col span={12}>
          <NumberInfo
            title={data.name}
            subTitle="转化率"
            gap={2}
            total={`${data.cvr * 100}%`}
            theme={currentKey !== data.name && 'light'}
          />
        </Col>
        <Col span={12} style={{paddingTop: 36}}>
          <Pie
            animate={false}
            color={currentKey !== data.name && '#BDE4FF'}
            inner={0.55}
            tooltip={false}
            margin={[0, 0, 0, 0]}
            percent={data.cvr * 100}
            height={64}
          />
        </Col>
      </Row>
    )

    return (
      <Fragment>
        {/*first*/}
        <Row gutter={24}>
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="总销售额"
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o"/>
                </Tooltip>
              }
              total={() => <Yuan>126560</Yuan>}
              footer={
                <Field
                  label="日均销售额"
                  value={`￥${numeral(12423).format('0,0')}`}
                />
              }
              contentHeight={46}
            >
              <Trend flag="up" style={{marginRight: 16}}>
                周同比<span className={styles.trendText}>12%</span>
              </Trend>
              <Trend flag="down">
                日环比<span className={styles.trendText}>11%</span>
              </Trend>
            </ChartCard>
          </Col>
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="访问量"
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o"/>
                </Tooltip>
              }
              total={numeral(8846).format('0,0')}
              footer={
                <Field
                  label="日访问量"
                  value={`￥${numeral(12334).format('0,0')}`}
                />
              }
              contentHeight={46}
            >
              <MiniArea color="#975fe4" data={visitData}/>
            </ChartCard>
          </Col>
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="支付笔数"
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o"/>
                </Tooltip>
              }
              total={numeral(6560).format('0,0')}
              footer={<Field label="转化率" value="60%"></Field>}
              contentHeight={46}
            >
              <MiniBar data={visitData}/>
            </ChartCard>
          </Col>
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="运营活动效果"
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o"/>
                </Tooltip>
              }
              total="78%"
              footer={
                <div style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>
                  <Trend flag="up" style={{marginRight: 16}}>
                    周同比<span className={styles.trendText}>12%</span>
                  </Trend>
                  <Trend flag="down">
                    日环比<span className={styles.trendText}>11%</span>
                  </Trend>
                </div>
              }
              contentHeight={46}
            >
              <MiniProgress percent={78} strokeWidth={8} target={80}
                            color="#13C2C2"/>
            </ChartCard>
          </Col>
        </Row>
        {/*second*/}
        <Card loading={loading} bordered={false}
              bodyStyle={{padding: 0}}>
          <div className={styles.salesCard}>
            <Tabs tabBarExtraContent={salesExtra} size="large"
                  tabBarStyle={{marginBottom: 24}}>
              <TabPane tab="销售额" key="sales">
                <Row>
                  <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                    <div className={styles.salesBar}>
                      <Bar height={295} title="销售额趋势" data={salesData}/>
                    </div>
                  </Col>
                  <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                    <div className={styles.salesRank}>
                      <h4 className={styles.rankingTitle}>门店销售额排名</h4>
                      <ul className={styles.rankingList}>
                        {
                          rankingListData.map((item, i) => (
                            <li key={item.title}>
                              <span className={i < 3 ? styles.active : ''}>{i +
                              1}</span>
                              <span>{item.title}</span>
                              <span>{numeral(item.total).format('0,0')}</span>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="访问量" key="views">
                <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                  <div className={styles.salesBar}>
                    <Bar height={295} title="访问量趋势" data={salesData}/>
                  </div>
                </Col>
                <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                  <div className={styles.salesRank}>
                    <h4 className={styles.rankingTitle}>门店访问量排名</h4>
                    <ul className={styles.rankingList}>
                      {
                        rankingListData.map((item, i) => (
                          <li key={item.title}>
                              <span className={i < 3 ? styles.active : ''}>{i +
                              1}</span>
                            <span>{item.title}</span>
                            <span>{numeral(item.total).format('0,0')}</span>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </Col>
              </TabPane>
            </Tabs>
          </div>
        </Card>
        {/*third*/}
        <Row gutter={24}>
          <Col xl={12} lg={24} sm={24} xs={24}>
            <Card
              loading={loading}
              bordered={false}
              title="线上热门搜索"
              extra={iconGroup}
              style={{marginTop: 24}}
            >
              <Row gutter={68}>
                <Col sm={12} xs={24} style={{marginBottom: 24}}>
                  <NumberInfo
                    subTitle={
                      <span>
                        搜索用户数
                        <Tooltip title="指标文案">
                          <Icon style={{marginLeft: 8}} type="info-circle-o"/>
                        </Tooltip>
                      </span>
                    }
                    gap={8}
                    total={numeral(12321).format('0,0')}
                    status="up"
                    subTotal={17.1}
                  />
                  <MiniArea line height={45} data={visitData2}/>
                </Col>
                <Col sm={12} xs={24} style={{marginBottom: 24}}>
                  <NumberInfo
                    subTitle="人均搜索次数"
                    gap={8}
                    total={2.7}
                    status="down"
                    subTotal={26.2}
                  />
                  <MiniArea line height={45} data={visitData2}/>
                </Col>
              </Row>
              <Table
                rowKey={record => record.index}
                size="small"
                columns={columns}
                dataSource={searchData}
                pagination={{
                  style: {marginBottom: 0},
                  pageSize: 5,
                }}
              />
            </Card>
          </Col>
          <Col xl={12} lg={24} sm={24} xs={24}>
            <Card
              loading={loading}
              className={styles.salesCard}
              bordered={false}
              title="销售额类别占比"
              extra={
                <div className={styles.salesCardExtra}>
                  {iconGroup}
                  <div className={styles.salesTypeRadio}>
                    <Radio.Group value={salesType}
                                 onChange={this.handleChangeSalesType}>
                      <Radio.Button value="all">全部渠道</Radio.Button>
                      <Radio.Button value="online">线上</Radio.Button>
                      <Radio.Button value="offline">门店</Radio.Button>
                    </Radio.Group>
                  </div>
                </div>
              }
              style={{marginTop: 24, minHeight: 509}}
            >
              <h4 style={{marginTop: 8, marginBottom: 32}}>销售额</h4>
              <Pie
                hasLegend
                subTitle="销售额"
                total={
                  () => <Yuan>{salesPieData.reduce((pre, now) => now.y + pre,
                    0)}</Yuan>
                }
                data={salesPieData}
                valueFormat={value => <Yuan>{value}</Yuan>}
                height={248}
                lineWidth={4}
              />
            </Card>
          </Col>
        </Row>
        {/*fourth*/}
        <Card
          loading={loading}
          className={styles.offlineCard}
          bordered={false}
          bodyStyle={{padding: '0 0 32px 0'}}
          style={{marginTop: 32}}
        >
          <Tabs activeKey={activeKey} onChange={this.handleTabChange}>
            {
              offlineData.map(shop => (
                <TabPane
                  tab={<CustomTab data={shop} currentTabKey={activeKey}/>}
                  key={shop.name}>
                  <div style={{padding: '0 24px'}}>
                    <TimelineChart
                      height={400}
                      data={offlineChartData}
                      titleMap={{y1: '客流量', y2: '支付笔数'}}
                    />
                  </div>
                </TabPane>
              ))
            }
          </Tabs>
        </Card>
      </Fragment>
    )
  }
}

export default Analysis
