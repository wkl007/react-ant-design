import React, { Component, Fragment } from 'react'
import { Form, Input, Upload, Select, Button, Cascader } from 'antd'
import PhoneView from './PhoneView'
import styles from './BaseView.less'
import generateJson from '../../../assets/data/generateData'

const FormItem = Form.Item
const {Option} = Select

const currentUser = {
  'name': 'Serati Ma',
  'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  'userid': '00000001',
  'email': 'antdesign@alipay.com',
  'signature': '海纳百川，有容乃大',
  'title': '交互专家',
  'group': '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
  'tags': [
    {'key': '0', 'label': '很有想法的'},
    {'key': '1', 'label': '专注设计'},
    {'key': '2', 'label': '辣~'},
    {'key': '3', 'label': '大长腿'},
    {'key': '4', 'label': '川妹子'},
    {'key': '5', 'label': '海纳百川'}],
  'notifyCount': 12,
  'unreadCount': 11,
  'profile': '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
  'country': 'China',
  'geographic': ['610000', '610100', '610103'],
  'address': '西湖区工专路 77 号',
  'phone': '0752-268888888',
}
const generateData = generateJson

// 头像组件 方便以后独立，增加裁剪之类的功能
const AvatarView = ({avatar}) => (
  <Fragment>
    <div className={styles.avatar_title}>
      头像
    </div>
    <div className={styles.avatar}>
      <img src={avatar} alt=""/>
    </div>
    <Upload fileList={[]}>
      <div className={styles.button_view}>
        <Button icon="upload">
          更换头像
        </Button>
      </div>
    </Upload>
  </Fragment>
)

/*const validatorGeographic = (rule, value, callback) => {
  const {province, city} = value
  if (!province.key) {
    callback('Please input your province!')
  }
  if (!city.key) {
    callback('Please input your city!')
  }
  callback()
}*/

const validatorPhone = (rule, value, callback) => {
  const values = value.split('-')
  if (!values[0]) {
    callback('请输入区号!')
  }
  if (!values[1]) {
    callback('请输入电话!')
  }
  callback()
}

@Form.create()
class BaseView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentUser: currentUser,
      geographic: '',
      defaultValue: ['610000', '610100', '610103'],
      value: [],
    }
  }

  componentDidMount () {
    this.setBaseInfo()
  }

  setBaseInfo = () => {
    const {currentUser} = this.state
    const {form} = this.props
    Object.keys(form.getFieldsValue()).forEach(key => {
      const obj = {}
      obj[key] = currentUser[key] || null
      form.setFieldsValue(obj)
    })
    this.setState({
      value: currentUser.geographic,
    })
  }

  getAvatarURL = () => {
    const {currentUser} = this.state
    if (currentUser.avatar) {
      return currentUser.avatar
    }
    const url = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
    return url
  }

  handleChange = (value, selectedOptions) => {
    this.setState({
      value: value,
      geographic: `${selectedOptions[0].label}${selectedOptions[1].label}${selectedOptions[2].label}`,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values)
      }
    })
  }

  render () {
    const {form: {getFieldDecorator}} = this.props
    const {defaultValue, value} = this.state
    return (
      <div className={styles.baseView} ref={ref => this.view = ref}>
        <div className={styles.left}>
          <Form layout="vertical" onSubmit={this.handleSubmit}
                hideRequiredMark>
            <FormItem
              label='邮箱'
            >
              {getFieldDecorator('email', {
                rules: [
                  {
                    required: true,
                    message: '请输入您的邮箱!',
                  },
                ],
              })(<Input autoComplete="off"/>)}
            </FormItem>
            <FormItem
              label='昵称'
            >
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: '请输入您的昵称!',
                  },
                ],
              })(<Input autoComplete="off"/>)}
            </FormItem>
            <FormItem
              label='个人简介'
            >
              {getFieldDecorator('profile', {
                rules: [
                  {
                    required: true,
                    message: '请输入个人简介!',
                  },
                ],
              })(<Input.TextArea autoComplete="off" placeholder='个人简介'
                                 rows={4}/>)}
            </FormItem>
            <FormItem
              label='国家/地区'
            >
              {getFieldDecorator('country', {
                rules: [
                  {
                    required: true,
                    message: '请输入您的国家或地区!',
                  },
                ],
              })(
                <Select>
                  <Option value="China">中国</Option>
                </Select>,
              )}
            </FormItem>
            <FormItem label='所在省市'>
              <Cascader
                value={value}
                defaultValue={defaultValue}
                placeholder="" options={generateData}
                onChange={this.handleChange}/>
            </FormItem>
            <FormItem label="街道地址">
              {getFieldDecorator('address', {
                rules: [
                  {
                    required: true,
                    message: '请输入您的街道地址!',
                  },
                ],
              })(<Input autoComplete="off"/>)}
            </FormItem>
            <FormItem label="联系电话">
              {getFieldDecorator('phone', {
                rules: [
                  {
                    required: true,
                    message: '请输入您的联系电话!',
                  },
                  {validator: validatorPhone},
                ],
              })(<PhoneView/>)}
            </FormItem>
            <Button type="primary" htmlType="submit">
              更新基本信息
            </Button>
          </Form>
        </div>
        <div className={styles.right}>
          <AvatarView avatar={this.getAvatarURL()}/>
        </div>
      </div>
    )
  }
}

export default BaseView
