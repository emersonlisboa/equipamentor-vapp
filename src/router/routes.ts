import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }, 
    { path: '/Equipment', component: () => import('pages/Equipament/Equipment.vue') },
    { path: '/list-equipment', component: () => import('pages/Equipament/listEquipment.vue') },
    { path: '/addDepartment', component: () => import('pages/Department/addDepartment.vue') },
    { path: '/Department', component: () => import('pages/Department/Department.vue') },
    { path: '/listLocal', component: () => import('pages/Local/listLocal.vue') },
  ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
