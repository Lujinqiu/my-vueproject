// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {VueLoaderPlugin} = require('vue-loader');

// //配置
// module.exports = {
//     //入口文件
//     entry:{
//         main:'./app/index.js'
//     },
//     //出口,打包文件放置的目录
//     output:{
//         path: path.resolve(__dirname,'./dist/'),
//        // path:'./dist/',//打包文件存放的路径
//        filename:'[name].js'
//     },

//     // 编译模式
 
//      mode:'development',//开发模式，还有其他模式默认为production生产模式，none
 
     
//      devServer:{
//         contentBase:'./app/',//目录
//         port:1808,
//         // open:true
//      },

//      //别名
//      resolve:{
//         alias:{
//             'vue$':'vue/dist/vue',
//             'com' : 'src/components'
//         },
//         extensions:['.js','.json','vue']
//      },



//     //加载器配置
//     module:{
//         rules:[
//             //编译vue单文件组件加载器：vue-loader
//             {
//                 test:/\.vue$/,
//                 use:{
//                     loader:'vue-loader'//可以简写为loader:vue-loader,有多个就用数组包起来
//                 }
//             },
            
            
//             //编译ES6到es5: 需要安装vue-loader和babel-loader,babel-core核心,还要装一个babel-preset-env)
//             {
//                 test:/\.js$/,
//                 // include:path.resolve(__dirname,'/src'),//手动加载编译一些文件
//                 exclude:path.resolve(__dirname,'./node_modules'),//不要编译一些不需要的js文件
//                 use:{
//                     loader:'babel-loader',
//                   //配置loader选项
                
//                     options:{
//                         presets:['env']//编译ES6为es5
//                     }    
//                 }
//             },
//             //样式加载器
//             {
//                 test:/\.css$/,
//                 loader:['style-loader','css-loader']
//             },

//             //sass编译加载器
//             {
//                 test:/\.scss$/,
//                 loader:['style-loader','css-loader','sass-loader']
//             },
//             //图片编译器，依赖file-loader
//             {
//                 test:/\.(jpeg|png|gif|bnp)$/,
//                 usr:{
//                     loader:'url-loader',
//                     options:{
//                         //设置转换base64编码临界值
//                         limit:10000,
//                         name:'img/[name].[hash:7].[ext]'
//                     }
//                 }
//             },

//             //编译css
//             {
//                 test:/\.css$/,
//                 loader:['style-loader','css-loader']
//             }
//         ]
//     },
    



//     //使用插件Htmlwebpackplugin生成HTML结构
//     plugins:[
//         new HtmlWebpackPlugin({
//                  template:'./src/template.html'
//             }),
//         //Vue-loader的使用，在15.*版本都需要伴随VueLoaderPlugin
//         new VueLoaderPlugin(),
//         //每次编译先清除dist目录
//         new CleanWebpackPlugin('dist')
//     ]
        
            
            
    


// }
// 
// 
// 
// 
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    // 入口文件
    entry:{
        main:'./src/index.js',
    },

    // 出口：打包文件放置的目录
    output:{
        path:path.resolve(__dirname,'./dist/'), //打包文件存放路径
        filename:'js/[name][hash:5].js',
        // publicPath:'/'
    },

    // 编译模式
    mode:'development',//开发环境，文件不压缩，还有一个生产模式的，prodection，文件是压缩的

    // 测试服务器：安装webpack-dev-server
    devServer:{
        contentBase:'./src/',
        port:1808,
        open:true,
        proxy:{
            '/miaomiaoapi':{
                target:"http://api.douban.com/v2/movie",//代理目标服务器
                changeOrigin: true,
                pathRewrite: {'^/miaomiaoapi' : ''}, //替换部分路径
            }
            
        },

        host:'0.0.0.0',//localhost,127.0.0.1,ip地址都可以访问
    },

    resolve:{
        // 别名
        alias:{
            'vue$':'vue/dist/vue',
            '@':path.resolve('src'),
            '@com':path.resolve('src/components')
        },
        extensions:['.js','.json','.vue']
    },

    // 加载器配置
    module:{
        rules:[
            // 编译vue单文件组件：vue-loader
            {
                test:/\.vue$/,
                loader:'vue-loader'
                // use:{
                //     loader:'vue-loader'
                // }
            },

            // 编译es6->es5：babel(babel-loader,babel-core,babel-preset-env)
            {
                test:/\.js$/,
                exclude:path.resolve(__dirname,'./node_modules'),
                use:{
                    loader:'babel-loader',
                    // 配置loader选项
                    options:{
                        presets:['env','stage-0'] //编译ES6->ES5
                        // plugins:[["component", [这部分是minUI的按需引入
                        //     {
                        //       "libraryName": "mint-ui",
                        //       "style": true  //自动引入
                        //     }
                        //   ]]]
                    }
                }
            },

            // 样式加载器
            {
                test:/\.css$/,
                loader:['style-loader','css-loader']
            },

            // sass编译加载器
            {
                test:/\.scss$/,
                loader:['style-loader','css-loader','sass-loader']
            },
            
            // svg、ttf文件处理
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },


            // 图片的处理：依赖file-loader
            {
                test:/\.(jpe?g|png|gif|bmp)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        // 设置转换base64编码的临界值
                        limit:10000,
                        name:'img/[name].[hash:7].[ext]'
                    }
                }
            }
        ]
    },

    plugins:[
        // 根据指定模板生成html结构
        new HtmlWebpackPlugin({
            template:'./src/template.html'
        }),

        // Vue-loader的使用，在15.*之后的版本都需要伴随 VueLoaderPlugin
        new VueLoaderPlugin(),
        
        // 每次编译先清除dist目录
        new CleanWebpackPlugin('dist')
    ]
}