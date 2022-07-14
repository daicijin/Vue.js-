const router = new VueRouter({
  routes: [
		{
			path: '/top',
			component:{
					template: '<div>トップページです。</div>'
			}
		},
    {
			path:'/user/:userId',
			name: 'user',
			component:{
				template:'<div>ユーザIDは {{ $route.params.userId }} です。</div>'
			}
    }
  ]
})

var app = new Vue({
	el:'#app',
	router
})