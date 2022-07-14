const router = new VueRouter({
  routes: [
    {
			path:'user/:userId', // 「:」でパラメータを受け渡す
      component:{
        template:'<div>ユーザIDは{{ $route.params.userId }}です。</div>'
      }
    }
  ]
})