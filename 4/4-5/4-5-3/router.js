const router = new VueRouter({
  routes: [
    {
      path: '/a',
      component: A,
      alias: '/b'
    },
    {
      path: '/c',
      component: C,
      alias: ['/d', '/e']
    }
  ]
})