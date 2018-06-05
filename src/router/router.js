import UserLayout from '../layouts/userLayout'
import BasicLayout from '../layouts/basicLayout'
import Login from '../pages/user/login'
import Register from '../pages/user/register'
import RegisterResult from '../pages/user/registerResult'
import Analysis from '../pages/dashboard/analysis'
import Monitor from '../pages/dashboard/monitor'
import Workplace from '../pages/dashboard/workplace'
import BasicForm from '../pages/forms/basicForm'
import AdvancedForm from '../pages/forms/advancedForm'
import StepForm from '../pages/forms/stepForm'
import Step1 from '../pages/forms/stepForm/step1'
import Step2 from '../pages/forms/stepForm/step2'
import Step3 from '../pages/forms/stepForm/step3'

import TableList from '../pages/list/tableList'
import BasicList from '../pages/list/basicList'
import CardList from '../pages/list/cardList'
import List from '../pages/list/list'
import Projects from '../pages/list/projects'
import Applications from '../pages/list/applications'
import Articles from '../pages/list/articles'
import BasicProfile from '../pages/profile/basicProfile'
import AdvancedProfile from '../pages/profile/advancedProfile'
import Success from '../pages/result/success'
import Error from '../pages/result/error'
import Three from '../pages/exception/403'
import Four from '../pages/exception/404'
import Five from '../pages/exception/500'
import Trigger from '../pages/exception/trigger'

export const getRouterData = () => {
  const routerConfig = {
    '/': {
      name: '',
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
      component: Trigger,
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