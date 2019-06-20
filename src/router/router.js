import { asyncComponent } from '../components/AsyncComponent'

import Projects from '../pages/List/Projects'
import Applications from '../pages/List/Applications'
import Articles from '../pages/List/Articles'

import Step1 from '../pages/Forms/StepForm/Step1'
import Step2 from '../pages/Forms/StepForm/Step2'
import Step3 from '../pages/Forms/StepForm/Step3'

import CenterArticles from '../pages/Account/Center/Articles'
import CenterApplications from '../pages/Account/Center/Applications'
import CenterProjects from '../pages/Account/Center/Projects'
import InfoBase from '../pages/Account/Settings/BaseView'
import InfoSecurity from '../pages/Account/Settings/SecurityView'
import InfoBinding from '../pages/Account/Settings/BindingView'
import InfoNotification from '../pages/Account/Settings/Notification'

const UserLayout = asyncComponent(() => import(/* webpackChunkName:'userLayout' */'../layouts/UserLayout'))
const BasicLayout = asyncComponent(() => import(/* webpackChunkName:'basicLayout' */'../layouts/BasicLayout'))
const Login = asyncComponent(() => import(/* webpackChunkName:'login' */'../pages/User/Login'))
const Register = asyncComponent(() => import(/* webpackChunkName:'register' */'../pages/User/Register'))
const RegisterResult = asyncComponent(() => import(/* webpackChunkName:'registerResult' */'../pages/User/RegisterResult'))

const Analysis = asyncComponent(() => import(/* webpackChunkName:'analysis' */'../pages/Dashboard/Analysis'))
const Monitor = asyncComponent(() => import(/* webpackChunkName:'monitor' */'../pages/Dashboard/Monitor'))
const Workplace = asyncComponent(() => import(/* webpackChunkName:'workplace' */'../pages/Dashboard/Workplace'))
const BasicForm = asyncComponent(() => import(/* webpackChunkName:'basicForm' */'../pages/Forms/BasicForm'))
const AdvancedForm = asyncComponent(() => import(/* webpackChunkName:'advancedForm' */'../pages/Forms/AdvancedForm'))
const StepForm = asyncComponent(() => import(/* webpackChunkName:'stepForm' */'../pages/Forms/StepForm'))

const TableList = asyncComponent(() => import(/* webpackChunkName:'tableList' */'../pages/List/TableList'))
const BasicList = asyncComponent(() => import(/* webpackChunkName:'basicList' */'../pages/List/BasicList'))
const CardList = asyncComponent(() => import(/* webpackChunkName:'cardList' */'../pages/List/CardList'))
const List = asyncComponent(() => import(/* webpackChunkName:'list' */'../pages/List/List'))

const BasicProfile = asyncComponent(() => import(/* webpackChunkName:'basicProfile' */'../pages/Profile/BasicProfile'))
const AdvancedProfile = asyncComponent(() => import(/* webpackChunkName:'advancedProfile' */'../pages/Profile/AdvancedProfile'))
const Success = asyncComponent(() => import(/* webpackChunkName:'success' */'../pages/Result/Success'))
const Error = asyncComponent(() => import(/* webpackChunkName:'error' */'../pages/Result/Error'))
const Three = asyncComponent(() => import(/* webpackChunkName:'three' */'../pages/Exception/403'))
const Four = asyncComponent(() => import(/* webpackChunkName:'four' */'../pages/Exception/404'))
const Five = asyncComponent(() => import(/* webpackChunkName:'five' */'../pages/Exception/500'))
const TriggerException = asyncComponent(() => import(/* webpackChunkName:'triggerException' */'../pages/Exception/TriggerException'))

const Center = asyncComponent(() => import(/* webpackChunkName:'center' */'../pages/Account/Center/Center'))
const Info = asyncComponent(() => import(/* webpackChunkName:'info' */'../pages/Account/Settings/Info'))

const Flow = asyncComponent(() => import(/* webpackChunkName:'flow' */'../pages/Editor/Flow'))
const Koni = asyncComponent(() => import(/* webpackChunkName:'koni' */'../pages/Editor/Koni'))
const Mind = asyncComponent(() => import(/* webpackChunkName:'mind' */'../pages/Editor/Mind'))

export const getRouterData = () => {
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
    '/list/search/projects': {
      name: '项目列表',
      component: Projects
    },
    '/list/search/applications': {
      name: '应用列表',
      component: Applications
    },
    '/list/search/articles': {
      name: '文章列表',
      component: Articles
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
      name: '成功页面',
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
    '/account/center/articles': {
      name: '个人中心',
      component: CenterArticles
    },
    '/account/center/applications': {
      name: '个人中心',
      component: CenterApplications
    },
    '/account/center/projects': {
      name: '个人中心',
      component: CenterProjects
    },
    '/account/settings': {
      name: '个人设置',
      component: Info
    },
    '/account/settings/base': {
      name: '个人设置',
      component: InfoBase
    },
    '/account/settings/security': {
      name: '个人设置',
      component: InfoSecurity
    },
    '/account/settings/binding': {
      name: '个人设置',
      component: InfoBinding
    },
    '/account/settings/notification': {
      name: '个人设置',
      component: InfoNotification
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
