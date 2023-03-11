export interface IMenu {
  id: number;
  path: string;
  name: string;
  label: string;
  icon: string;
  children: IMenu[];
}

export const menuList:IMenu[] = [
  {
    id: 1,
    path: '/',
    name: 'Home',
    label: '首页',
    icon: 'icon-shouye',
    children: []
  },
  {
    id: 2,
    path: '/doc',
    name: 'Doc',
    label: '文档',
    icon: 'icon-wendang',
    children: []
  },
  {
    id: 3,
    path: '/note',
    name: 'Note',
    label: '专栏',
    icon: 'icon-biji1',
    children: [
      {
        id: 31,
        path: '/note/front-end',
        name: 'NoteFrontEnd',
        label: '前端',
        icon: 'icon-biji1',
        children: []
      },
      {
        id: 32,
        path: '/note/back-end',
        name: 'NoteBackEnd',
        label: '后端',
        icon: 'icon-biji1',
        children: []
      },
      {
        id: 33,
        path: '/note/database',
        name: 'NoteDataBase',
        label: '数据库',
        icon: 'icon-biji1',
        children: []
      }
    ]
  },
  {
    id: 4,
    path: '/management',
    name: 'Management',
    label: '后台管理',
    icon: 'icon-xitong',
    children: [
      {
        id: 41,
        path: '/management/user',
        name: 'ManagementUser',
        label: '用户管理',
        icon: 'icon-biji',
        children: []
      },
      {
        id: 42,
        path: '/management/blog',
        name: 'ManagementBlog',
        label: '文章管理',
        icon: 'icon-biji',
        children: []
      },
      {
        id: 43,
        path: '/management/tags',
        name: 'ManagementTags',
        label: '标签管理',
        icon: 'icon-biji',
        children: []
      },
      {
        id: 44,
        path: '/management/config',
        name: 'ManagementConfig',
        label: '配置',
        icon: 'icon-biji',
        children: []
      }
    ]
  },
  {
    id: 5,
    path: '/time-line',
    name: 'TimeLine',
    label: '时间线',
    icon: 'icon-shijian',
    children: []
  }
];
