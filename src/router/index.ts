import { asyncComponent } from '@/components/AsyncComponent'

const UserLayout = asyncComponent(() => import(/* webpackChunkName:'UserLayout' */'@/layouts/UserLayout'))
const BasicLayout = asyncComponent(() => import(/* webpackChunkName:'BasicLayout' */'@/layouts/BasicLayout'))

const Login = asyncComponent(() => import(/* webpackChunkName:'Login' */'@/pages/User/Login'))
const Register = asyncComponent(() => import(/* webpackChunkName:'Register' */'@/pages/User/Register'))
const RegisterResult = asyncComponent(() => import(/* webpackChunkName:'RegisterResult' */'@/pages/User/RegisterResult'))
const Analysis = asyncComponent(() => import(/* webpackChunkName:'Analysis' */'@/pages/Dashboard/Analysis'))

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
    '/user/register': {
      name: '注册',
      component: Register
    },
    '/user/register-result': {
      name: '注册结果',
      component: RegisterResult
    }
  }
}
