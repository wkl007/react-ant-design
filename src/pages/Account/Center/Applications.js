import React, { Component } from 'react'
import { List, Card, Icon, Dropdown, Menu, Avatar, Tooltip } from 'antd'
import numeral from 'numeral'
import { formatWan } from '../../../utils/utils'
import stylesApplicatons from '../../List/Applications.less'

const list = [
  {
    'id': 'fake-list-0',
    'owner': '付小小',
    'title': 'Alipay',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
    'status': 'active',
    'percent': 53,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-04T07:52:27.614Z',
    'createdAt': '2018-12-04T07:52:27.614Z',
    'subDescription': '那是一种内在的东西， 他们到达不了，也无法触及的',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 184140,
    'newUser': 1453,
    'star': 159,
    'like': 103,
    'message': 17,
    'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
    'members': [
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        'name': '曲丽丽',
        'id': 'member1',
      },
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
        'name': '王昭君',
        'id': 'member2',
      },
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
        'name': '董娜娜',
        'id': 'member3',
      }],
  }, {
    'id': 'fake-list-1',
    'owner': '曲丽丽',
    'title': 'Angular',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
    'status': 'exception',
    'percent': 74,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-04T05:52:27.614Z',
    'createdAt': '2018-12-04T05:52:27.614Z',
    'subDescription': '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 104684,
    'newUser': 1269,
    'star': 126,
    'like': 164,
    'message': 11,
    'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
    'members': [
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        'name': '曲丽丽',
        'id': 'member1',
      },
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
        'name': '王昭君',
        'id': 'member2',
      },
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
        'name': '董娜娜',
        'id': 'member3',
      }],
  }, {
    'id': 'fake-list-2',
    'owner': '林东东',
    'title': 'Ant Design',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
    'status': 'normal',
    'percent': 83,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-04T03:52:27.614Z',
    'createdAt': '2018-12-04T03:52:27.614Z',
    'subDescription': '生命就像一盒巧克力，结果往往出人意料',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 198671,
    'newUser': 1370,
    'star': 129,
    'like': 133,
    'message': 20,
    'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
    'members': [
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        'name': '曲丽丽',
        'id': 'member1',
      },
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
        'name': '王昭君',
        'id': 'member2',
      },
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
        'name': '董娜娜',
        'id': 'member3',
      }],
  }, {
    'id': 'fake-list-3',
    'owner': '周星星',
    'title': 'Ant Design Pro',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
    'status': 'active',
    'percent': 84,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-04T01:52:27.614Z',
    'createdAt': '2018-12-04T01:52:27.614Z',
    'subDescription': '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 113539,
    'newUser': 1275,
    'star': 123,
    'like': 185,
    'message': 20,
    'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
    'members': [
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        'name': '曲丽丽',
        'id': 'member1',
      },
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
        'name': '王昭君',
        'id': 'member2',
      },
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
        'name': '董娜娜',
        'id': 'member3',
      }],
  }, {
    'id': 'fake-list-4',
    'owner': '吴加好',
    'title': 'Bootstrap',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
    'status': 'exception',
    'percent': 74,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-03T23:52:27.614Z',
    'createdAt': '2018-12-03T23:52:27.614Z',
    'subDescription': '那时候我只会想自己想要什么，从不想自己拥有什么',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 122059,
    'newUser': 1787,
    'star': 137,
    'like': 135,
    'message': 19,
    'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
    'members': [
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        'name': '曲丽丽',
        'id': 'member1',
      },
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
        'name': '王昭君',
        'id': 'member2',
      },
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
        'name': '董娜娜',
        'id': 'member3',
      }],
  }, {
    'id': 'fake-list-5',
    'owner': '朱偏右',
    'title': 'React',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
    'status': 'normal',
    'percent': 54,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-03T21:52:27.614Z',
    'createdAt': '2018-12-03T21:52:27.614Z',
    'subDescription': '那是一种内在的东西， 他们到达不了，也无法触及的',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 161697,
    'newUser': 1604,
    'star': 126,
    'like': 198,
    'message': 16,
    'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
    'members': [
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        'name': '曲丽丽',
        'id': 'member1',
      },
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
        'name': '王昭君',
        'id': 'member2',
      },
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
        'name': '董娜娜',
        'id': 'member3',
      }],
  }, {
    'id': 'fake-list-6',
    'owner': '鱼酱',
    'title': 'Vue',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
    'status': 'active',
    'percent': 97,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-03T19:52:27.614Z',
    'createdAt': '2018-12-03T19:52:27.614Z',
    'subDescription': '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 154867,
    'newUser': 1143,
    'star': 111,
    'like': 168,
    'message': 11,
    'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
    'members': [
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        'name': '曲丽丽',
        'id': 'member1',
      },
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
        'name': '王昭君',
        'id': 'member2',
      },
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
        'name': '董娜娜',
        'id': 'member3',
      }],
  }, {
    'id': 'fake-list-7',
    'owner': '乐哥',
    'title': 'Webpack',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
    'status': 'exception',
    'percent': 75,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-03T17:52:27.614Z',
    'createdAt': '2018-12-03T17:52:27.614Z',
    'subDescription': '生命就像一盒巧克力，结果往往出人意料',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 132510,
    'newUser': 1081,
    'star': 130,
    'like': 174,
    'message': 16,
    'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
    'members': [
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        'name': '曲丽丽',
        'id': 'member1',
      },
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
        'name': '王昭君',
        'id': 'member2',
      },
      {
        'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
        'name': '董娜娜',
        'id': 'member3',
      }],
  }]

class Applications extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: list,
    }
  }

  render () {
    const {list} = this.state
    const itemMenu = (
      <Menu>
        <Menu.Item>
          <a target='_blank' rel="noopener noreferrer"
             href="http://www.alipay.com/">1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target='_blank' rel="noopener noreferrer"
             href="http://www.taobao.com/">2st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target='_blank' rel="noopener noreferrer"
             href="http://www.tmall.com/">3st menu item
          </a>
        </Menu.Item>
      </Menu>
    )
    const CardInfo = ({activeUser, newUser}) => (
      <div className={stylesApplicatons.cardInfo}>
        <div>
          <p>活跃用户</p>
          <p>{activeUser}</p>
        </div>
        <div>
          <p>新增用户</p>
          <p>{newUser}</p>
        </div>
      </div>
    )
    return (
      <List
        rowKey="id"
        className={stylesApplicatons.filterCardList}
        grid={{gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1}}
        dataSource={list}
        renderItem={item => (
          <List.Item key={item.id}>
            <Card
              hoverable
              bodyStyle={{paddingBottom: 20}}
              actions={[
                <Tooltip title="下载">
                  <Icon type="download"/>
                </Tooltip>,
                <Tooltip title="编辑">
                  <Icon type="edit"/>
                </Tooltip>,
                <Tooltip title="分享">
                  <Icon type="share-alt"/>
                </Tooltip>,
                <Dropdown overlay={itemMenu}>
                  <Icon type="ellipsis"/>
                </Dropdown>,
              ]}
            >
              <Card.Meta avatar={<Avatar size="small" src={item.avatar} />} title={item.title} />
              <div className={stylesApplicatons.cardItemContent}>
                <CardInfo activeUser={formatWan(item.activeUser)}
                          newUser={numeral(item.newUser).format('0,0')}
                />
              </div>
            </Card>
          </List.Item>
        )}
      />
    )
  }
}

export default Applications
