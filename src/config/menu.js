// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'email',
  },
  {
    name: '帮助',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'help',
  },
];

const asideMenuConfig = [
  {
    name: 'Run m6APipe',
    path: '/dashboard',
    icon: 'loading',
    children: [
      {
        name: 'Setting Parameter',
        path: '/dashboard/monitor',
      },
      {
        name: 'Workflow Log',
      },
    ],
  },
  {
    name: 'Help',
    path: '/chart',
    icon: 'help',
  },
  {
    name: 'Contact',
    path: '/table',
    icon: 'email',
    children: [
      {
        name: '基础表格',
        path: '/table/basic',
      },
      {
        name: '通用表格',
        path: '/table/general',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
