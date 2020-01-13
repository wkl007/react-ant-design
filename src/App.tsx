import React from 'react'
import { Button, ConfigProvider, DatePicker } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import dayjs from 'dayjs'
import { HomeOutlined, LoadingOutlined, SettingFilled, SmileOutlined, SyncOutlined } from '@ant-design/icons'

dayjs.locale('zh-cn')

const App: React.FC = () => {
  const handleChange = (date: any) => {
    console.log(dayjs(date).format('YYYY-MM-DD '))
  }

  return (
    <ConfigProvider locale={zhCN}>
      <div style={{ margin: '20px auto' }}>
        <DatePicker onChange={handleChange}/>
        <Button>按钮</Button>
        <HomeOutlined/>
        <SettingFilled/>
        <SmileOutlined/>
        <SyncOutlined spin/>
        <SmileOutlined rotate={180}/>
        <LoadingOutlined/>
      </div>
    </ConfigProvider>
  )
}

export default App
