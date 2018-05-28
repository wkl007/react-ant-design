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