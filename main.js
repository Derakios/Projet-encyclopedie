const routes = [
    { path: '/', component: articles }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

const app = Vue.createApp({
    data() {
        return {
        }
    },
    methods: {

    },
    computed: {
        
    },
    props: {
        
    }
})

app.use(router)
app.mount("#app")