import React, { Component } from 'react'
import numeral from 'numeral'
import {
  Row,
  Col,
  Form,
  Card,
  Select,
  Icon,
  Avatar,
  List,
  Tooltip,
  Dropdown,
  Menu,
} from 'antd'
import TagSelect from 'ant-design-pro/lib/TagSelect'
import StandardFormRow from '../../components/StandardFormRow'

import styles from './applications.less'

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
      'percent': 75,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T09:03:44.261Z',
      'createdAt': '2018-06-03T09:03:44.261Z',
      'subDescription': '那是一种内在的东西， 他们到达不了，也无法触及的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 143059,
      'newUser': 1470,
      'star': 178,
      'like': 134,
      'message': 16,
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
      'percent': 84,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T07:03:44.261Z',
      'createdAt': '2018-06-03T07:03:44.261Z',
      'subDescription': '希望是一个好东西，也许是最好的，好东西是不会消亡的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 117350,
      'newUser': 1059,
      'star': 102,
      'like': 112,
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
      'id': 'fake-list-2',
      'owner': '林东东',
      'title': 'Ant Design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uVZonEtjWwmUZPBQfycs.png',
      'status': 'normal',
      'percent': 85,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T05:03:44.261Z',
      'createdAt': '2018-06-03T05:03:44.261Z',
      'subDescription': '生命就像一盒巧克力，结果往往出人意料',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 121423,
      'newUser': 1296,
      'star': 147,
      'like': 193,
      'message': 18,
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
      'percent': 58,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T03:03:44.261Z',
      'createdAt': '2018-06-03T03:03:44.261Z',
      'subDescription': '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 172125,
      'newUser': 1493,
      'star': 146,
      'like': 193,
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
    },
    {
      'id': 'fake-list-4',
      'owner': '吴加好',
      'title': 'Bootstrap',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
      'status': 'exception',
      'percent': 56,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T01:03:44.261Z',
      'createdAt': '2018-06-03T01:03:44.261Z',
      'subDescription': '那时候我只会想自己想要什么，从不想自己拥有什么',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 160398,
      'newUser': 1162,
      'star': 186,
      'like': 169,
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
      'id': 'fake-list-5',
      'owner': '朱偏右',
      'title': 'React',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uVZonEtjWwmUZPBQfycs.png',
      'status': 'normal',
      'percent': 88,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-02T23:03:44.261Z',
      'createdAt': '2018-06-02T23:03:44.261Z',
      'subDescription': '那是一种内在的东西， 他们到达不了，也无法触及的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 169695,
      'newUser': 1186,
      'star': 179,
      'like': 149,
      'message': 16,
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
      'percent': 90,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-02T21:03:44.261Z',
      'createdAt': '2018-06-02T21:03:44.261Z',
      'subDescription': '希望是一个好东西，也许是最好的，好东西是不会消亡的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 100874,
      'newUser': 1871,
      'star': 125,
      'like': 124,
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
    },
    {
      'id': 'fake-list-7',
      'owner': '乐哥',
      'title': 'Webpack',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
      'status': 'exception',
      'percent': 66,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-02T19:03:44.261Z',
      'createdAt': '2018-06-02T19:03:44.261Z',
      'subDescription': '生命就像一盒巧克力，结果往往出人意料',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 114680,
      'newUser': 1445,
      'star': 171,
      'like': 116,
      'message': 14,
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

const formatWan = val => {
  const v = val * 1;
  if (!v || isNaN(v)) return '';

  let result = val;
  if (val > 10000) {
    result = Math.floor(val / 10000);
    result = (
      <span>
        {result}
        <em className={styles.wan}>万</em>
      </span>
    );
  }
  return result;
};

@Form.create()
class Applications extends Component {
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

    let formItemLayout = {
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    }

    let CardInfo = ({ activeUser, newUser }) => (
      <div className={styles.cardInfo}>
        <div>
          <p>活跃用户</p>
          <p>{activeUser}</p>
        </div>
        <div>
          <p>新增用户</p>
          <p>{newUser}</p>
        </div>
      </div>
    );

    let itemMenu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3d menu item
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div className={styles.filterCardList}>
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
        <List
          rowKey="id"
          style={{marginTop: 24}}
          grid={{gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1}}
          loading={loading}
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
                <Card.Meta avatar={<Avatar size="small" src={item.avatar}/>}
                           title={item.title}/>
                <div className={styles.cardItemContent}>
                  <CardInfo
                    activeUser={formatWan(item.activeUser)}
                    newUser={numeral(item.newUser).format('0,0')}
                  />
                </div>
              </Card>
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default Applications