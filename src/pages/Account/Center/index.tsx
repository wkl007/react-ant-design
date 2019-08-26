import React, { FC, Component } from 'react'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import { Avatar, Card, Col, Divider, Icon, Input, Row, Spin, Tag } from 'antd'
import { match } from 'react-router'
import { History } from 'history'
import NotFound from '@/pages/Exception/404'
import { getRouterList } from '@/router'
import { getRoutes } from '@/utils/utils'
import styles from './index.less'

const currentUser = {
  'name': 'Serati Ma',
  'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  'userid': '00000001',
  'email': 'antdesign@alipay.com',
  'signature': '海纳百川，有容乃大',
  'title': '交互专家',
  'group': '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
  'tags': [
    { 'key': '0', 'label': '很有想法的' },
    { 'key': '1', 'label': '专注设计' },
    { 'key': '2', 'label': '辣~' },
    { 'key': '3', 'label': '大长腿' },
    { 'key': '4', 'label': '川妹子' },
    { 'key': '5', 'label': '海纳百川' }],
  'notifyCount': 12,
  'unreadCount': 11,
  'country': 'China',
  'geographic': {
    'province': { 'label': '浙江省', 'key': '330000' },
    'city': { 'label': '杭州市', 'key': '330100' }
  },
  'address': '西湖区工专路 77 号',
  'phone': '0752-268888888'
}
const project = {
  'notice': [
    {
      'id': 'xxx1',
      'title': 'Alipay',
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      'description': '那是一种内在的东西，他们到达不了，也无法触及的',
      'updatedAt': '2018-12-04T02:31:18.865Z',
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
      'updatedAt': '2018-12-04T02:31:18.865Z',
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
}

interface CenterProps {
  location: Location;
  match: match;
  history: History;
}

interface CenterState {
  currentUser: any;
  currentUserLoading: boolean;
  project: any;
  newTags: Array<any>;
  inputVisible: boolean;
  inputValue: string;
}

class Center extends Component<CenterProps, CenterState> {
  input: any

  state = {
    currentUser: currentUser,
    currentUserLoading: true,
    project: project,
    newTags: [],
    inputVisible: false,
    inputValue: ''
  }

  componentDidMount (): void {
    setTimeout(() => {
      this.setState({
        currentUserLoading: false
      })
    }, 500)
  }

  onTabChange = (key: string) => {
    const { history, match } = this.props
    switch (key) {
      case 'articles':
        history.push({
          pathname: `${match.url}/articles`
        })
        break
      case 'applications':
        history.push({
          pathname: `${match.url}/applications`
        })
        break
      case 'projects':
        history.push({
          pathname: `${match.url}/projects`
        })
        break
      default:
        break
    }
  }

  showInput = () => {
    this.setState(
      { inputVisible: true },
      () => this.input.focus()
    )
  }

  saveInputRef = (input: any) => {
    this.input = input
  }

  // 值更改
  handleInputChange = (e: any) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  // 添加新标签
  handleInputConfirm = () => {
    const { inputValue } = this.state
    let { newTags } = this.state
    if (inputValue && newTags.filter((tag: { key: string, label: string }) => tag.label === inputValue).length === 0) {
      // @ts-ignore
      newTags = [...newTags, { key: `new-${newTags.length}`, label: inputValue }]
    }
    this.setState({
      newTags,
      inputValue: '',
      inputVisible: false
    })
  }

  render () {
    const { currentUser, currentUserLoading, project: { notice }, newTags, inputValue, inputVisible } = this.state
    const { match, location } = this.props
    const operationTabList = [
      {
        key: 'articles',
        tab: (
          <span>
            文章 <span style={{ fontSize: 14 }}>(8)</span>
          </span>
        )
      },
      {
        key: 'applications',
        tab: (
          <span>
            应用 <span style={{ fontSize: 14 }}>(8)</span>
          </span>
        )
      },
      {
        key: 'projects',
        tab: (
          <span>
            项目 <span style={{ fontSize: 14 }}>(8)</span>
          </span>
        )
      }
    ]
    const routerList = getRouterList()
    const routes = getRoutes(match.path, routerList)
    return <div className={styles.userCenter}>
      <Row gutter={24}>
        <Col lg={7} md={24}>
          <Card
            bordered={false} style={{ marginBottom: 24 }}
            loading={currentUserLoading}>
            {currentUser && Object.keys(currentUser).length
              ? (
                <div>
                  <div className={styles.avatarHolder}>
                    <img src={currentUser.avatar} alt=''/>
                    <div className={styles.name}>{currentUser.name}</div>
                    <div>{currentUser.signature}</div>
                  </div>
                  <div className={styles.detail}>
                    <p>
                      <i className={styles.title}/>
                      {currentUser.title}
                    </p>
                    <p>
                      <i className={styles.group}/>
                      {currentUser.group}
                    </p>
                    <p>
                      <i className={styles.address}/>
                      {currentUser.geographic.province.label}
                      {currentUser.geographic.city.label}
                    </p>
                  </div>
                  <Divider dashed/>
                  <div className={styles.tags}>
                    <div className={styles.tagsTitle}>标签</div>
                    {currentUser.tags.concat(newTags).map(item => (
                      <Tag key={item.key}>{item.label}</Tag>
                    ))}
                    {inputVisible && (
                      <Input
                        ref={this.saveInputRef}
                        type='text'
                        size='small'
                        style={{ width: 78 }}
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                      />
                    )}
                    {!inputVisible && (
                      <Tag
                        onClick={this.showInput}
                        style={{ background: '#fff', borderStyle: 'dashed' }}
                      >
                        <Icon type='plus'/>
                      </Tag>
                    )}
                  </div>
                  <Divider style={{ marginTop: 16 }} dashed/>
                  <div className={styles.team}>
                    <div className={styles.teamTitle}>团队</div>
                    <Spin spinning={currentUserLoading}>
                      <Row gutter={36}>
                        {
                          notice.map(item => (
                            <Col key={item.id} lg={24} xl={12}>
                              <Link to={item.href}>
                                <Avatar size='small' src={item.logo}/>
                                {item.member}
                              </Link>
                            </Col>
                          ))
                        }
                      </Row>
                    </Spin>
                  </div>
                </div>
              )
              : ('loading...')
            }
          </Card>
        </Col>
        <Col lg={17} md={24}>
          <Card
            className={styles.tabsCard}
            bordered={false}
            tabList={operationTabList}
            activeTabKey={location.pathname.replace(`${match.path}/`, '')}
            onTabChange={this.onTabChange}
            loading={currentUserLoading}
          >
            <Switch>
              {
                routes.map(item => (
                  <Route
                    key={item.key}
                    path={item.path}
                    component={item.component}
                    exact={item.exact}
                  />
                ))
              }
              <Redirect
                exact
                from='/account/center'
                to='/account/center/articles'
              />
              <Route render={NotFound}/>
            </Switch>
          </Card>
        </Col>
      </Row>
    </div>
  }
}

export default Center
