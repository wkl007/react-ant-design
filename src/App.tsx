import React, { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { getRouterList } from '@/router'

interface AppProps {
  userInfo: string;
}

const App: FC<AppProps> = (props) => {
  const { userInfo } = props
  const routerList: any = getRouterList()
  const UserLayout = routerList['/user'].component
  const BasicLayout = routerList['/'].component
  return (
    <div className='App'>
      <Switch>
        <Route path='/user' render={(props) => {
          return !userInfo
            ? <UserLayout {...props} routerList={routerList}/>
            : <Redirect to='/'/>
        }}/>
        <Route path='/' render={(props) => {
          return userInfo
            ? <BasicLayout {...props} routerList={routerList}/>
            : <Redirect to='/user/login'/>
        }}/>
      </Switch>
    </div>
  )
}

const mapStateToProps = (state: AppProps) => ({ userInfo: state.userInfo })

export default connect(mapStateToProps)(App)
