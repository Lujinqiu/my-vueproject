//引入Vue，因为第三部用到Vue
import Vue from 'vue';



//1.安装
//2.引用路由插件
import VueRouter from 'vue-router';
//3.使用插件
Vue.use(VueRouter);




//4.2创建各个上面要渲染出来的‘组件’，本来应该是Vue.component的，现在丢给路由内部去创建
import Home from '@com/home';
import Cart from '@com/cart';
import Mine from '@com/mine';
import List from '@com/list';
import Baihe from '@com/baihe';
import Login from '@com/Login';




//4.1创建各个要跳的路由，是哈斯路由，就是在#后面拼接
const routes = [
    // {path:'/', component: Home },
    {name:'shouye',path:'/home', component: Home },
    {path:'/cart', component: Cart },
    {path:'/mine', component: Mine },
    {path:'/list', component: List },
    {path:'/login', component: Login },
    {path:'/baihe', component: Baihe },
    {path:'',redirect:{name:'shouye'}}
]
//4.实例化路由
let router = new VueRouter({
    routes
    
});

export default router;