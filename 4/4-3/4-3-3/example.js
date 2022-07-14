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

// <router-view>に直接読み込まれる
router.push({ name:'user', params:{ userId:123 } })

var app = new Vue({
	el:'#app',
	router
})