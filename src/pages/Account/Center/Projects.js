import React, { Component } from 'react'
import { List, Card } from 'antd'
import { AvatarList } from 'ant-design-pro'
import moment from 'moment'
import stylesProjects from '../../List/Projects.less'

const list = [
  {
    'id': 'fake-list-0',
    'owner': '付小小',
    'title': 'Alipay',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
    'status': 'active',
    'percent': 73,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-04T08:06:58.068Z',
    'createdAt': '2018-12-04T08:06:58.068Z',
    'subDescription': '那是一种内在的东西， 他们到达不了，也无法触及的',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 138109,
    'newUser': 1847,
    'star': 132,
    'like': 116,
    'message': 14,
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
  },
  {
    'id': 'fake-list-1',
    'owner': '曲丽丽',
    'title': 'Angular',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
    'status': 'exception',
    'percent': 88,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-04T06:06:58.068Z',
    'createdAt': '2018-12-04T06:06:58.068Z',
    'subDescription': '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 112115,
    'newUser': 1348,
    'star': 170,
    'like': 124,
    'message': 13,
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
  },
  {
    'id': 'fake-list-2',
    'owner': '林东东',
    'title': 'Ant Design',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
    'status': 'normal',
    'percent': 61,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-04T04:06:58.068Z',
    'createdAt': '2018-12-04T04:06:58.068Z',
    'subDescription': '生命就像一盒巧克力，结果往往出人意料',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 174971,
    'newUser': 1959,
    'star': 189,
    'like': 124,
    'message': 14,
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
  },
  {
    'id': 'fake-list-3',
    'owner': '周星星',
    'title': 'Ant Design Pro',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
    'status': 'active',
    'percent': 82,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-04T02:06:58.068Z',
    'createdAt': '2018-12-04T02:06:58.068Z',
    'subDescription': '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 193346,
    'newUser': 1378,
    'star': 116,
    'like': 163,
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
  },
  {
    'id': 'fake-list-4',
    'owner': '吴加好',
    'title': 'Bootstrap',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
    'status': 'exception',
    'percent': 88,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-04T00:06:58.068Z',
    'createdAt': '2018-12-04T00:06:58.068Z',
    'subDescription': '那时候我只会想自己想要什么，从不想自己拥有什么',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 167186,
    'newUser': 1990,
    'star': 160,
    'like': 102,
    'message': 14,
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
  },
  {
    'id': 'fake-list-5',
    'owner': '朱偏右',
    'title': 'React',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
    'status': 'normal',
    'percent': 79,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-03T22:06:58.068Z',
    'createdAt': '2018-12-03T22:06:58.068Z',
    'subDescription': '那是一种内在的东西， 他们到达不了，也无法触及的',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 126067,
    'newUser': 1445,
    'star': 123,
    'like': 111,
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
  },
  {
    'id': 'fake-list-6',
    'owner': '鱼酱',
    'title': 'Vue',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
    'status': 'active',
    'percent': 93,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-03T20:06:58.068Z',
    'createdAt': '2018-12-03T20:06:58.068Z',
    'subDescription': '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 110817,
    'newUser': 1729,
    'star': 113,
    'like': 118,
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
  },
  {
    'id': 'fake-list-7',
    'owner': '乐哥',
    'title': 'Webpack',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
    'status': 'exception',
    'percent': 89,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-03T18:06:58.068Z',
    'createdAt': '2018-12-03T18:06:58.068Z',
    'subDescription': '生命就像一盒巧克力，结果往往出人意料',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 193066,
    'newUser': 1642,
    'star': 179,
    'like': 133,
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
  }]

class Projects extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: list,
    }
  }

  render () {
    const { list } = this.state
    return (
      <List
        className={stylesProjects.coverCardList}
        rowKey="id"
        grid={{ gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <Card
              className={stylesProjects.card}
              hoverable
              cover={<img src={item.cover} alt={item.title}/>}
            >
              <Card.Meta
                title={<span className="link-button">{item.title}</span>}
                description={item.subDescription}/>
              <div className={stylesProjects.cardItemContent}>
                <span>{moment(item.updatedAt).fromNow()}</span>
                <div className={stylesProjects.avatarList}>
                  <AvatarList size="mini">
                    {item.members.map(member => (
                      <AvatarList.Item
                        key={`${item.id}-avatar-${member.id}`}
                        src={member.avatar}
                        tips={member.name}
                      />
                    ))}
                  </AvatarList>
                </div>
              </div>
            </Card>
          </List.Item>
        )}
      />
    )
  }
}

export default Projects
