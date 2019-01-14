
<template>
    <div class='page'>
        <div class="main">
        <div class='top' id='top'>
            <mt-header >
                  <router-link to="/" slot="left" @click.native="goto('List')">
                    <p class='iconfont icon-list' id='tl'  ></p>
                  </router-link>
                  <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png">
                  <mt-button slot="right" @click.native="goto('Login')">登录</mt-button>
            </mt-header>
        </div>

        <div class="lunbo">
        <mt-swipe :auto="4000">
          <mt-swipe-item><img  src="https://img02.hua.com/slider/18_youflower_m.jpg" /></mt-swipe-item>
          <mt-swipe-item><img  src="https://img02.hua.com/slider/18_birthday_m.jpg" /></mt-swipe-item>
          <mt-swipe-item><img  src="https://img02.hua.com/zhuanti/xingzuo/images/17_mjz_theme_m.jpg"/></mt-swipe-item>
        </mt-swipe>
        </div>
        <div id='long'>
            <mt-navbar v-model="selected">
                <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.name)">
                    <i class='iconfont icon-duihao2'></i>
                    {{tab.title}}
                </mt-tab-item>
            </mt-navbar>
            <router-view/>
        </div>
        <div class='xianhua'>
            <div :id="item.name" v-for="item in goodslist" :key="item.name">
                <img :src="item.imgage"/>
                <div>{{item.name}}</div>
            </div>
        </div>
        <div>
            <img src="https://img02.hua.com/m/images/m_newuser_order.gif" alt="" />
        </div>
        <div class="modetitle">一秒选花</div>
        <div class='gift'>
            <div :id="item2.name" v-for="item2 in goodslist2" :key="item2.name">
                <img :src="item2.imgage"/>
                <div>{{item2.name}}</div>
            </div>
        </div>
        <div class='gift2'>
            <div :id="item3.name" v-for="item3 in goodslist3" :key="item3.name">
                <img :src="item3.imgage"/>
                <div>{{item3.name}}</div>
            </div>
        </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import axios from 'axios';
    // import shuju from '../../data.json';
    export default {
        data() {
            return {tabs:[
                    {
                      title: "认证龙头",
                      name: "baimei"
                    },
                    {
                      title: "14年品质",
                      name: "hon"
                    },
                    {
                      title: "3小时送达",
                      name: "baihe"
                    },
                    {
                      title: "最近条数",
                      name: "xinpin"
                    }],
                    goodslist:[],
                    goodslist2:[],
                    goodslist3:[],

                    selected:'Home'
            };

        },

    methods:{
        goto(name){
            this.$router.push({path:name})
        }
        // getData(){
        //   this.$axios.post()
        // }
    },

    
    watch:{//   监听数据：数据有修改自动执行
        //   selected(newValue,oldValue){
        //       console.log(newValue,oldValue)
        //   },
        $route(newValue,oldValue){
              // console.log(newValue,oldValue)
        }
    }, 
    mounted(){
      console.log(this.$route.params.type)
    },
    created(){
        axios.get('../data.json').then(res=>{
            console.log(res)
            let arr=res.data.slice(0,5);
            let arr2 = res.data.slice(5,8);
            let arr3 = res.data.slice(8,12);

            // console.log(arr)
            console.log(arr2)
            this.goodslist=arr;
            this.goodslist2=arr2;
            this.goodslist3=arr3;

            // console.log(this.goodslist2)

        })
    },
}
    
</script>
<style type="text/css">
   .page{overflow: auto;}
   .main{padding-bottom: 61px;}
    .lunbo{
        height:150px;
        width:100%;
    }
    #tl{margin-top:5px;}
    .mint-header{background-color:#435448;}
    .mint-header-title{background:url('https://m.hua.com/content/vue/login/static/img/m_hualogo.png')no-repeat 0 9px;height:38px;background-size:100%;}
    #long{height: 30px;color:#5C5F69;}
    #long .mint-tab-item {padding:7px 0;line-height: 30px;}  
    .xianhua{width: 100%;height: 52px;padding: 8px 0;display:flex;}
    .xianhua>div{width:20%;height: 52px;display:flex;flex-direction:column;align-items:center;}
    .xianhua img{width:30px;height:30px;}   
    .xianhua>div>div{font-size:12px;color:#232628;}
    .modetitle{align-items: center;padding: 0.85714286rem;line-height: 1em;font-size: 14px;}
    .modetitle::before{content:'';display:inline-block;background: #435448;width:3px;margin-right: 6px;height: 14px;}
    .gift{height: 130px;display:flex;padding:0 6px;}
    .gift>div{margin:0 2px;position:relative;}
    .gift>div>div{position:absolute;left:50%;top: 8px;font-size: 14px;transform: translateX(-50%);}
    .gift2{height: 90px;display:flex;padding:7px 6px 0 6px;}
    .gift2>div{margin:0 2px;position:relative;}
    .gift2>div>div{position:absolute;left:17%;top: 8px;font-size: 12px;}
    
</style>