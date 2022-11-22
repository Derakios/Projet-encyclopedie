const routes = [
    { 
        path: '/', component: home 
    },
    {
        path: '/articles/:id', name: 'article', component: articles
    }
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
app.config.globalProperties.listManga =  [
    {id: 1, image:'./images/ChainsawMan.jpg', nom:'Chainsaw Man', categorie:'Shonen', auteur:'Tatsuki Fujimoto', description:'Pour rembourser ses dettes, Denji, jeune homme dans la dèche la plus totale, est exploité en tant que Devil Hunter avec son chien-démon-tronçonneuse, "Pochita". Mais suite à une cruelle trahison, il voit enfin une possibilité de se tirer des bas-fonds où il croupit ! Devenu surpuissant après sa fusion avec Pochita, Denji est recruté par une organisation et part à la chasse aux démons...', source:'https://www.nautiljon.com/mangas/chainsaw+man.html'},
    {id: 2, image:'./images/FMA_Perfect.jpg', nom:'FullMetal Alchemist', categorie:'Shonen', auteur:'Arakawa Hiromu', description:`À Amestris, un immense pays, l'armée tient une place très importante puisque son dirigeant, King Bradley, est également le président du pays. Cette armée est soutenue par des alchimistes, les Alchimistes d'État dont le plus jeune, Edward Elric, a pour spécialité le métal. On le surnomme le Fullmetal Alchemist`, source:'https://www.nautiljon.com/mangas/fullmetal+alchemist.html'}
]
app.mount("#app")