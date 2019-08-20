import { asyncComponent } from '@/components/AsyncComponent'

const UserLayout = asyncComponent(() => import(/* webpackChunkName:'userLayout' */'@/layouts/UserLayout'))
const BasicLayout = asyncComponent(() => import(/* webpackChunkName:'basicLayout' */'@/layouts/BasicLayout'))

const Login = asyncComponent(() => import(/* webpackChunkName:'login' */'@/pages/User/Login'))
const Analysis = asyncComponent(() => import(/* webpackChunkName:'analysis' */'@/pages/Dashboard/Analysis'))

export const getRouterList = () => {
  return {
    '/': {
      name: '首页',
      component: BasicLayout
    },
    '/dashboard/analysis': {
      name: '分析页',
      component: Analysis
    },
    '/user': {
      name: '账户',
      component: UserLayout
    },
    '/user/login': {
      name: '登录',
      component: Login
    },
  }
}
