// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: '主页',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill')
  },
  {
    title: '用户模块',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill')
  },
  {
    title: '产品模块',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill')
  },
  {
    title: '博客模块',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill')
  },
  {
    title: '登陆页',
    path: '/login',
    icon: getIcon('eva:lock-fill')
  },
  {
    title: '注册页',
    path: '/register',
    icon: getIcon('eva:person-add-fill')
  },
  {
    title: '404页面',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill')
  }
];

export default sidebarConfig;
