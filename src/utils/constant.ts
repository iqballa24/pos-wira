import { GalleryVerticalEnd, HomeIcon, LayoutGridIcon, SettingsIcon } from 'lucide-react';

import { TMappedRoutePaths, TMenus } from '@/utils/type';

export const PATHS: TMappedRoutePaths = {
  dashboard: '/',
  menu: '/menu',
  order: '/orders',
  setting: '/settings',
};

export const MENUS: TMenus = [
  {
    id: 1,
    menu: 'Dashboard',
    path: PATHS.dashboard,
    icon: HomeIcon,
  },
  {
    id: 2,
    menu: 'Menu',
    path: PATHS.menu,
    icon: LayoutGridIcon,
  },
  {
    id: 3,
    menu: 'Order',
    path: PATHS.order,
    icon: GalleryVerticalEnd,
  },
  {
    id: 4,
    menu: 'Settings',
    path: PATHS.setting,
    icon: SettingsIcon,
  },
];
