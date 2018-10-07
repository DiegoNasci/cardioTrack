
const routes = [
  {
    path: '/main',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'userList', component: () => import('pages/user/list.vue') },
      { path: 'userAdd', component: () => import('pages/user/add.vue') },
      { path: 'userEdit', component: () => import('pages/user/edit.vue') },
      { path: 'patientAdd', component: () => import('pages/patient/add.vue') },
      { path: 'patientList', component: () => import('pages/patient/list.vue') },
      { path: 'patientEdit', component: () => import('pages/patient/edit.vue') },
      { path: 'bamsAdd', component: () => import('pages/BAM/add.vue') },
      { path: 'bamsList', component: () => import('pages/BAM/list.vue') },
      { path: 'bamsListTime', component: () => import('pages/BAM/listTime.vue') },
      { path: 'examAdd', component: () => import('pages/exam/add.vue') },
      { path: 'examList', component: () => import('pages/exam/list.vue') },
      { path: 'reportAdd', component: () => import('pages/report/add.vue') },
      { path: 'reportList', component: () => import('pages/report/list.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('pages/login')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
