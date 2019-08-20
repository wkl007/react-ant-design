import { isUrl } from '@/utils/utils'

const menuList = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    path: 'dashboard',
    children: [
      {
        name: '分析页',
        path: 'analysis'
      },
    ]
  },
]

/**
 *
 * @param data
 * @param parentPath
 * @param parentAuthority
 */
function formatter (data: any, parentPath: string = '/', parentAuthority?: string) {
  return data.map((item: { path: any; authority?: any; children?: any; }) => {
    let { path } = item
    if (!isUrl(path)) {
      path = parentPath + item.path
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority
    }
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`,
        item.authority)
    }
    return result
  })
}

export const getMenuData = () => formatter(menuList)
