import { LucideIcon } from 'lucide-react';

export type TMenuItem = {
  id: number;
  menu: string;
  icon: LucideIcon;
  path: string;
};

export type TMenus = TMenuItem[];

type TRoutePaths = 'dashboard' | 'menu' | 'order' | 'setting';
export type TMappedRoutePaths = { [key in TRoutePaths]: string };
