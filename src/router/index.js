
import VueRouter from "vue-router";
import Home from "@/pages/Home/index.vue";
import Login from "@/pages/Login/index.vue";
import Search from "@/pages/Search/index.vue";
import Register from "@/pages/Register/index.vue";

// 优化：解决重复触发push/replace方法在控制台会报错的问题
let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location,resolve,reject) {
    if (resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else {
        originPush.call(this,location,()=>{},()=>{})
    }
}
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function (location,resolve,reject) {
    if (resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else {
        originReplace.call(this,location,()=>{},()=>{})
    }
}


// 路由的配置
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{
                // 是否展示该组件
                isShow:true
            }
        },
        {
            path:'/login',
            component:Login,
            meta:{isShow:false}
        },
        {
            name:'search',
            path:'/search/:keyword',
            props:true,
            component:Search,
            meta:{isShow:true}
        },
        {
            path:'/register',
            component:Register,
            meta:{isShow:false}
        },
        {//项目初始化的时候重定向到/home
            path:'*',
            redirect:'/home'
        }
    ]
})