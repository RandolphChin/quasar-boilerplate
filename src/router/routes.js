const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/IndexPage.vue')},
      {path: '/profile', component: () => import('pages/Profile.vue')},
      {path: '/contact', component: () => import('pages/Contact.vue')},
      // {path: '/login', component: () => import('pages/Login.vue')},
      {path: '/product', component: () => import('pages/ProductCatalogues.vue')}
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Login.vue')}
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
