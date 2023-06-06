import *  as VueRouter  from 'vue-router'

const routes = [
    {
        path: '/',
        meta: {title: "Home"},
        component: () => import("@/pages/home/index.vue")
    },
    {
        path: '/products',
        meta: {title: "Products"},
        component: () => import("@/pages/products/index.vue")
    }
]

const routers = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

export default routers