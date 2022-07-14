var UserList = {
	template: '#user-list',
	data: function() {
		return {
			users: function(){ return [] },
			error:null
		}
	},

	beforeRouteEnter: function(to, from, next) {
		getUsers((function(err,users){
			if(err){
				this.error = err.toString()
			} else {
				next(function(vm){
					vm.users = users
				})
			}
		}).bind(this))
	}
}

const router = new VueRouter({
  routes: [
		{
			path: '/top',
			component:{
					template: '<div>トップページです。</div>'
			}
		},
		{
			path: '/users',
			component:{
					template: '<div>ユーザ一覧ページです。</div>'
			},
			// // users?redirect=trueのときだけtopにリダイレクトするTOP関数
			// beforeEnter: function(to, from, next) {
			// 	alert(to.query.redirect)
			// 	if (to.query.redirect === 'false'){
			// 		next('/top')
			// 	} else {
			// 		next()
			// 	}
			// }	
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

router.push({ name:'user', params:{ userId:123 } })

// グローバルフック
// router.beforeEach(function(to, from, next) {

// 	// ユーザ一覧ページに行こうとするとトップページにリダイレクト
// 	if(to.path === '/users'){
// 		alert('トップ画面にリダイレクトします')
// 		next('/top')
// 	} else {
// 		next()
// 	}
// })

var app = new Vue({
	el:'#app',
	router
})