import React, { Component, Fragment } from 'react'
import numeral from 'numeral'
import { Row, Col, Card, Tooltip, Spin } from 'antd'
import { NumberInfo, Charts } from 'ant-design-pro'
import CountDown from 'ant-design-pro/lib/CountDown'
import ActiveChart from '../../components/ActiveChart'

import styles from './Monitor.less'

const {Pie, WaterWave, Gauge, TagCloud} = Charts

const monitor = {
  'tags': [
    {'name': '重庆市', 'value': 66, 'type': 1},
    {'name': '重庆市', 'value': 34, 'type': 1},
    {'name': '七台河市', 'value': 32, 'type': 1},
    {'name': '漳州市', 'value': 24, 'type': 1},
    {'name': '白银市', 'value': 51, 'type': 0},
    {'name': '上海市', 'value': 80, 'type': 1},
    {'name': '云林县', 'value': 65, 'type': 2},
    {'name': '株洲市', 'value': 25, 'type': 0},
    {'name': '衢州市', 'value': 60, 'type': 1},
    {'name': '商洛市', 'value': 93, 'type': 1},
    {'name': '上饶市', 'value': 15, 'type': 1},
    {'name': '重庆市', 'value': 70, 'type': 1},
    {'name': '乌海市', 'value': 8, 'type': 0},
    {'name': '博尔塔拉蒙古自治州', 'value': 27, 'type': 2},
    {'name': '三明市', 'value': 63, 'type': 2},
    {'name': '三明市', 'value': 33, 'type': 1},
    {'name': '锡林郭勒盟', 'value': 53, 'type': 1},
    {'name': '离岛', 'value': 16, 'type': 1},
    {'name': '重庆市', 'value': 24, 'type': 0},
    {'name': '葫芦岛市', 'value': 52, 'type': 1},
    {'name': '本溪市', 'value': 80, 'type': 0},
    {'name': '曲靖市', 'value': 11, 'type': 1},
    {'name': '昌都地区', 'value': 13, 'type': 2},
    {'name': '商洛市', 'value': 6, 'type': 0},
    {'name': '新界', 'value': 6, 'type': 0},
    {'name': '大庆市', 'value': 40, 'type': 2},
    {'name': '绵阳市', 'value': 92, 'type': 1},
    {'name': '三亚市', 'value': 66, 'type': 1},
    {'name': '湛江市', 'value': 80, 'type': 2},
    {'name': '宜春市', 'value': 23, 'type': 0},
    {'name': '离岛', 'value': 85, 'type': 1},
    {'name': '上海市', 'value': 20, 'type': 2},
    {'name': '澳门半岛', 'value': 49, 'type': 1},
    {'name': '上海市', 'value': 65, 'type': 0},
    {'name': '梧州市', 'value': 58, 'type': 1},
    {'name': '咸宁市', 'value': 49, 'type': 0},
    {'name': '北海市', 'value': 65, 'type': 0},
    {'name': '鄂尔多斯市', 'value': 94, 'type': 1},
    {'name': '海外', 'value': 64, 'type': 1},
    {'name': '哈密地区', 'value': 98, 'type': 1},
    {'name': '九龙', 'value': 94, 'type': 1},
    {'name': '固原市', 'value': 66, 'type': 0},
    {'name': '海外', 'value': 93, 'type': 1},
    {'name': '双鸭山市', 'value': 87, 'type': 2},
    {'name': '绍兴市', 'value': 61, 'type': 2},
    {'name': '海口市', 'value': 25, 'type': 1},
    {'name': '吐鲁番地区', 'value': 62, 'type': 1},
    {'name': '阿勒泰地区', 'value': 52, 'type': 2},
    {'name': '湘潭市', 'value': 46, 'type': 0},
    {'name': '巴中市', 'value': 20, 'type': 2},
    {'name': '汉中市', 'value': 27, 'type': 1},
    {'name': '滨州市', 'value': 53, 'type': 1},
    {'name': '陇南市', 'value': 51, 'type': 1},
    {'name': '吐鲁番地区', 'value': 50, 'type': 1},
    {'name': '舟山市', 'value': 2, 'type': 1},
    {'name': '桂林市', 'value': 14, 'type': 0},
    {'name': '赣州市', 'value': 79, 'type': 0},
    {'name': '潮州市', 'value': 88, 'type': 2},
    {'name': '九龙', 'value': 48, 'type': 1},
    {'name': '博尔塔拉蒙古自治州', 'value': 84, 'type': 1},
    {'name': '九龙', 'value': 89, 'type': 1},
    {'name': '淮南市', 'value': 30, 'type': 1},
    {'name': '九江市', 'value': 19, 'type': 2},
    {'name': '哈尔滨市', 'value': 80, 'type': 1},
    {'name': '株洲市', 'value': 22, 'type': 2},
    {'name': '哈尔滨市', 'value': 17, 'type': 1},
    {'name': '玉林市', 'value': 46, 'type': 2},
    {'name': '喀什地区', 'value': 22, 'type': 1},
    {'name': '那曲地区', 'value': 11, 'type': 1},
    {'name': '海北藏族自治州', 'value': 43, 'type': 1},
    {'name': '澳门半岛', 'value': 21, 'type': 1},
    {'name': '台南市', 'value': 41, 'type': 2},
    {'name': '七台河市', 'value': 56, 'type': 1},
    {'name': '吉安市', 'value': 6, 'type': 1},
    {'name': '昌都地区', 'value': 77, 'type': 1},
    {'name': '重庆市', 'value': 49, 'type': 1},
    {'name': '四平市', 'value': 63, 'type': 0},
    {'name': '西双版纳傣族自治州', 'value': 36, 'type': 2},
    {'name': '十堰市', 'value': 64, 'type': 1},
    {'name': '海外', 'value': 92, 'type': 2},
    {'name': '吉林市', 'value': 89, 'type': 1},
    {'name': '沧州市', 'value': 88, 'type': 1},
    {'name': '宝鸡市', 'value': 55, 'type': 1},
    {'name': '山南地区', 'value': 6, 'type': 0},
    {'name': '黔南布依族苗族自治州', 'value': 64, 'type': 1},
    {'name': '宜兰县', 'value': 91, 'type': 0},
    {'name': '百色市', 'value': 46, 'type': 2},
    {'name': '佳木斯市', 'value': 73, 'type': 1},
    {'name': '嘉义县', 'value': 17, 'type': 2},
    {'name': '佳木斯市', 'value': 62, 'type': 1},
    {'name': '北京市', 'value': 39, 'type': 1},
    {'name': '沧州市', 'value': 85, 'type': 1},
    {'name': '香港岛', 'value': 48, 'type': 1},
    {'name': '贺州市', 'value': 62, 'type': 2},
    {'name': '渭南市', 'value': 78, 'type': 1},
    {'name': '盐城市', 'value': 59, 'type': 0},
    {'name': '咸宁市', 'value': 37, 'type': 1},
    {'name': '凉山彝族自治州', 'value': 15, 'type': 0},
    {'name': '景德镇市', 'value': 35, 'type': 2},
    {'name': '连江县', 'value': 30, 'type': 2}],
}

const targetTime = new Date().getTime() + 3900000

class Monitor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      monitor: monitor,
    }
  }

  componentDidMount () {
    this.setState({loading: true})
    setTimeout(() => {
      this.setState({loading: false})
    }, 500)
  }

  render () {
    const {loading, monitor} = this.state
    const {tags} = monitor
    return (
      loading
        ? <div style={{textAlign: 'center', marginTop: 50}}>
          <Spin size="large"/>
        </div>
        : <Fragment>
          <Row gutter={24}>
            <Col xl={18} lg={24} md={24} sm={24} xs={24}
                 style={{marginBottom: 24}}>
              <Card title="活动实时交易情况" bordered={false}>
                <Row>
                  <Col md={6} sm={12} xs={24}>
                    <NumberInfo
                      subTitle="今日交易总额"
                      suffix="元"
                      total={numeral(1245432133).format('0,0')}
                    />
                  </Col>
                  <Col md={6} sm={12} xs={24}>
                    <NumberInfo
                      subTitle="销售目标完成率"
                      total="92%"/>
                  </Col>
                  <Col md={6} sm={12} xs={24}>
                    <NumberInfo
                      subTitle="活动剩余时间"
                      total={<CountDown target={targetTime}/>}/>
                  </Col>
                  <Col md={6} sm={12} xs={24}>
                    <NumberInfo
                      subTitle="每秒交易总额"
                      suffix="元"
                      total={numeral(234).format('0,0')}/>
                  </Col>
                </Row>
                <div className={styles.mapChart}>
                  <Tooltip title="等待后期实现">
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/HBWnDEUXCnGnGrRfrpKa.png"
                      alt="map"/>
                  </Tooltip>
                </div>
              </Card>
            </Col>
            <Col xl={6} lg={24} md={24} sm={24} xs={24}
            >
              <Card
                title="活动情况预测"
                style={{marginBottom: 24}}
                bordered={false}
              >
                <ActiveChart/>
              </Card>
              <Card
                title="券核效率"
                style={{marginBottom: 24}}
                bodyStyle={{textAlign: 'center'}}
                bordered={false}
              >
                <Gauge title="跳出率" height={180} percent={87}/>
              </Card>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col xl={12} lg={24} md={24} sm={24} xs={24}
            >
              <Card
                title="各品类占比"
                bordered={false}
                className={styles.picCard}
              >
                <Row style={{padding: '16px 0'}}>
                  <Col span={8}>
                    <Pie
                      animate={false}
                      percent={28}
                      subTitle="中式快餐"
                      total="28%"
                      height={128}
                      lineWidth={2}
                    />
                  </Col>
                  <Col span={8}>
                    <Pie
                      animate={false}
                      color="#5DDECF"
                      percent={22}
                      subTitle="西餐"
                      total="22%"
                      height={128}
                      lineWidth={2}
                    />
                  </Col>
                  <Col span={8}>
                    <Pie
                      animate={false}
                      color="#2FC25B"
                      percent={32}
                      subTitle="火锅"
                      total="32%"
                      height={128}
                      lineWidth={2}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xl={6} lg={24} md={24} sm={24} xs={24}
            >
              <Card
                title="热门搜索"
                loading={loading}
                bordered={false}
                bodyStyle={{overflow: 'hidden'}}
              >
                <TagCloud data={tags} height={161}/>
              </Card>
            </Col>
            <Col xl={6} lg={24} md={24} sm={24} xs={24}
            >
              <Card
                title="资源剩余"
                bodyStyle={{textAlign: 'center', fontsize: 0}}
                bordered={false}
              >
                <WaterWave height={161} title="补贴资金剩余" percent={34}/>
              </Card>
            </Col>
          </Row>
        </Fragment>
    )
  }
}

export default Monitor
