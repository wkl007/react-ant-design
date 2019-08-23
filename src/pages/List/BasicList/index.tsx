import React, { Component, FC } from 'react'
import moment from 'moment'
import { Avatar, Button, Card, Col, Dropdown, Icon, Input, List, Menu, Progress, Radio, Row } from 'antd'
import PageHeaderWrapper from '@/components/PageHeader'
import styles from './index.less'

const RadioButton = Radio.Button
const RadioGroup = Radio.Group
const { Search } = Input

const listData = {
  list: [
    {
      'id': 'fake-list-0',
      'owner': '付小小',
      'title': 'Alipay',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
      'status': 'active',
      'percent': 63,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T06:05:14.151Z',
      'createdAt': '2018-06-03T06:05:14.151Z',
      'subDescription': '那是一种内在的东西， 他们到达不了，也无法触及的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 110114,
      'newUser': 1141,
      'star': 158,
      'like': 120,
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
      'id': 'fake-list-1',
      'owner': '曲丽丽',
      'title': 'Angular',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
      'status': 'exception',
      'percent': 57,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T04:05:14.151Z',
      'createdAt': '2018-06-03T04:05:14.151Z',
      'subDescription': '希望是一个好东西，也许是最好的，好东西是不会消亡的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 126536,
      'newUser': 1305,
      'star': 132,
      'like': 177,
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
      'id': 'fake-list-2',
      'owner': '林东东',
      'title': 'Ant Design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uVZonEtjWwmUZPBQfycs.png',
      'status': 'normal',
      'percent': 88,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T02:05:14.151Z',
      'createdAt': '2018-06-03T02:05:14.151Z',
      'subDescription': '生命就像一盒巧克力，结果往往出人意料',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 163265,
      'newUser': 1494,
      'star': 194,
      'like': 117,
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
    },
    {
      'id': 'fake-list-3',
      'owner': '周星星',
      'title': 'Ant Design Pro',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
      'status': 'active',
      'percent': 81,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T00:05:14.151Z',
      'createdAt': '2018-06-03T00:05:14.151Z',
      'subDescription': '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 149733,
      'newUser': 1277,
      'star': 147,
      'like': 127,
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
      'percent': 78,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-02T22:05:14.151Z',
      'createdAt': '2018-06-02T22:05:14.151Z',
      'subDescription': '那时候我只会想自己想要什么，从不想自己拥有什么',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 102156,
      'newUser': 1645,
      'star': 114,
      'like': 140,
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
    }]
}

interface BasicListProps {

}

interface BasicListState {
  loading: boolean,
  pageSize: number
}

class BasicList extends Component<BasicListProps, BasicListState> {
  state = {
    loading: false,
    pageSize: 10
  }

  render () {
    const { list } = listData
    const { loading, pageSize } = this.state
    const Info: FC<{ title: string, value: string, bordered: boolean }> = ({ title, value, bordered }) => (
      <div className={styles.headerInfo}>
        <span>{title}</span>
        <p>{value}</p>
        {bordered && <em/>}
      </div>
    )
    const extraContent = (
      <div className={styles.extraContent}>
        <RadioGroup defaultValue='all'>
          <RadioButton value='all'>全部</RadioButton>
          <RadioButton value='progress'>进行中</RadioButton>
          <RadioButton value='waiting'>等待中</RadioButton>
        </RadioGroup>
        <Search
          className={styles.extraContentSearch}
          placeholder='请输入'
          onSearch={(value) => { console.log(value) }}/>
      </div>
    )
    const paginationProps = {
      onChange: (page: number, pageSize?: number) => {
        console.log(page, pageSize)
      },
      onShowSizeChange: (current: number, size: number) => {
        console.log(current, size)
        // paginationProps.pageSize
        this.setState({
          pageSize: size
        })
      },
      showSizeChanger: true,
      showQuickJumper: true,
      pageSize: pageSize,
      total: 50
    }

    const ListContent: FC<{ data: any }> = ({ data: { owner, createdAt, percent, status } }) => (
      <div className={styles.listContent}>
        <div className={styles.listContentItem}>
          <span>Owner</span>
          <p>{owner}</p>
        </div>
        <div className={styles.listContentItem}>
          <span>开始时间</span>
          <p>{moment(createdAt).format('YYYY-MM-DD HH:mm')}</p>
        </div>
        <div className={styles.listContentItem}>
          <Progress
            percent={percent} status={status} strokeWidth={6}
            style={{ width: 100 }}/>
        </div>
      </div>
    )
    const menu = (
      <Menu>
        <Menu.Item>
          <span className='link-button'>详情</span>
        </Menu.Item>
        <Menu.Item>
          <span className='link-button'>删除</span>
        </Menu.Item>
      </Menu>
    )
    const MoreBtn = () => (
      <Dropdown overlay={menu}>
        <span className='link-button'>更多 <Icon type='down'/></span>
      </Dropdown>
    )
    return <PageHeaderWrapper
      title='标准列表'
    >
      <div className={styles.standardList}>
        <Card bordered={false}>
          <Row>
            <Col sm={8} xs={24}>
              <Info title='我的待办' value='8个任务' bordered/>
            </Col>
            <Col sm={8} xs={24}>
              <Info title='本周任务平均处理时间' value='32分钟' bordered/>
            </Col>
            <Col sm={8} xs={24}>
              <Info title='本周完成任务数' value='24个任务' bordered={false}/>
            </Col>
          </Row>
        </Card>
        <Card
          className={styles.listCard}
          bordered={false}
          title='标准列表'
          style={{ marginTop: 24 }}
          bodyStyle={{ padding: '0 32px 40px 32px' }}
          extra={extraContent}
        >
          <Button
            type='dashed'
            style={{ width: '100%', marginBottom: 8 }} icon='plus'>
            添加
          </Button>
          <List
            size='large'
            rowKey='id'
            loading={loading}
            pagination={paginationProps}
            dataSource={list}
            renderItem={item => (
              <List.Item actions={[<span className='link-button'>编辑</span>, <MoreBtn/>]}>
                <List.Item.Meta
                  avatar={<Avatar
                    src={item.logo} shape='square'
                    size='large'/>}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.subDescription}
                />
                <ListContent data={item}/>
              </List.Item>
            )}
          />
        </Card>
      </div>
    </PageHeaderWrapper>
  }
}

export default BasicList
