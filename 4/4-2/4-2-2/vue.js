var router = new VueRouter({
    routes:[
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
            }
        }
    ]
})

var app = new Vue({
    el:'#app',
    router
})