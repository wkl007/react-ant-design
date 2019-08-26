import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button, Result } from 'antd'
import { parse } from 'qs'
import styles from './index.less'

const extra: ReactNode = (
  <div className={styles.actions}>
    <span className='link-button'>
      <Button size='large' type='primary'>
        产看邮箱
      </Button>
    </span>
    <Link to='/'>
      <Button size='large'>返回首页</Button>
    </Link>
  </div>
)

interface RegisterResultProps {
  location: Location;
}

const RegisterResult: FC<RegisterResultProps> = (props) => {
  const { location } = props
  const data = parse(location.search.substring(1))
  return (
    <Result
      className={styles.registerResult}
      style={{ marginTop: 56 }}
      status='success'
      title={
        <div className={styles.title}>
          你的账户：{location.search ? data.mail : 'AntDesign@example.com'} 注册成功
        </div>
      }
      subTitle='激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。'
      extra={extra}
    />
  )
}

export default RegisterResult
