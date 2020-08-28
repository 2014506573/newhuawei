import VueRouter from 'vue-router';

import first from '../../components/nav.vue'
import buy from '../../components/buy.vue'
import index from '../../components/index.vue'
import type from '../../components/type.vue'
import sup from '../../components/sup.vue'
import my from '../../components/my.vue'
import login from '../../components/login.vue'
import login2 from '../../components/login2.vue'
import search from '../../components/search.vue'
import page from '../../components/page.vue'
import cart from '../../components/cart.vue'
import set from '../../components/set.vue'

export default new VueRouter({
    routes:[

        {
            path:'/',
            // con:'',
            component:first,            
            children:[
                {
                    path:'/index',
                    component:index
                },
                {
                    path:'/buy',
                    component:buy
                },
                {
                    path:'/type',
                    component:type
                },
                {
                    path:'/sup',
                    component:sup
                },
                {
                    path:'/my',
                    component:my
                },
            ],
            redirect:'/index',
        },
        {
            path:'/search',
            component:search
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/login2',
            component:login2
        },
        {
            path:'/page',
            component:page
        },
        {
            path:'/cart',
            component:cart
        },
        {
            path:'/set',
            component:set
        },
        {
            path:'/*',
            redirect:'/index'
        }
    ]
})



// import VueRouter from 'vue-router'
// import first from '../../conponent/first.vue'
// import index from '../../conponent/index.vue'
// import tv from '../../conponent/tv.vue'
// import movie from '../../conponent/movie.vue'
// import details from '../../conponent/details.vue'
// import vip from '../../conponent/vip.vue'
// export default new VueRouter({
//     routes:[
//         {
//             path:'/',
//             component:first,
//             children:[
//                 {
//                     path:'/index',
//                     component:index
//                 },
//                 {
//                     path:'/tv',
//                     component:tv
//                 },
//                 {
//                     path:'/movie',
//                     component:movie
//                 }
//             ],
//             redirect:'/index'
//         },
//         {
//             path:'/vip',
//             component:vip
//         },
//         {
//             path:'/details/:sh',
//             component:details
//         },
//         {
//             path:'/*',
//             redirect:'/index'
//         }
//     ]
// })