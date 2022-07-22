var User = `
<div class="user">
  <h2>ユーザIDは {{ $route.params.userId }} です。</h2>
  <router-link :to="\'/user/\' + $route.params.userId + \'/profile\'">ユーザプロフィール</router-link>
  <router-link :to="\'/user/\' + $route.params.userId + \'/posts\'">ユーザの投稿</router-link>
  <router-view></router-view>
</div>
`

var UserProfile = `
<div class="user-profile">
  <h3>こちらはユーザー {{ $route.params.userId }} のプロフィールページです。</h3>
</div>
`

var UserPosts = `
<div class="user-post">
  <h3>こちらはユーザー {{ $route.params.userId }} の投稿ページです。</h3>
</div>`

const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User,
      children: [
        {
        path: 'profile',
        component: UserProfile
        },
        {
        path: 'posts',
        component: UserPosts
        },
      ]
    }
  ]
})