<template>
    <div>
        <ul>
            <li v-for="item in wodetup">
              <img v-lazy="item">
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
    export default {
         data() {
        return {
      wodetup:['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546968909548&di=1fb522e71cacbc0a7dce84706f97da8a&imgtype=0&src=http%3A%2F%2Fs2.cdn.bbwc.cn%2Fissue_0%2Farticles%2F160050793%2F2015%2F0513%2F555322e8e7b08.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546968909548&di=dd064156cb98f5dcc4e345c1e22b8680&imgtype=0&src=http%3A%2F%2Fcz.southcn.com%2Fcontent%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20150817%2F8cbebe4b8793173b95cf10.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546968934521&di=72936836cea7b40b4757f7edeb8ccee8&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1328675352%2C1191999361%26fm%3D214%26gp%3D0.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546968909547&di=c0b33965286299635d206da87e18e74c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F7dd98d1001e939010d71fef771ec54e737d19683.jpg'
    ]}
  },
    }
</script>
<style>
    .apipi{
        /*display: none;*/
    }
    img{
        display:block;
        height:100%;
        width: 100%;
    }
</style>