import React, { Component } from 'react'
import { Button, Card, Icon, List, Typography } from 'antd'
import PageHeaderWrapper from '@/components/PageHeader'
import styles from './index.less'

const { Paragraph } = Typography

const listData = {
  list: [
    {
      'id': 'fake-list-0',
      'owner': '付小小',
      'title': 'Alipay',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
      'status': 'active',
      'percent': 55,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T07:18:23.867Z',
      'createdAt': '2018-06-03T07:18:23.867Z',
      'subDescription': '那是一种内在的东西， 他们到达不了，也无法触及的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 131531,
      'newUser': 1714,
      'star': 143,
      'like': 166,
      'message': 14,
      'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      'members': [
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          'name': '曲丽丽'
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          'name': '王昭君'
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          'name': '董娜娜'
        }]
    },
    {
      'id': 'fake-list-1',
      'owner': '曲丽丽',
      'title': 'Angular',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
      'status': 'exception',
      'percent': 100,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T05:18:23.867Z',
      'createdAt': '2018-06-03T05:18:23.867Z',
      'subDescription': '希望是一个好东西，也许是最好的，好东西是不会消亡的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 155753,
      'newUser': 1474,
      'star': 140,
      'like': 189,
      'message': 17,
      'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      'members': [
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          'name': '曲丽丽'
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          'name': '王昭君'
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          'name': '董娜娜'
        }]
    },
    {
      'id': 'fake-list-2',
      'owner': '林东东',
      'title': 'Ant Design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uVZonEtjWwmUZPBQfycs.png',
      'status': 'normal',
      'percent': 82,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T03:18:23.867Z',
      'createdAt': '2018-06-03T03:18:23.867Z',
      'subDescription': '生命就像一盒巧克力，结果往往出人意料',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 110350,
      'newUser': 1998,
      'star': 165,
      'like': 111,
      'message': 19,
      'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      'members': [
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          'name': '曲丽丽'
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          'name': '王昭君'
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          'name': '董娜娜'
        }]
    },
    {
      'id': 'fake-list-3',
      'owner': '周星星',
      'title': 'Ant Design Pro',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
      'status': 'active',
      'percent': 90,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T01:18:23.867Z',
      'createdAt': '2018-06-03T01:18:23.867Z',
      'subDescription': '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 164051,
      'newUser': 1716,
      'star': 194,
      'like': 125,
      'message': 20,
      'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      'members': [
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          'name': '曲丽丽'
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          'name': '王昭君'
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          'name': '董娜娜'
        }]
    },
    {
      'id': 'fake-list-4',
      'owner': '吴加好',
      'title': 'Bootstrap',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
      'status': 'exception',
      'percent': 52,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-02T23:18:23.867Z',
      'createdAt': '2018-06-02T23:18:23.867Z',
      'subDescription': '那时候我只会想自己想要什么，从不想自己拥有什么',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 159155,
      'newUser': 1414,
      'star': 176,
      'like': 106,
      'message': 11,
      'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      'members': [
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          'name': '曲丽丽'
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          'name': '王昭君'
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          'name': '董娜娜'
        }]
    },
    {
      'id': 'fake-list-5',
      'owner': '朱偏右',
      'title': 'React',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uVZonEtjWwmUZPBQfycs.png',
      'status': 'normal',
      'percent': 98,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-02T21:18:23.867Z',
      'createdAt': '2018-06-02T21:18:23.867Z',
      'subDescription': '那是一种内在的东西， 他们到达不了，也无法触及的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 126822,
      'newUser': 1694,
      'star': 101,
      'like': 174,
      'message': 12,
      'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      'members': [
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          'name': '曲丽丽'
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          'name': '王昭君'
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          'name': '董娜娜'
        }]
    },
    {
      'id': 'fake-list-6',
      'owner': '鱼酱',
      'title': 'Vue',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
      'status': 'active',
      'percent': 52,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-02T19:18:23.867Z',
      'createdAt': '2018-06-02T19:18:23.867Z',
      'subDescription': '希望是一个好东西，也许是最好的，好东西是不会消亡的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 113795,
      'newUser': 1015,
      'star': 196,
      'like': 165,
      'message': 14,
      'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      'members': [
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          'name': '曲丽丽'
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          'name': '王昭君'
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          'name': '董娜娜'
        }]
    },
    {
      'id': 'fake-list-7',
      'owner': '乐哥',
      'title': 'Webpack',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
      'status': 'exception',
      'percent': 82,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-02T17:18:23.867Z',
      'createdAt': '2018-06-02T17:18:23.867Z',
      'subDescription': '生命就像一盒巧克力，结果往往出人意料',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 109139,
      'newUser': 1186,
      'star': 163,
      'like': 111,
      'message': 15,
      'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      'members': [
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          'name': '曲丽丽'
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          'name': '王昭君'
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          'name': '董娜娜'
        }]
    }]
}

interface CardListState {
  loading: boolean;
}

class CardList extends Component<{}, CardListState> {
  state = {
    loading: true
  }

  componentDidMount (): void {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 500)
  }

  render () {
    const { list } = listData
    const { loading } = this.state
    const content = (
      <div className={styles.pageHeaderContent}>
        <p>
          段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，
          提供跨越设计与开发的体验解决方案。
        </p>
        <div className={styles.contentLink}>
          <span className='link-button'>
            <img
              alt=''
              src='https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg'/>{' '}
            快速开始
          </span>
          <span className='link-button'>
            <img
              alt=''
              src='https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg'/>{' '}
            产品简介
          </span>
          <span className='link-button'>
            <img
              alt=''
              src='https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg'/>{' '}
            产品文档
          </span>
        </div>
      </div>
    )
    const extraContent = (
      <div className={styles.extraImg}>
        <img
          alt='这是一个标题'
          src='https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png'/>
      </div>
    )
    return <PageHeaderWrapper
      title='卡片列表'
      content={content}
      extraContent={extraContent}>
      <List
        rowKey='id'
        loading={loading}
        grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
        dataSource={['', ...list]}
        renderItem={(item: any) =>
          item ? (
            <List.Item key={item.id}>
              <Card
                hoverable
                className={styles.card}
                actions={[
                  <span className='link-button'>操作一</span>,
                  <span className='link-button'>操作二</span>]}
              >
                <Card.Meta
                  avatar={<img
                    src={item.avatar} className={styles.cardAvatar}
                    alt=''/>}
                  title={<span className='link-button'>{item.title}</span>}
                  description={
                    <Paragraph ellipsis={{ rows: 3, expandable: false }} className={styles.item}>
                      {item.description}
                    </Paragraph>
                  }
                />
              </Card>
            </List.Item>
          ) : (
            <List.Item>
              <Button type='dashed' className={styles.newButton}>
                <Icon type='plus'/> 新增产品
              </Button>
            </List.Item>
          )
        }
      />
    </PageHeaderWrapper>
  }
}

export default CardList
