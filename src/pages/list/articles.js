import React, { Component, Fragment } from 'react'
import moment from 'moment'
import classNames from 'classnames'
import {
  Form,
  Card,
  Select,
  List,
  Tag,
  Icon,
  Avatar,
  Row,
  Col,
  Button,
} from 'antd'
import { TagSelect } from 'ant-design-pro'
import StandardFormRow from '../../components/StandardFormRow'
import styles from './articles.less'

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
      'percent': 95,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T07:47:17.159Z',
      'createdAt': '2018-06-03T07:47:17.159Z',
      'subDescription': '那是一种内在的东西， 他们到达不了，也无法触及的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 110697,
      'newUser': 1251,
      'star': 140,
      'like': 195,
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
      'id': 'fake-list-1',
      'owner': '曲丽丽',
      'title': 'Angular',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
      'status': 'exception',
      'percent': 72,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T05:47:17.159Z',
      'createdAt': '2018-06-03T05:47:17.159Z',
      'subDescription': '希望是一个好东西，也许是最好的，好东西是不会消亡的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 169976,
      'newUser': 1143,
      'star': 114,
      'like': 150,
      'message': 17,
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
      'percent': 75,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T03:47:17.159Z',
      'createdAt': '2018-06-03T03:47:17.159Z',
      'subDescription': '生命就像一盒巧克力，结果往往出人意料',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 134318,
      'newUser': 1107,
      'star': 163,
      'like': 137,
      'message': 17,
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
      'percent': 83,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T01:47:17.159Z',
      'createdAt': '2018-06-03T01:47:17.159Z',
      'subDescription': '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 178051,
      'newUser': 1935,
      'star': 146,
      'like': 177,
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
      'id': 'fake-list-4',
      'owner': '吴加好',
      'title': 'Bootstrap',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
      'status': 'exception',
      'percent': 80,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-02T23:47:17.159Z',
      'createdAt': '2018-06-02T23:47:17.159Z',
      'subDescription': '那时候我只会想自己想要什么，从不想自己拥有什么',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 197698,
      'newUser': 1361,
      'star': 177,
      'like': 160,
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
      'id': 'fake-list-5',
      'owner': '朱偏右',
      'title': 'React',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uVZonEtjWwmUZPBQfycs.png',
      'status': 'normal',
      'percent': 80,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-02T21:47:17.159Z',
      'createdAt': '2018-06-02T21:47:17.159Z',
      'subDescription': '那是一种内在的东西， 他们到达不了，也无法触及的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 152604,
      'newUser': 1611,
      'star': 142,
      'like': 147,
      'message': 17,
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
      'percent': 85,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-02T19:47:17.159Z',
      'createdAt': '2018-06-02T19:47:17.159Z',
      'subDescription': '希望是一个好东西，也许是最好的，好东西是不会消亡的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 171935,
      'newUser': 1694,
      'star': 115,
      'like': 145,
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
      'percent': 61,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-02T17:47:17.159Z',
      'createdAt': '2018-06-02T17:47:17.159Z',
      'subDescription': '生命就像一盒巧克力，结果往往出人意料',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 147933,
      'newUser': 1509,
      'star': 161,
      'like': 123,
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
      'id': 'fake-list-0',
      'owner': '付小小',
      'title': 'Alipay',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
      'status': 'active',
      'percent': 97,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T07:58:45.631Z',
      'createdAt': '2018-06-03T07:58:45.631Z',
      'subDescription': '那是一种内在的东西， 他们到达不了，也无法触及的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 114046,
      'newUser': 1839,
      'star': 101,
      'like': 107,
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
    },
    {
      'id': 'fake-list-1',
      'owner': '曲丽丽',
      'title': 'Angular',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
      'status': 'exception',
      'percent': 54,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T05:58:45.631Z',
      'createdAt': '2018-06-03T05:58:45.631Z',
      'subDescription': '希望是一个好东西，也许是最好的，好东西是不会消亡的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 172932,
      'newUser': 1420,
      'star': 150,
      'like': 151,
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
      'id': 'fake-list-2',
      'owner': '林东东',
      'title': 'Ant Design',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uVZonEtjWwmUZPBQfycs.png',
      'status': 'normal',
      'percent': 67,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T03:58:45.631Z',
      'createdAt': '2018-06-03T03:58:45.631Z',
      'subDescription': '生命就像一盒巧克力，结果往往出人意料',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 157259,
      'newUser': 1121,
      'star': 109,
      'like': 127,
      'message': 17,
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
      'percent': 75,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T01:58:45.631Z',
      'createdAt': '2018-06-03T01:58:45.631Z',
      'subDescription': '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 125771,
      'newUser': 1586,
      'star': 182,
      'like': 148,
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
      'percent': 93,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-02T23:58:45.631Z',
      'createdAt': '2018-06-02T23:58:45.631Z',
      'subDescription': '那时候我只会想自己想要什么，从不想自己拥有什么',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 170800,
      'newUser': 1890,
      'star': 171,
      'like': 145,
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
      'id': 'fake-list-0',
      'owner': '付小小',
      'title': 'Alipay',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
      'status': 'active',
      'percent': 62,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T08:06:01.574Z',
      'createdAt': '2018-06-03T08:06:01.574Z',
      'subDescription': '那是一种内在的东西， 他们到达不了，也无法触及的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 130263,
      'newUser': 1471,
      'star': 135,
      'like': 129,
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
    },
    {
      'id': 'fake-list-1',
      'owner': '曲丽丽',
      'title': 'Angular',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
      'status': 'exception',
      'percent': 54,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T06:06:01.574Z',
      'createdAt': '2018-06-03T06:06:01.574Z',
      'subDescription': '希望是一个好东西，也许是最好的，好东西是不会消亡的',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 146764,
      'newUser': 1887,
      'star': 199,
      'like': 198,
      'message': 17,
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
      'percent': 62,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T04:06:01.574Z',
      'createdAt': '2018-06-03T04:06:01.574Z',
      'subDescription': '生命就像一盒巧克力，结果往往出人意料',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 196259,
      'newUser': 1283,
      'star': 193,
      'like': 117,
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
    },
    {
      'id': 'fake-list-3',
      'owner': '周星星',
      'title': 'Ant Design Pro',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
      'status': 'active',
      'percent': 67,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T02:06:01.574Z',
      'createdAt': '2018-06-03T02:06:01.574Z',
      'subDescription': '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 150876,
      'newUser': 1449,
      'star': 129,
      'like': 174,
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
      'id': 'fake-list-4',
      'owner': '吴加好',
      'title': 'Bootstrap',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      'cover': 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
      'status': 'exception',
      'percent': 55,
      'logo': 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      'href': 'https://ant.design',
      'updatedAt': '2018-06-03T00:06:01.574Z',
      'createdAt': '2018-06-03T00:06:01.574Z',
      'subDescription': '那时候我只会想自己想要什么，从不想自己拥有什么',
      'description': '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      'activeUser': 134556,
      'newUser': 1509,
      'star': 184,
      'like': 115,
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
    }],
}

@Form.create()
class Articles extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
    }
  }

  handleMore = () => {
    this.setState({
      loading: true,
    })
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 1000)
  }

  handleFormSubmit = (values) => {
    console.log(values)
  }

  setOwner = () => {
    let {form} = this.props
    form.setFieldsValue({
      owner: ['wzj'],
    })
    console.log(['wzj'])
  }

  render () {
    let {list} = listData
    let {loading} = this.state
    let {form} = this.props
    let {getFieldDecorator} = form

    let owners = [
      {
        id: 'wzj',
        name: '我自己',
      },
      {
        id: 'wjh',
        name: '吴家豪',
      },
      {
        id: 'zxx',
        name: '周星星',
      },
      {
        id: 'zly',
        name: '赵丽颖',
      },
      {
        id: 'ym',
        name: '姚明',
      },
    ]

    let IconText = ({type, text}) => (
      <span>
        <Icon type={type} style={{marginRight: 8}}/>
        {text}
      </span>
    )

    let ListContent = ({data: {content, updatedAt, avatar, owner, href}}) => (
      <div className={styles.listContent}>
        <div className={styles.description}>{content}</div>
        <div className={styles.extra}>
          <Avatar src={avatar} siz="small"/>
          <a href={href}>{owner}</a> 发布在 <a href={href}>{href}</a>
          <em>{moment(updatedAt).format('YYYY-MM-DD HH:mm')}</em>
        </div>
      </div>
    )

    let formItemLayout = {
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 24},
        md: {span: 12},
      },
    }

    let loadMore = (
      list.length > 0 ? (
        <div style={{textAlign: 'center', marginTop: 16}}>
          <Button onClick={this.handleMore}
                  styles={{paddingLeft: 48, paddingRight: 48}}>
            {
              loading ? (
                <span>
                  <Icon type="loading"/> 加载中...
                </span>
              ) : (
                '加载更多'
              )
            }
          </Button>
        </div>
      ) : null
    )

    return (
      <Fragment>
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
            <StandardFormRow title="owner" gird>
              <Row>
                <Col lg={16} md={24} sm={24} xs={24}>
                  <FormItem>
                    {
                      getFieldDecorator('owner', {
                        initialValue: ['wjh', 'zxx'],
                      })(
                        <Select
                          onChange={this.handleFormSubmit}
                          mode="multiple"
                          style={{maxWidth: 286, width: '100%'}}
                          placeholder="选择 owner"
                        >
                          {
                            owners.map(owner => (
                              <Option key={owner.id} value={owner.id}>
                                {owner.name}
                              </Option>
                            ))
                          }
                        </Select>,
                      )
                    }
                    <span
                      className={classNames(styles.selfTrigger, 'link-button')}
                      onClick={this.setOwner}>
                      只看自己的
                    </span>
                  </FormItem>
                </Col>
              </Row>
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
        <Card
          style={{marginTop: 24}}
          bordered={false}
          bodyStyle={{padding: '8px 32px 32px 32px'}}
        >
          <List
            size="large"
            loading={list.length === 0 ? loading : false}
            rowKey="id"
            itemLayout="vertical"
            loadMore={loadMore}
            dataSource={list}
            renderItem={item => (
              <List.Item
                key={item.id}
                actions={[
                  <IconText type="star-o" text={item.star}/>,
                  <IconText type="like-o" text={item.like}/>,
                  <IconText type="message" text={item.message}/>,
                ]}
                extra={<div className={styles.listItemExtra}/>}
              >
                <List.Item.Meta
                  title={
                    <a className={styles.listItemMetaTitle} href={item.href}>
                      {item.title}
                    </a>
                  }
                  description={
                    <span>
                      <Tag>Ant Design</Tag>
                      <Tag>设计语言</Tag>
                      <Tag>蚂蚁金服</Tag>
                    </span>
                  }
                >
                </List.Item.Meta>
                <ListContent data={item}/>
              </List.Item>
            )}
          >
          </List>
        </Card>
      </Fragment>
    )
  }
}

export default Articles
