// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置
import React, { Component } from 'react';
import DynamicIcon from '@icedesign/dynamic-icon';

const CustomIcon = DynamicIcon.create({
  fontFamily: 'iconfont',
  prefix: 'icon',
  css: '//at.alicdn.com/t/font_1627357_9hn4j8a8wq4.css',
});

class IconAnalysis extends Component {
  state = {};

  render() {
    return <CustomIcon type="analysis" />;
  }
}

const asideMenuConfig = [
  {
    name: 'Run m6APipe',
    path: '/dashboard',
    icon: <IconAnalysis />,
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
