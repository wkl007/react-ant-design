import React, { Component, Fragment } from 'react'
import Debounce from 'lodash-decorators/debounce'
import Bind from 'lodash-decorators/bind'
import classNames from 'classnames'
import {
  Button,
  Menu,
  Dropdown,
  Icon,
  Row,
  Col,
  Steps,
  Card,
  Popover,
  Badge,
  Table,
  Tooltip,
  Divider,
} from 'antd'
import { DescriptionList } from 'ant-design-pro'
import PageHeaderWrapper from '../../components/PageHeaderWrapper'

import styles from './AdvancedProfile.less'

const {Step} = Steps
const {Description} = DescriptionList
const ButtonGroup = Button.Group
const getWindowWidth = () => window.innerWidth ||
  document.documentElement.clientWidth

const menu = (
  <Menu>
    <Menu.Item key="1">选项一</Menu.Item>
    <Menu.Item key="2">选项二</Menu.Item>
    <Menu.Item key="3">选项三</Menu.Item>
  </Menu>
)

const action = (
  <Fragment>
    <ButtonGroup>
      <Button>操作</Button>
      <Button>操作</Button>
      <Dropdown overlay={menu} placement="bottomRight">
        <Button>
          <Icon type="ellipsis"/>
        </Button>
      </Dropdown>
    </ButtonGroup>
    <Button type="primary">主操作</Button>
  </Fragment>
)

const extra = (
  <Row>
    <Col xs={24} sm={12}>
      <div className={styles.textSecondary}>状态</div>
      <div className={styles.heading}>待审批</div>
    </Col>
    <Col xs={24} sm={12}>
      <div className={styles.textSecondary}>订单金额</div>
      <div className={styles.heading}>¥ 568.08</div>
    </Col>
  </Row>
)

const description = (
  <DescriptionList className={styles.headerList} size="small" col="2">
    <Description term="创建人">曲丽丽</Description>
    <Description term="订购产品">XX 服务</Description>
    <Description term="创建时间">2017-07-07</Description>
    <Description term="关联单据">
      <span className='link-button'>12421</span>
    </Description>
    <Description term="生效日期">2017-07-07 ~ 2017-08-08</Description>
    <Description term="备注">请于两个工作日内确认</Description>
  </DescriptionList>
)

const tabList = [
  {
    key: 'detail',
    tab: '详情',
  },
  {
    key: 'rule',
    tab: '规则',
  },
]

const desc1 = (
  <div className={classNames(styles.textSecondary, styles.stepDescription)}>
    <Fragment>
      曲丽丽
      <Icon type="dingding-o" style={{marginLeft: 8}}/>
    </Fragment>
    <div>2016-12-12 12:32</div>
  </div>
)

const desc2 = (
  <div className={styles.stepDescription}>
    <Fragment>
      周毛毛
      <Icon type="dingding-o" style={{color: '#00A0E9', marginLeft: 8}}/>
    </Fragment>
    <div>
      <span className='link-button'>催一下</span>
    </div>
  </div>
)

const popoverContent = (
  <div style={{width: 160}}>
    吴加号
    <span className={styles.textSecondary} style={{float: 'right'}}>
      <Badge status="default"
             text={<span style={{color: 'rgba(0, 0, 0, 0.45)'}}>未响应</span>}/>
    </span>
    <div className={styles.textSecondary} style={{marginTop: 4}}>
      耗时：2小时25分钟
    </div>
  </div>
)

const customDot = (dot, {status}) =>
  status === 'process' ? (
    <Popover placement="topLeft" arrowPointAtCenter content={popoverContent}>
      {dot}
    </Popover>
  ) : (
    dot
  )

const operationTabList = [
  {
    key: 'tab1',
    tab: '操作日志一',
  },
  {
    key: 'tab2',
    tab: '操作日志二',
  },
  {
    key: 'tab3',
    tab: '操作日志三',
  },
]

const columns = [
  {
    title: '操作类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '操作人',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '执行结果',
    dataIndex: 'status',
    key: 'status',
    render: text =>
      text === 'agree' ? (
        <Badge status="success" text="成功"/>
      ) : (
        <Badge status="error" text="驳回"/>
      ),
  },
  {
    title: '操作时间',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
  },
  {
    title: '备注',
    dataIndex: 'memo',
    key: 'memo',
  },
]

const profileData = {
  'basicGoods': [],
  'advancedOperation1': [
    {
      'key': 'op1',
      'type': '订购关系生效',
      'name': '曲丽丽',
      'status': 'agree',
      'updatedAt': '2017-10-03  19:23:12',
      'memo': '-',
    },
    {
      'key': 'op2',
      'type': '财务复审',
      'name': '付小小',
      'status': 'reject',
      'updatedAt': '2017-10-03  19:23:12',
      'memo': '不通过原因',
    },
    {
      'key': 'op3',
      'type': '部门初审',
      'name': '周毛毛',
      'status': 'agree',
      'updatedAt': '2017-10-03  19:23:12',
      'memo': '-',
    },
    {
      'key': 'op4',
      'type': '提交订单',
      'name': '林东东',
      'status': 'agree',
      'updatedAt': '2017-10-03  19:23:12',
      'memo': '很棒',
    },
    {
      'key': 'op5',
      'type': '创建订单',
      'name': '汗牙牙',
      'status': 'agree',
      'updatedAt': '2017-10-03  19:23:12',
      'memo': '-',
    }],
  'advancedOperation2': [
    {
      'key': 'op1',
      'type': '订购关系生效',
      'name': '曲丽丽',
      'status': 'agree',
      'updatedAt': '2017-10-03  19:23:12',
      'memo': '-',
    }],
  'advancedOperation3': [
    {
      'key': 'op1',
      'type': '创建订单',
      'name': '汗牙牙',
      'status': 'agree',
      'updatedAt': '2017-10-03  19:23:12',
      'memo': '-',
    }],
}

class AdvancedProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      operationkey: 'tab1',
      stepDirection: 'horizontal',
    }
  }

  componentDidMount () {
    this.setStepDirection()
    window.addEventListener('resize', this.setStepDirection)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.setStepDirection)
    this.setStepDirection.cancel()
  }

  //bind绑定this debounce延迟调用
  @Bind()
  @Debounce(200)
  setStepDirection () {
    const {stepDirection} = this.state
    const w = getWindowWidth()
    if (stepDirection !== 'vertical' && w <= 576) {
      this.setState({
        stepDirection: 'vertical',
      })
    } else if (stepDirection !== 'horizontal' && w > 576) {
      this.setState({
        stepDirection: 'horizontal',
      })
    }
  }

  onOperationTabChange = key => {
    this.setState({operationkey: key})
  }

  render () {
    const {stepDirection, loading} = this.state
    const {advancedOperation1, advancedOperation2, advancedOperation3} = profileData
    const contentList = {
      tab1: (
        <Table
          pagination={false}
          loading={loading}
          dataSource={advancedOperation1}
          columns={columns}
        />
      ),
      tab2: (
        <Table
          pagination={false}
          loading={loading}
          dataSource={advancedOperation2}
          columns={columns}
        />
      ),
      tab3: (
        <Table
          pagination={false}
          loading={loading}
          dataSource={advancedOperation3}
          columns={columns}
        />
      ),
    }

    return (
      <PageHeaderWrapper
        title="单号：234231029431"
        logo={
          <img alt=""
               src="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png"/>
        }
        action={action}
        content={description}
        extraContent={extra}
        tabList={tabList}
        tabActiveKey='detail'
      >
        <Card title="流程进度" style={{marginBottom: 24}} bordered={false}>
          <Steps direction={stepDirection} progressDot={customDot} current={1}>
            <Step title="创建项目" description={desc1}/>
            <Step title="部门初审" description={desc2}/>
            <Step title="财务复核"/>
            <Step title="完成"/>
          </Steps>
        </Card>
        <Card title="用户信息" style={{marginBottom: 24}} bordered={false}>
          <DescriptionList style={{marginBottom: 24}}>
            <Description term="用户姓名">付小小</Description>
            <Description term="会员卡号">32943898021309809423</Description>
            <Description term="身份证">3321944288191034921</Description>
            <Description term="联系方式">18112345678</Description>
            <Description term="联系地址">
              曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口
            </Description>
          </DescriptionList>
          <DescriptionList style={{marginBottom: 24}} title="信息组">
            <Description term="某某数据">725</Description>
            <Description term="该数据更新时间">2017-08-08</Description>
            <Description>&nbsp;</Description>
            <Description
              term={
                <span>
                  某某数据
                  <Tooltip title="数据说明">
                    <Icon
                      style={{color: 'rgba(0, 0, 0, 0.43)', marginLeft: 4}}
                      type="info-circle-o"
                    />
                  </Tooltip>
                </span>
              }
            >
              725
            </Description>
            <Description term="该数据更新时间">2017-08-08</Description>
          </DescriptionList>
          <h4 style={{marginBottom: 16}}>信息组</h4>
          <Card type="inner" title="多层级信息组">
            <DescriptionList size="small" style={{marginBottom: 16}}
                             title="组名称">
              <Description term="负责人">林东东</Description>
              <Description term="角色码">1234567</Description>
              <Description term="所属部门">XX公司 - YY部</Description>
              <Description term="过期时间">2017-08-08</Description>
              <Description term="描述">
                这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...
              </Description>
            </DescriptionList>
            <Divider style={{margin: '16px 0'}}/>
            <DescriptionList size="small" style={{marginBottom: 16}} title="组名称"
                             col="1">
              <Description term="学名">
                Citrullus lanatus (Thunb.) Matsum. et
                Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗..
              </Description>
            </DescriptionList>
            <Divider style={{margin: '16px 0'}}/>
            <DescriptionList size="small" title="组名称">
              <Description term="负责人">付小小</Description>
              <Description term="角色码">1234568</Description>
            </DescriptionList>
          </Card>
        </Card>
        <Card title="用户近半年来电记录" style={{marginBottom: 24}} bordered={false}>
          <div className={styles.noData}>
            <Icon type="frown-o"/>暂无数据
          </div>
        </Card>
        <Card
          className={styles.tabsCard}
          bordered={false}
          tabList={operationTabList}
          onTabChange={this.onOperationTabChange}
        >
          {contentList[this.state.operationkey]}
        </Card>
      </PageHeaderWrapper>
    )
  }
}

export default AdvancedProfile
