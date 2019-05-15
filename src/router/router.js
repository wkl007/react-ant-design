import UserLayout from '../layouts/UserLayout'
import BasicLayout from '../layouts/BasicLayout'
import Login from '../pages/User/Login'
import Register from '../pages/User/Register'
import RegisterResult from '../pages/User/RegisterResult'
import Analysis from '../pages/Dashboard/Analysis'
import Monitor from '../pages/Dashboard/Monitor'
import Workplace from '../pages/Dashboard/Workplace'
import BasicForm from '../pages/Forms/BasicForm'
import AdvancedForm from '../pages/Forms/AdvancedForm'
import StepForm from '../pages/Forms/StepForm'
import Step1 from '../pages/Forms/StepForm/Step1'
import Step2 from '../pages/Forms/StepForm/Step2'
import Step3 from '../pages/Forms/StepForm/Step3'

import TableList from '../pages/List/TableList'
import BasicList from '../pages/List/BasicList'
import CardList from '../pages/List/CardList'
import List from '../pages/List/List'
import Projects from '../pages/List/Projects'
import Applications from '../pages/List/Applications'
import Articles from '../pages/List/Articles'
import BasicProfile from '../pages/Profile/BasicProfile'
import AdvancedProfile from '../pages/Profile/AdvancedProfile'
import Success from '../pages/Result/Success'
import Error from '../pages/Result/Error'
import Three from '../pages/Exception/403'
import Four from '../pages/Exception/404'
import Five from '../pages/Exception/500'
import TriggerException from '../pages/Exception/TriggerException'

import Center from '../pages/Account/Center/Center'
import CenterArticles from '../pages/Account/Center/Articles'
import CenterApplications from '../pages/Account/Center/Applications'
import CenterProjects from '../pages/Account/Center/Projects'
import Info from '../pages/Account/Settings/Info'
import InfoBase from '../pages/Account/Settings/BaseView'
import InfoSecurity from '../pages/Account/Settings/SecurityView'
import InfoBinding from '../pages/Account/Settings/BindingView'
import InfoNotification from '../pages/Account/Settings/Notification'

export const getRouterData = () => {
  const routerConfig = {
    '/': {
      name: '首页',
      component: BasicLayout,
    },
    '/dashboard/analysis': {
      name: '分析页',
      component: Analysis,
    },
    '/dashboard/monitor': {
      name: '监控页',
      component: Monitor,
    },
    '/dashboard/workplace': {
      name: '工作台',
      component: Workplace,
    },
    '/form/basic-form': {
      name: '基础表单',
      component: BasicForm,
    },
    '/form/advanced-form': {
      name: '高级表单',
      component: AdvancedForm,
    },
    '/form/step-form': {
      name: '分步表单',
      component: StepForm,
    },
    '/form/step-form/info': {
      name: '分步表单（填写转账信息）',
      component: Step1,
    },
    '/form/step-form/confirm': {
      name: '分步表单（确认转账信息）',
      component: Step2,
    },
    '/form/step-form/result': {
      name: '分步表单（完成）',
      component: Step3,
    },
    '/list/table-list': {
      name: '查询表格',
      component: TableList,
    },
    '/list/basic-list': {
      name: '标准列表',
      component: BasicList,
    },
    '/list/card-list': {
      name: '卡片列表',
      component: CardList,
    },
    '/list/search': {
      name: '搜索列表',
      component: List,
    },
    '/list/search/projects': {
      name: '项目列表',
      component: Projects,
    },
    '/list/search/applications': {
      name: '应用列表',
      component: Applications,
    },
    '/list/search/articles': {
      name: '文章列表',
      component: Articles,
    },
    '/profile/basic': {
      name: '基础详情',
      component: BasicProfile,
    },
    '/profile/advanced': {
      name: '基础详情',
      component: AdvancedProfile,
    },
    '/result/success': {
      name: '成功页面',
      component: Success,
    },
    '/result/fail': {
      name: '成功页面',
      component: Error,
    },
    '/exception/403': {
      name: '403',
      component: Three,
    },
    '/exception/404': {
      name: '404',
      component: Four,
    },
    '/exception/500': {
      name: '500',
      component: Five,
    },
    '/exception/trigger': {
      name: 'trigger',
      component: TriggerException,
    },
    '/account/center': {
      name: '个人中心',
      component: Center,
    },
    '/account/center/articles': {
      name: '个人中心',
      component: CenterArticles,
    },
    '/account/center/applications': {
      name: '个人中心',
      component: CenterApplications,
    },
    '/account/center/projects': {
      name: '个人中心',
      component: CenterProjects,
    },
    '/account/settings': {
      name: '个人设置',
      component: Info,
    },
    '/account/settings/base': {
      name: '个人设置',
      component: InfoBase,
    },
    '/account/settings/security': {
      name: '个人设置',
      component: InfoSecurity,
    },
    '/account/settings/binding': {
      name: '个人设置',
      component: InfoBinding,
    },
    '/account/settings/notification': {
      name: '个人设置',
      component: InfoNotification,
    },
    '/user': {
      name: '账户',
      component: UserLayout,
    },
    '/user/login': {
      name: '登录',
      component: Login,
    },
    '/user/register': {
      name: '注册',
      component: Register,
    },
    '/user/register-result': {
      name: '注册结果',
      component: RegisterResult,
    },
  }
  return routerConfig
}
