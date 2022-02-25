import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }, 
    { path: '/Equipment', component: () => import('pages/Equipament/Equipment.vue') },
    { path: '/workOrder', component: () => import('pages/Equipament/Equipment.vue') },
    { path: '/list-equipment', component: () => import('pages/Equipament/listEquipment.vue') },
    { path: '/addDepartment', component: () => import('pages/Department/addDepartment.vue') },
    { path: '/listDepartment', component: () => import('pages/Department/listDepartment.vue') },
    { path: '/Department', component: () => import('pages/Department/Department.vue') },
    { path: '/listLocal', component: () => import('pages/Local/listLocal.vue') },
    { path: '/addserviceType', component: () => import('pages/ServiceType/addServiceType.vue') },
    { path: '/listserviceType', component: () => import('pages/ServiceType/listServiceType.vue') },
    { path: '/assetTree', component: () => import('pages/AssetTree/AssetTree.vue') },
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
