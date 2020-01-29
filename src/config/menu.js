// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

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
    path: '/help',
    icon: 'help',
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: 'email',
  },
];

export { asideMenuConfig };
