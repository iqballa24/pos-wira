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

export const DUMMY_ORDER = [
  {
    id: 1,
    customerName: 'Iqbal Nugraha',
    total: 12,
    price: 40000,
  },
  {
    id: 2,
    customerName: 'Aisyah Putri',
    total: 8,
    price: 25000,
  },
  {
    id: 3,
    customerName: 'Rizky Pratama',
    total: 15,
    price: 50000,
  },
  {
    id: 4,
    customerName: 'Siti Mawar',
    total: 10,
    price: 35000,
  },
  {
    id: 5,
    customerName: 'Budi Santoso',
    total: 20,
    price: 75000,
  },
];

export const DUMMY_CATEGORY = [
  { id: 1, category: 'All Category' },
  { id: 2, category: 'Food' },
  { id: 3, category: 'Drinks' },
  { id: 4, category: 'Salad' },
  { id: 5, category: 'Soup' },
  { id: 6, category: 'Dessert' },
  { id: 7, category: 'Ice Cream' },
  { id: 8, category: 'Favourite' },
];

export const DUMMY_MENU = [
  {
    name: 'Soto Ayam',
    category: 'Soup',
    price: 30000,
    image:
      'https://img.freepik.com/free-photo/close-up-high-protein-soup-meal_23-2149098849.jpg?semt=ais_hybrid&w=740',
  },
  {
    name: 'Nasi Goreng',
    category: 'Fried Rice',
    price: 25000,
    image:
      'https://img.freepik.com/free-photo/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food_1150-26576.jpg',
  },
  {
    name: 'Mie Ayam',
    category: 'Noodles',
    price: 22000,
    image:
      'https://media.istockphoto.com/id/1158581649/photo/indonesia-chicken-noodles.jpg?s=612x612&w=0&k=20&c=dvaOXP6wS3sOrIc0CYjGPXpbtBCrwdHIDHBhNb8cjbg=',
  },
  {
    name: 'Bakso',
    category: 'Meatball Soup',
    price: 27000,
    image: 'https://assets.unileversolutions.com/recipes-v2/245281.jpg',
  },
  {
    name: 'Rendang',
    category: 'Beef',
    price: 45000,
    image:
      'https://media.istockphoto.com/id/165179871/id/foto/daging-sapi-rendang.jpg?s=612x612&w=0&k=20&c=iDUP84wDJ6K-uSmPootsy_G-UFlf-ChOjI3NBhVG-AE=',
  },
  {
    name: 'Gado-Gado',
    category: 'Vegetarian',
    price: 20000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Gado_gado.jpg',
  },
  {
    name: 'Ayam Bakar',
    category: 'Grilled Chicken',
    price: 32000,
    image:
      'https://img-global.cpcdn.com/recipes/57a60da76c70f5d1/680x482cq70/ayam-cincane-khas-kaltim-foto-resep-utama.jpg',
  },
  {
    name: 'Ikan Bakar',
    category: 'Grilled Fish',
    price: 40000,
    image:
      'https://media.istockphoto.com/id/488513858/id/foto/ikan-bakar-dengan-kentang-goreng-dan-salad-pemandangan-atas-horizontal.jpg?s=612x612&w=is&k=20&c=g4XfrjQWpQnTs36oqd14sYWiMoHOj41hF_zmQ8N-fxI=',
  },
  {
    name: 'Sate Ayam',
    category: 'Satay',
    price: 28000,
    image: 'https://www.dapurkobe.co.id/wp-content/uploads/sate-ayam.jpg',
  },
  {
    name: 'Tempe Mendoan',
    category: 'Snack',
    price: 15000,
    image:
      'https://asset.kompas.com/crops/eGl0yREJLuloJTp9LCNtiSZV6dk=/4x2:972x648/1200x800/data/photo/2022/09/21/632aa5001639f.jpg',
  },
  {
    name: 'Soto Ayam',
    category: 'Soup',
    price: 30000,
    image:
      'https://img.freepik.com/free-photo/close-up-high-protein-soup-meal_23-2149098849.jpg?semt=ais_hybrid&w=740',
  },
  {
    name: 'Nasi Goreng',
    category: 'Fried Rice',
    price: 25000,
    image:
      'https://img.freepik.com/free-photo/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food_1150-26576.jpg',
  },
  {
    name: 'Mie Ayam',
    category: 'Noodles',
    price: 22000,
    image:
      'https://media.istockphoto.com/id/1158581649/photo/indonesia-chicken-noodles.jpg?s=612x612&w=0&k=20&c=dvaOXP6wS3sOrIc0CYjGPXpbtBCrwdHIDHBhNb8cjbg=',
  },
  {
    name: 'Bakso',
    category: 'Meatball Soup',
    price: 27000,
    image: 'https://assets.unileversolutions.com/recipes-v2/245281.jpg',
  },
  {
    name: 'Rendang',
    category: 'Beef',
    price: 45000,
    image:
      'https://media.istockphoto.com/id/165179871/id/foto/daging-sapi-rendang.jpg?s=612x612&w=0&k=20&c=iDUP84wDJ6K-uSmPootsy_G-UFlf-ChOjI3NBhVG-AE=',
  },
  {
    name: 'Gado-Gado',
    category: 'Vegetarian',
    price: 20000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Gado_gado.jpg',
  },
  {
    name: 'Ayam Bakar',
    category: 'Grilled Chicken',
    price: 32000,
    image:
      'https://img-global.cpcdn.com/recipes/57a60da76c70f5d1/680x482cq70/ayam-cincane-khas-kaltim-foto-resep-utama.jpg',
  },
  {
    name: 'Ikan Bakar',
    category: 'Grilled Fish',
    price: 40000,
    image:
      'https://media.istockphoto.com/id/488513858/id/foto/ikan-bakar-dengan-kentang-goreng-dan-salad-pemandangan-atas-horizontal.jpg?s=612x612&w=is&k=20&c=g4XfrjQWpQnTs36oqd14sYWiMoHOj41hF_zmQ8N-fxI=',
  },
  {
    name: 'Sate Ayam',
    category: 'Satay',
    price: 28000,
    image: 'https://www.dapurkobe.co.id/wp-content/uploads/sate-ayam.jpg',
  },
];
