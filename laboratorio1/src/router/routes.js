
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ 'pages/Index.vue')
      },
      {
        path: '/list-products',
        name: 'list-products',
        component: () => import(/* webpackChunkName: "list-products" */ '../modules/products/views/list-products.vue')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
