import React, { FC, Component, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import classNames from 'classnames'
import { Avatar, Card, Col, List, Row } from 'antd'
import { Charts } from 'ant-design-pro'
import PageHeaderWrapper from '@/components/PageHeader'
import EditableLinkGroup from '@/components/EditableLinkGroup'
import styles from './index.less'

const Radar: any = Charts.Radar

const links = [
  {
    title: '操作一',
    href: ''
  },
  {
    title: '操作二',
    href: ''
  },
  {
    title: '操作三',
    href: ''
  },
  {
    title: '操作四',
    href: ''
  },
  {
    title: '操作五',
    href: ''
  },
  {
    title: '操作六',
    href: ''
  }
]

const members = [
  {
    id: 'members-1',
    title: '科学搬砖组',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    link: ''
  },
  {
    id: 'members-2',
    title: '程序员日常',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
    link: ''
  },
  {
    id: 'members-3',
    title: '设计天团',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
    link: ''
  },
  {
    id: 'members-4',
    title: '中二少女团',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
    link: ''
  },
  {
    id: 'members-5',
    title: '骗你学计算机',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
    link: ''
  }
]

const activities = [
  {
    'id': 'trend-1',
    'updatedAt': '2018-05-29T04:11:09.475Z',
    'user': {
      'name': '曲丽丽',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
    },
    'group': { 'name': '高逼格设计天团', 'link': 'http://github.com/' },
    'project': { 'name': '六月迭代', 'link': 'http://github.com/' },
    'template': '在 @{group} 新建项目 @{project}'
  },
  {
    'id': 'trend-2',
    'updatedAt': '2018-05-29T04:11:09.475Z',
    'user': {
      'name': '付小小',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png'
    },
    'group': { 'name': '高逼格设计天团', 'link': 'http://github.com/' },
    'project': { 'name': '六月迭代', 'link': 'http://github.com/' },
    'template': '在 @{group} 新建项目 @{project}'
  },
  {
    'id': 'trend-3',
    'updatedAt': '2018-05-29T04:11:09.475Z',
    'user': {
      'name': '林东东',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png'
    },
    'group': { 'name': '中二少女团', 'link': 'http://github.com/' },
    'project': { 'name': '六月迭代', 'link': 'http://github.com/' },
    'template': '在 @{group} 新建项目 @{project}'
  },
  {
    'id': 'trend-4',
    'updatedAt': '2018-05-29T04:11:09.475Z',
    'user': {
      'name': '周星星',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png'
    },
    'project': { 'name': '5 月日常迭代', 'link': 'http://github.com/' },
    'template': '将 @{project} 更新至已发布状态'
  },
  {
    'id': 'trend-5',
    'updatedAt': '2018-05-29T04:11:09.475Z',
    'user': {
      'name': '朱偏右',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png'
    },
    'project': { 'name': '工程效能', 'link': 'http://github.com/' },
    'comment': { 'name': '留言', 'link': 'http://github.com/' },
    'template': '在 @{project} 发布了 @{comment}'
  },
  {
    'id': 'trend-6',
    'updatedAt': '2018-05-29T04:11:09.475Z',
    'user': {
      'name': '乐哥',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png'
    },
    'group': { 'name': '程序员日常', 'link': 'http://github.com/' },
    'project': { 'name': '品牌迭代', 'link': 'http://github.com/' },
    'template': '在 @{group} 新建项目 @{project}'
  }]

const notice = [
  {
    'id': 'xxx1',
    'title': 'Alipay',
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    'description': '那是一种内在的东西，他们到达不了，也无法触及的',
    'updatedAt': '2018-05-29T04:11:09.475Z',
    'member': '科学搬砖组',
    'href': '',
    'memberLink': ''
  },
  {
    'id': 'xxx2',
    'title': 'Angular',
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    'description': '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    'updatedAt': '2017-07-24T00:00:00.000Z',
    'member': '全组都是吴彦祖',
    'href': '',
    'memberLink': ''
  },
  {
    'id': 'xxx3',
    'title': 'Ant Design',
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    'description': '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    'updatedAt': '2018-05-29T04:11:09.475Z',
    'member': '中二少女团',
    'href': '',
    'memberLink': ''
  },
  {
    'id': 'xxx4',
    'title': 'Ant Design Pro',
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    'description': '那时候我只会想自己想要什么，从不想自己拥有什么',
    'updatedAt': '2017-07-23T00:00:00.000Z',
    'member': '程序员日常',
    'href': '',
    'memberLink': ''
  },
  {
    'id': 'xxx5',
    'title': 'Bootstrap',
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    'description': '凛冬将至',
    'updatedAt': '2017-07-23T00:00:00.000Z',
    'member': '高逼格设计天团',
    'href': '',
    'memberLink': ''
  },
  {
    'id': 'xxx6',
    'title': 'React',
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
    'description': '生命就像一盒巧克力，结果往往出人意料',
    'updatedAt': '2017-07-23T00:00:00.000Z',
    'member': '骗你来学计算机',
    'href': '',
    'memberLink': ''
  }]

const radarData = [
  { 'name': '个人', 'label': '引用', 'value': 10 },
  { 'name': '个人', 'label': '口碑', 'value': 8 },
  { 'name': '个人', 'label': '产量', 'value': 4 },
  { 'name': '个人', 'label': '贡献', 'value': 5 },
  { 'name': '个人', 'label': '热度', 'value': 7 },
  { 'name': '团队', 'label': '引用', 'value': 3 },
  { 'name': '团队', 'label': '口碑', 'value': 9 },
  { 'name': '团队', 'label': '产量', 'value': 6 },
  { 'name': '团队', 'label': '贡献', 'value': 3 },
  { 'name': '团队', 'label': '热度', 'value': 1 },
  { 'name': '部门', 'label': '引用', 'value': 4 },
  { 'name': '部门', 'label': '口碑', 'value': 1 },
  { 'name': '部门', 'label': '产量', 'value': 6 },
  { 'name': '部门', 'label': '贡献', 'value': 5 },
  { 'name': '部门', 'label': '热度', 'value': 7 }]

interface WorkplaceProps {}

interface WorkplaceState {
  projectLoading: boolean;
  activitiesLoading: boolean;
  radarDataLoading: boolean;
  currentUserLoading: boolean;
}

class Workplace extends Component<WorkplaceProps, WorkplaceState> {
  state = {
    projectLoading: true,
    activitiesLoading: true,
    radarDataLoading: true,
    currentUserLoading: true
  }

  componentDidMount (): void {
    setTimeout(() => {
      this.setState({
        projectLoading: false,
        activitiesLoading: false,
        radarDataLoading: false,
        currentUserLoading: false
      })
    }, 500)
  }

  renderActivities = () => {
    return activities.map((item: any) => {
      const events = item.template.split(/@\{([^{}]*)\}/gi).map((key: any) => {
        if (item[key]) {
          return (
            <a href={item[key].link} key={item[key].name}>
              {item[key].name}
            </a>
          )
        }
        return key
      })
      return (
        <List.Item key={item.id}>
          <List.Item.Meta
            avatar={<Avatar src={item.user.avatar}/>}
            title={
              <span>
                <span className={classNames(styles.username,
                  'link-button')}>{item.user.name}</span>
                &nbsp;
                <span className={styles.event}>{events}</span>
              </span>
            }
            description={
              <span className={styles.datetime} title={item.updatedAt}>
                {moment(item.updatedAt).fromNow()}
              </span>
            }
          />
        </List.Item>
      )
    })
  }

  render () {
    const { projectLoading, activitiesLoading, radarDataLoading, currentUserLoading } = this.state
    const pageHeaderContent = (
      <div className={styles.pageHeaderContent}>
        <div className={styles.avatar}>
          <Avatar
            size='large'
            src='https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
          />
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>早安，曲丽丽，祝你开心每一天！</div>
          <div>交互专家 | 蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</div>
        </div>
      </div>
    )
    const extraContent = (
      <div className={styles.extraContent}>
        <div className={styles.statItem}>
          <p>项目数</p>
          <p>56</p>
        </div>
        <div className={styles.statItem}>
          <p>团队内排名</p>
          <p>
            8<span> / 24</span>
          </p>
        </div>
        <div className={styles.statItem}>
          <p>项目访问</p>
          <p>2,223</p>
        </div>
      </div>
    )
    return (
      <PageHeaderWrapper
        content={pageHeaderContent}
        extraContent={extraContent}>
        <Row gutter={24}>
          <Col xl={16} lg={24} md={24} sm={24} xs={24}>
            <Card
              className={styles.projectList}
              style={{ marginBottom: 24 }}
              title='进行中的项目'
              bordered={false}
              extra={<Link to='/'>全部项目</Link>}
              loading={projectLoading}
              bodyStyle={{ padding: 0 }}
            >
              {
                notice.map(item => (
                  <Card.Grid className={styles.projectGrid} key={item.id}>
                    <Card bodyStyle={{ padding: 0 }} bordered={false}>
                      <Card.Meta
                        title={
                          <div className={styles.cardTitle}>
                            <Avatar size='small' src={item.logo}/>
                            <Link to={item.href}>{item.title}</Link>
                          </div>
                        }
                        description={item.description}
                      />
                      <div className={styles.projectItemContent}>
                        <Link to={item.memberLink}>{item.member || ''}</Link>
                        {
                          item.updatedAt && (
                            <span
                              className={styles.datetime}
                              title={item.updatedAt}
                            >
                                {moment(item.updatedAt).fromNow()}
                              </span>
                          )
                        }
                      </div>
                    </Card>
                  </Card.Grid>
                ))
              }
            </Card>
            <Card
              bodyStyle={{ padding: 0 }}
              bordered={false}
              className={styles.activeCard}
              title='动态'
              loading={activitiesLoading}
            >
              <List loading={activitiesLoading} size='large'>
                <div className={styles.activitiesList}>
                  {this.renderActivities()}
                </div>
              </List>
            </Card>
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            <Card
              style={{ marginBottom: 24 }}
              title='快速开始 / 便捷导航'
              bordered={false}
              bodyStyle={{ padding: 0 }}
            >
              <EditableLinkGroup
                links={links}
                linkElement={Link}
              />
            </Card>
            <Card
              style={{ marginBottom: 24 }}
              title='XX 指数'
              bordered={false}
              loading={radarDataLoading}
            >
              <div className={styles.chart}>
                <Radar hasLegend height={343} data={radarData}/>
              </div>
            </Card>
            <Card
              style={{ marginBottom: 24 }}
              title='团队'
              bordered={false}
              bodyStyle={{ paddingTop: 12, paddingBottom: 12 }}
            >
              <div className={styles.members}>
                <Row gutter={48}>
                  {
                    members.map(item => (
                      <Col span={12} key={`members-item-${item.id}`}>
                        <Link to={item.link}>
                          <Avatar src={item.logo} size='small'/>
                          <span className={styles.member}>{item.title}</span>
                        </Link>
                      </Col>
                    ))
                  }
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </PageHeaderWrapper>
    )
  }
}

export default Workplace
