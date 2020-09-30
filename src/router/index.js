import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Menu = () => import('../views/menu/Menu.vue')
const More = () => import('../views/more/More.vue')
const Money = () => import('../views/money/Money.vue')
const Store= () => import('../views/store/Store.vue')
const StoreS= () => import('../views/store/StoreS.vue')
const MoneyLogin=() => import('../views/money/childComps/MoneyLogin.vue')
const MoneyForgot=() => import('../views/money/childComps/MoneyForgot.vue')
const MoneyRegister=() => import('../views/money/childComps/MoneyRegister.vue')
const MenuBeverages=() => import('../views/menu/childComps/MenuBeverages.vue')
const MenuFood=() => import('../views/menu/childComps/MenuFood.vue')
const MenuDetail=() => import('../views/menu/childComps/MenuDetail.vue')
const MenuCoffee=() => import('../views/menu/childComps/MenuCoffee.vue')
const MenuMerchandise=() => import('../views/menu/childComps/MenuMerchandise.vue')
const MoneyStarbucksRewards=() => import('../views/money/childComps/MoneyStarbucksRewards.vue')



// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '',
    component: Home
  },
  // {
  //   path: 'forgot-password',
  //   component: MoneyForgot
  // },
  {
    path: '/menu',
    component: Menu,
    children:[
      {
        path: 'beverages',
        component: MenuBeverages
      },
      {
        path: 'food',
        component: MenuFood
      },
      {
        path: 'coffee',
        component: MenuCoffee
      },
      {
        path: 'merchandise',
        component: MenuMerchandise
      },
      {
        path: 'detail',
        component: MenuDetail
      },
    ]
  },
  {
    path: '/more',
    component: More
  },
  {
    path: '/stores',
    component: StoreS
  },
  {
    path: '/money',
    component: Money,
    children:[
      {
        path: 'login',
        name: 'login',
        component: MoneyLogin
      },
      {
        path: '',
        component: MoneyLogin
      },
       {
        path: 'forgot-password',
        component: MoneyForgot
      },
      {
        path: 'register',
        name: 'register',
        component: MoneyRegister
      },
      {
        path: 'starbucks-rewards',
        name: 'starbucks-rewards',
        component: MoneyStarbucksRewards
      }
    ]
  },
  {
    path: '/store',
    component: Store
  },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

export default router
