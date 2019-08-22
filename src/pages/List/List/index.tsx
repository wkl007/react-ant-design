import React, { FC, Component } from 'react'
import { match } from 'react-router'
import { History } from 'history'
import { Route, Switch } from 'react-router-dom'
import { Input } from 'antd'
import PageHeaderWrapper from '@/components/PageHeader'
import { getRouterList } from '@/router'
import { getRoutes } from '@/utils/utils'

const tabList = [
  {
    key: 'articles',
    tab: '文章'
  },
  {
    key: 'projects',
    tab: '项目'
  },
  {
    key: 'applications',
    tab: '应用'
  }
]

interface ListProps {
  history: History,
  location: Location,
  match: match
}

class List extends Component<ListProps> {
  // tab切换
  handleTabChange = (key: any) => {
    const { match, history } = this.props
    switch (key) {
      case 'articles':
        history.push(`${match.url}/articles`)
        break
      case 'applications':
        history.push(`${match.url}/applications`)
        break
      case 'projects':
        history.push(`${match.url}/projects`)
        break
      default:
        break
    }
  }

  render () {
    const { location, match } = this.props
    const routerList = getRouterList()
    const routes = getRoutes(match.path, routerList)
    const mainSearch = (
      <div style={{ textAlign: 'center' }}>
        <Input.Search
          placeholder='请搜索'
          enterButton='搜索'
          size='large'
          onSearch={value => { console.log(value) }}
          style={{ width: 522 }}
        />
      </div>
    )
    return <PageHeaderWrapper
      title='搜索列表'
      content={mainSearch}
      tabList={tabList}
      tabActiveKey={location.pathname.replace(`${match.path}/`, '')}
      onTabChange={this.handleTabChange}
    >
      <Switch>
        {
          routes.map(item => (
            <Route
              key={item.key}
              path={item.path}
              component={item.component}
              exact={item.exact}
            />
          ))
        }
      </Switch>
    </PageHeaderWrapper>
  }
}

export default List
