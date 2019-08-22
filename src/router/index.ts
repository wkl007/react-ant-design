import { asyncComponent } from '@/components/AsyncComponent'

import Step1 from '@/pages/Forms/StepForm/Step1'
import Step2 from '@/pages/Forms/StepForm/Step2'
import Step3 from '@/pages/Forms/StepForm/Step3'

const UserLayout = asyncComponent(() => import(/* webpackChunkName:'UserLayout' */'@/layouts/UserLayout'))
const BasicLayout = asyncComponent(() => import(/* webpackChunkName:'BasicLayout' */'@/layouts/BasicLayout'))

const Login = asyncComponent(() => import(/* webpackChunkName:'Login' */'@/pages/User/Login'))
const Register = asyncComponent(() => import(/* webpackChunkName:'Register' */'@/pages/User/Register'))
const RegisterResult = asyncComponent(() => import(/* webpackChunkName:'RegisterResult' */'@/pages/User/RegisterResult'))

const Analysis = asyncComponent(() => import(/* webpackChunkName:'Analysis' */'@/pages/Dashboard/Analysis'))
const Monitor = asyncComponent(() => import(/* webpackChunkName:'Monitor' */'@/pages/Dashboard/Monitor'))
const Workplace = asyncComponent(() => import(/* webpackChunkName:'Workplace' */'@/pages/Dashboard/Workplace'))

const BasicForm = asyncComponent(() => import(/* webpackChunkName:'BasicForm' */'@/pages/Forms/BasicForm'))
const AdvancedForm = asyncComponent(() => import(/* webpackChunkName:'AdvancedForm' */'@/pages/Forms/AdvancedForm'))
const StepForm = asyncComponent(() => import(/* webpackChunkName:'StepForm' */'@/pages/Forms/StepForm'))

const TableList = asyncComponent(() => import(/* webpackChunkName:'TableList' */'@/pages/List/TableList'))
const BasicList = asyncComponent(() => import(/* webpackChunkName:'BasicList' */'@/pages/List/BasicList'))
const CardList = asyncComponent(() => import(/* webpackChunkName:'CardList' */'@/pages/List/CardList'))
const List = asyncComponent(() => import(/* webpackChunkName:'List' */'@/pages/List/List'))

const BasicProfile = asyncComponent(() => import(/* webpackChunkName:'BasicProfile' */'@/pages/Profile/BasicProfile'))
const AdvancedProfile = asyncComponent(() => import(/* webpackChunkName:'AdvancedProfile' */'@/pages/Profile/AdvancedProfile'))

const Success = asyncComponent(() => import(/* webpackChunkName:'Success' */'@/pages/Result/Success'))
const Error = asyncComponent(() => import(/* webpackChunkName:'Error' */'@/pages/Result/Error'))

const Three = asyncComponent(() => import(/* webpackChunkName:'three' */'@/pages/Exception/403'))
const Four = asyncComponent(() => import(/* webpackChunkName:'four' */'@/pages/Exception/404'))
const Five = asyncComponent(() => import(/* webpackChunkName:'five' */'@/pages/Exception/500'))
const TriggerException = asyncComponent(() => import(/* webpackChunkName:'TriggerException' */'@/pages/Exception/TriggerException'))

const Center = asyncComponent(() => import(/* webpackChunkName:'Center' */'@/pages/Account/Center'))
const Info = asyncComponent(() => import(/* webpackChunkName:'Settings' */'@/pages/Account/Settings'))

const Flow = asyncComponent(() => import(/* webpackChunkName:'Flow' */'@/pages/Editor/Flow'))
const Koni = asyncComponent(() => import(/* webpackChunkName:'Koni' */'@/pages/Editor/Koni'))
const Mind = asyncComponent(() => import(/* webpackChunkName:'Mind' */'@/pages/Editor/Mind'))

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
    '/dashboard/monitor': {
      name: '监控页',
      component: Monitor
    },
    '/dashboard/workplace': {
      name: '工作台',
      component: Workplace
    },
    '/form/basic-form': {
      name: '基础表单',
      component: BasicForm
    },
    '/form/advanced-form': {
      name: '高级表单',
      component: AdvancedForm
    },
    '/form/step-form': {
      name: '分步表单',
      component: StepForm
    },
    '/form/step-form/info': {
      name: '分步表单（填写转账信息）',
      component: Step1
    },
    '/form/step-form/confirm': {
      name: '分步表单（确认转账信息）',
      component: Step2
    },
    '/form/step-form/result': {
      name: '分步表单（完成）',
      component: Step3
    },
    '/list/table-list': {
      name: '查询表格',
      component: TableList
    },
    '/list/basic-list': {
      name: '标准列表',
      component: BasicList
    },
    '/list/card-list': {
      name: '卡片列表',
      component: CardList
    },
    '/list/search': {
      name: '搜索列表',
      component: List
    },
    '/profile/basic': {
      name: '基础详情',
      component: BasicProfile
    },
    '/profile/advanced': {
      name: '基础详情',
      component: AdvancedProfile
    },
    '/result/success': {
      name: '成功页面',
      component: Success
    },
    '/result/fail': {
      name: '失败页面',
      component: Error
    },
    '/exception/403': {
      name: '403',
      component: Three
    },
    '/exception/404': {
      name: '404',
      component: Four
    },
    '/exception/500': {
      name: '500',
      component: Five
    },
    '/exception/trigger': {
      name: 'trigger',
      component: TriggerException
    },
    '/account/center': {
      name: '个人中心',
      component: Center
    },
    '/account/settings': {
      name: '个人设置',
      component: Info
    },
    '/editor/flow': {
      name: '流程编辑器',
      component: Flow
    },
    '/editor/koni': {
      name: '拓扑编辑器',
      component: Koni
    },
    '/editor/mind': {
      name: '脑图编辑器',
      component: Mind
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
