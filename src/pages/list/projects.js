import React, { Component } from 'react'
import moment from 'moment'
import { Row, Col, Form, Card, Select, List } from 'antd'

import {TagSelect,AvatarList,Ellipsis} from 'ant-design-pro'
import StandardFormRow from '../../components/StandardFormRow'

import styles from './projects.less'

const {Option} = Select
const FormItem = Form.Item
const listData = {
  list: [
    {
      'id': 'fake-list-0',
      'owner': '付小小',
      'title': 'Alipay',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
      'status': 'active',
      'percent': 90,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T08:53:14.254Z',
      'createdAt': '2018-06-03T08:53:14.254Z',
      'subDescription': '那是一种内在的东西， 他们到达不了，也无法触及的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 161589,
      'newUser': 1728,
      'star': 146,
      'like': 113,
      'message': 19,
      'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      'members': [
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          'name': '曲丽丽',
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          'name': '王昭君',
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          'name': '董娜娜',
        }],
    },
    {
      'id': 'fake-list-1',
      'owner': '曲丽丽',
      'title': 'Angular',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
      'status': 'exception',
      'percent': 98,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T06:53:14.254Z',
      'createdAt': '2018-06-03T06:53:14.254Z',
      'subDescription': '希望是一个好东西，也许是最好的，好东西是不会消亡的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 170877,
      'newUser': 1411,
      'star': 182,
      'like': 159,
      'message': 20,
      'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      'members': [
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          'name': '曲丽丽',
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          'name': '王昭君',
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          'name': '董娜娜',
        }],
    },
    {
      'id': 'fake-list-2',
      'owner': '林东东',
      'title': 'Ant Design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uVZonEtjWwmUZPBQfycs.png',
      'status': 'normal',
      'percent': 78,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T04:53:14.254Z',
      'createdAt': '2018-06-03T04:53:14.254Z',
      'subDescription': '生命就像一盒巧克力，结果往往出人意料',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 191830,
      'newUser': 1327,
      'star': 138,
      'like': 119,
      'message': 20,
      'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      'members': [
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          'name': '曲丽丽',
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          'name': '王昭君',
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          'name': '董娜娜',
        }],
    },
    {
      'id': 'fake-list-3',
      'owner': '周星星',
      'title': 'Ant Design Pro',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
      'status': 'active',
      'percent': 84,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T02:53:14.254Z',
      'createdAt': '2018-06-03T02:53:14.254Z',
      'subDescription': '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 134484,
      'newUser': 1966,
      'star': 124,
      'like': 186,
      'message': 11,
      'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      'members': [
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          'name': '曲丽丽',
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          'name': '王昭君',
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          'name': '董娜娜',
        }],
    },
    {
      'id': 'fake-list-4',
      'owner': '吴加好',
      'title': 'Bootstrap',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
      'status': 'exception',
      'percent': 89,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T00:53:14.254Z',
      'createdAt': '2018-06-03T00:53:14.254Z',
      'subDescription': '那时候我只会想自己想要什么，从不想自己拥有什么',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 128997,
      'newUser': 1066,
      'star': 130,
      'like': 103,
      'message': 12,
      'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      'members': [
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          'name': '曲丽丽',
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          'name': '王昭君',
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          'name': '董娜娜',
        }],
    },
    {
      'id': 'fake-list-5',
      'owner': '朱偏右',
      'title': 'React',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uVZonEtjWwmUZPBQfycs.png',
      'status': 'normal',
      'percent': 79,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-02T22:53:14.254Z',
      'createdAt': '2018-06-02T22:53:14.254Z',
      'subDescription': '那是一种内在的东西， 他们到达不了，也无法触及的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 130798,
      'newUser': 1264,
      'star': 105,
      'like': 180,
      'message': 12,
      'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      'members': [
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          'name': '曲丽丽',
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          'name': '王昭君',
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          'name': '董娜娜',
        }],
    },
    {
      'id': 'fake-list-6',
      'owner': '鱼酱',
      'title': 'Vue',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
      'status': 'active',
      'percent': 57,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-02T20:53:14.254Z',
      'createdAt': '2018-06-02T20:53:14.254Z',
      'subDescription': '希望是一个好东西，也许是最好的，好东西是不会消亡的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 106992,
      'newUser': 1880,
      'star': 118,
      'like': 117,
      'message': 15,
      'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      'members': [
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          'name': '曲丽丽',
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          'name': '王昭君',
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          'name': '董娜娜',
        }],
    },
    {
      'id': 'fake-list-7',
      'owner': '乐哥',
      'title': 'Webpack',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
      'status': 'exception',
      'percent': 73,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-02T18:53:14.254Z',
      'createdAt': '2018-06-02T18:53:14.254Z',
      'subDescription': '生命就像一盒巧克力，结果往往出人意料',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 176313,
      'newUser': 1042,
      'star': 132,
      'like': 103,
      'message': 13,
      'content': '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      'members': [
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          'name': '曲丽丽',
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          'name': '王昭君',
        },
        {
          'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          'name': '董娜娜',
        }],
    }],
}

@Form.create()
class Projects extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
    }
  }

  handleFormSubmit = (values) => {
    console.log(values)
  }

  render () {
    let {list} = listData
    let {form} = this.props
    let {getFieldDecorator} = form
    let {loading} = this.state

    let cardList = list ? (
      <List
        rowKey="id"
        loading={loading}
        grid={{gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1}}
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <Card
              className={styles.card}
              hoverable
              cover={<img src={item.cover} alt={item.title} height={154}/>}
            >
              <Card.Meta
                title={<span className='link-button'>{item.title}</span>}
                description={<Ellipsis lines={2}
                                       tooltip>{item.subDescription}</Ellipsis>}
              >
                <div className={styles.cardItemContent}>
                  <span>{moment(item.updatedAt).fromNow()}</span>
                  <div className={styles.avatarList}>
                    <AvatarList
                      siz="mini"
                    >
                      {item.members.map((member, i) => (
                        <AvatarList.Item
                          key={`${item.id}-avatar-${i}`}
                          src={member.avatar}
                          tips={member.name}
                        />
                      ))}
                    </AvatarList>
                  </div>
                </div>
              </Card.Meta>
            </Card>
          </List.Item>
        )}
      >

      </List>
    ) : null

    let formItemLayout = {
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    }
    return (
      <div className={styles.coverCardList}>
        <Card bordered={false}>
          <Form layout="inline">
            <StandardFormRow title="所属类目" block
                             style={{paddingBottom: 11}}>
              <FormItem>
                {getFieldDecorator('category')(
                  <TagSelect onChange={this.handleFormSubmit} expandable>
                    <TagSelect.Option value="cat1">类目一</TagSelect.Option>
                    <TagSelect.Option value="cat2">类目二</TagSelect.Option>
                    <TagSelect.Option value="cat3">类目三</TagSelect.Option>
                    <TagSelect.Option value="cat4">类目四</TagSelect.Option>
                    <TagSelect.Option value="cat5">类目五</TagSelect.Option>
                    <TagSelect.Option value="cat6">类目六</TagSelect.Option>
                    <TagSelect.Option value="cat7">类目七</TagSelect.Option>
                    <TagSelect.Option value="cat8">类目八</TagSelect.Option>
                    <TagSelect.Option value="cat9">类目九</TagSelect.Option>
                    <TagSelect.Option value="cat10">类目十</TagSelect.Option>
                    <TagSelect.Option value="cat11">类目十一</TagSelect.Option>
                    <TagSelect.Option value="cat12">类目十二</TagSelect.Option>
                  </TagSelect>,
                )}
              </FormItem>
            </StandardFormRow>
            <StandardFormRow title="其它选项" gird last>
              <Row gutter={16}>
                <Col xl={8} lg={10} md={12} sm={24} xs={24}>
                  <FormItem {...formItemLayout} label="活跃用户">
                    {getFieldDecorator('user', {})(
                      <Select
                        onChange={this.handleFormSubmit}
                        placeholder="不限"
                        style={{maxWidth: 200, width: '100%'}}
                      >
                        <Option value="lisa">李三</Option>
                      </Select>,
                    )}
                  </FormItem>
                </Col>
                <Col xl={8} lg={10} md={12} sm={24} xs={24}>
                  <FormItem {...formItemLayout} label="好评度">
                    {getFieldDecorator('rate', {})(
                      <Select
                        onChange={this.handleFormSubmit}
                        placeholder="不限"
                        style={{maxWidth: 200, width: '100%'}}
                      >
                        <Option value="good">优秀</Option>
                      </Select>,
                    )}
                  </FormItem>
                </Col>
              </Row>
            </StandardFormRow>
          </Form>
        </Card>
        <div className={styles.cardList}>{cardList}</div>
      </div>
    )
  }
}

export default Projects
