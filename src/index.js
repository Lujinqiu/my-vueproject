//实例化
//
import Vue from 'vue'
import App from './App.vue';
import '../font/iconfont.css';
// import shuju from '../data.json';
// console.log()

import router from './router/index.js';
//5.把router实例注入到Vue实例中，就是把router写在Vue里面就可以了

//实例化Vue,用来连接template.html页面的
new Vue({
    el:'#app',
    render:h=>h(App),

    // render(create){
    //          return create(App)
    //     }
    
    router 
});