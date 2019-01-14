<template>
    <div class='apipi'>
        <router-view/>
        <mt-tabbar v-model="selected"> 
            <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native='goto(tab.path)'>
                <!-- <myicons :type="tab.icon" /> -->
                <p class='iconfont ' :class='tab.icon'></p>
                {{tab.text}}
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
Vue.prototype.$axios = axios;

//引入MintUI插件
import MintUI from 'mint-ui';
//使用MintUI
Vue.use(MintUI);
//引入样式
import 'mint-ui/lib/style.css';
import myicons from './plugins/icons.js';
import './sass/common.scss';
Vue.use(myicons);
// console.log(myicons)
//按需引入
//1.配置webpack
//2.引入某个组件，例如按钮
//import {Button,Cell} from 'mint-ui';
//Vue.use(Button);
//Vue.use(Cell);
//上面两个可能有些浏览器不支持，就要按照下面这个引入
//Vue.component(Button.name,Buttom);
//Vue.component(Cell.name,Cell);
export default {
    data(){
        return {
            tabs:[
                {
                   text:'首页',
                   icon:'icon-home',
                   path:'/home',
                   name:'Home'
                },
                {
                   text:'分类',
                   path:'/list',
                   icon:'icon-list',
                   name:'List'
                },
                {
                   text:'购物车',
                   path:'cart',
                   icon:'icon-cart2e',
                   name:'Cart'
                },
                {
                   text:'我的',
                   path:'mine',
                   icon:'icon-wode',
                   name:'Mine'
                }
            ],
            selected:'Home'

        }
    },
    methods:{
      goto(path){
       this.$router.push({path});
      }
    }
};
</script>

<style lang="scss">
    .current{
        color:red;
        font-weight: bold;
    }
    .iconfont{
      margin-bottom:3px ;
    }
    
    .mint-tabbar{
      .is-selected{
        .mint-tab-item-label{color:#FF4015;}
      }
    }
      
</style>