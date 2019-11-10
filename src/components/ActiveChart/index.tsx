import React, { Component } from 'react'
import { Charts, NumberInfo } from 'ant-design-pro'
import styles from './index.less'

const MiniArea: any = Charts.MiniArea

function fixedZero (val: number): string {
  return val < 10 ? `0${val}` : String(val)
}

function getActiveData (): Array<{ x: string, y: number }> {
  const activeData: Array<{ x: string, y: number }> = []
  for (let i = 0; i < 24; i += 1) {
    const item = {
      x: `${fixedZero(i)}:00`,
      y: Math.floor(Math.random() * 200) + i * 50
    }
    activeData.push(item)
  }
  return activeData
}

interface ActiveChartState {
  activeData: Array<{ x: string, y: number }>;
}

class ActiveChart extends Component<{}, ActiveChartState> {
  timer: any

  state = {
    activeData: getActiveData()
  }

  componentDidMount (): void {
    this.timer = setInterval(() => {
      this.setState({ activeData: getActiveData() })
    }, 1000)
  }

  componentWillUnmount (): void {
    clearInterval(this.timer)
  }

  render () {
    const { activeData } = this.state
    return (
      <div className={styles.activeChart}>
        <NumberInfo subTitle='目标评估' total='有望达到预期'/>
        <div style={{ marginTop: 32 }}>
          <MiniArea
            animate={false}
            line
            borderWidth={2}
            height={84}
            scale={{
              y: {
                tickCount: 3
              }
            }}
            yAxis={{
              tickLine: false,
              label: false,
              title: false,
              line: false
            }}
            data={activeData}
          />
        </div>
        {
          activeData && (
            <div className={styles.activeChartGrid}>
              <p>{[...activeData].sort()[activeData.length - 1].y + 200} 亿元</p>
              {/* eslint-disable-next-line standard/computed-property-even-spacing */}
              <p>{[...activeData].sort()[Math.floor(activeData.length / 2)].y} 亿元</p>
            </div>
          )
        }
        {
          activeData && (
            <div className={styles.activeChartLegend}>
              <span>00:00</span>
              <span>{activeData[Math.floor(activeData.length / 2)].x}</span>
              <span>{activeData[activeData.length - 1].x}</span>
            </div>
          )
        }
      </div>
    )
  }
}

export default ActiveChart
