import React, { FC } from 'react'
import moment from 'moment'
import { Avatar } from 'antd'
import styles from './index.less'

interface ArticleListContentProps {
  data: {
    content: any;
    updatedAt: any;
    avatar: string;
    owner: string;
    href: string;
  }
}

const ArticleListContent: FC<ArticleListContentProps> = ({ data: { content, updatedAt, avatar, owner, href } }) => (
  <div className={styles.listContent}>
    <div className={styles.description}>
      {content}
    </div>
    <div className={styles.extra}>
      <Avatar src={avatar} size='small'/>
      <a href={href}>{owner}</a> 发布在 <a href={href}>{href}</a>
      <em>{moment(updatedAt).format('YYYY-MM-DD HH:mm')}</em>
    </div>
  </div>
)

export default ArticleListContent
