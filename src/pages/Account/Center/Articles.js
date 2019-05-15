import React, { Component } from 'react'
import { List, Icon, Tag } from 'antd'
import ArticleListContent from '../../../components/ActicleListContent'
import styles from './Articles.less'

const list = [
  {
    'id': 'fake-list-0',
    'owner': '付小小',
    'title': 'Alipay',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
    'status': 'active',
    'percent': 78,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-04T06:57:01.143Z',
    'createdAt': '2018-12-04T06:57:01.143Z',
    'subDescription': '那是一种内在的东西， 他们到达不了，也无法触及的',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 153949,
    'newUser': 1774,
    'star': 179,
    'like': 195,
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
  },
  {
    'id': 'fake-list-1',
    'owner': '曲丽丽',
    'title': 'Angular',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
    'status': 'exception',
    'percent': 56,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-04T04:57:01.143Z',
    'createdAt': '2018-12-04T04:57:01.143Z',
    'subDescription': '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 192773,
    'newUser': 1938,
    'star': 104,
    'like': 163,
    'message': 15,
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
    'percent': 83,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-04T02:57:01.143Z',
    'createdAt': '2018-12-04T02:57:01.143Z',
    'subDescription': '生命就像一盒巧克力，结果往往出人意料',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 151482,
    'newUser': 1952,
    'star': 157,
    'like': 137,
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
  },
  {
    'id': 'fake-list-3',
    'owner': '周星星',
    'title': 'Ant Design Pro',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
    'status': 'active',
    'percent': 74,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-04T00:57:01.143Z',
    'createdAt': '2018-12-04T00:57:01.143Z',
    'subDescription': '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 141053,
    'newUser': 1450,
    'star': 195,
    'like': 198,
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
  },
  {
    'id': 'fake-list-4',
    'owner': '吴加好',
    'title': 'Bootstrap',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
    'status': 'exception',
    'percent': 73,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-03T22:57:01.143Z',
    'createdAt': '2018-12-03T22:57:01.143Z',
    'subDescription': '那时候我只会想自己想要什么，从不想自己拥有什么',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 116692,
    'newUser': 1994,
    'star': 142,
    'like': 169,
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
  },
  {
    'id': 'fake-list-5',
    'owner': '朱偏右',
    'title': 'React',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
    'status': 'normal',
    'percent': 58,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-03T20:57:01.143Z',
    'createdAt': '2018-12-03T20:57:01.143Z',
    'subDescription': '那是一种内在的东西， 他们到达不了，也无法触及的',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 130829,
    'newUser': 1379,
    'star': 191,
    'like': 102,
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
  },
  {
    'id': 'fake-list-6',
    'owner': '鱼酱',
    'title': 'Vue',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
    'cover': 'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
    'status': 'active',
    'percent': 97,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-03T18:57:01.143Z',
    'createdAt': '2018-12-03T18:57:01.143Z',
    'subDescription': '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 130147,
    'newUser': 1781,
    'star': 182,
    'like': 119,
    'message': 18,
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
    'percent': 77,
    'logo': 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
    'href': 'https://ant.design',
    'updatedAt': '2018-12-03T16:57:01.143Z',
    'createdAt': '2018-12-03T16:57:01.143Z',
    'subDescription': '生命就像一盒巧克力，结果往往出人意料',
    'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    'activeUser': 187505,
    'newUser': 1088,
    'star': 168,
    'like': 174,
    'message': 12,
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

class Articles extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: list,
    }
  }

  render () {
    const {list} = this.state
    const IconText = ({type, text}) => (
      <span>
        <Icon type={type} style={{marginRight: 8}}/>
        {text}
      </span>
    )
    return (
      <List
        size="large"
        className={styles.articleList}
        rowKey="id"
        itemLayout="vertical"
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <IconText type="star-o" text={item.star}/>,
              <IconText type="like-o" text={item.like}/>,
              <IconText type="message" text={item.message}/>,
            ]}
          >
            <List.Item.Meta
              title={
                <a className={styles.listItemMetaTitle}
                   href={item.href}>{item.title}</a>
              }
              description={
                <span>
                  <Tag>Ant Design</Tag>
                  <Tag>设计语言</Tag>
                  <Tag>蚂蚁金服</Tag>
                </span>
              }
            />
            <ArticleListContent data={item}/>
          </List.Item>
        )}
      />
    )
  }
}

export default Articles
