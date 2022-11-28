const routes = [
    { 
        path: '/', component: home 
    },
    {
        path: '/articles/:idM/:categorie', name: 'article', component: articles, props: true
    },
    {
        path: '/formulaire', component: form
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
    }
})

app.use(router)
app.config.globalProperties.listManga =  [
    {idM: 1, image:'./images/ChainsawMan.jpg', nom:'Chainsaw Man', categorie:'Shonen', auteur:'Tatsuki Fujimoto', description:'Pour rembourser ses dettes, Denji, jeune homme dans la dèche la plus totale, est exploité en tant que Devil Hunter avec son chien-démon-tronçonneuse, "Pochita". Mais suite à une cruelle trahison, il voit enfin une possibilité de se tirer des bas-fonds où il croupit ! Devenu surpuissant après sa fusion avec Pochita, Denji est recruté par une organisation et part à la chasse aux démons...', source:'https://www.nautiljon.com/mangas/chainsaw+man.html'},
    {idM: 2, image:'./images/FMA_Perfect.jpg', nom:'FullMetal Alchemist', categorie:'Shonen', auteur:'Arakawa Hiromu', description:`À Amestris, un immense pays, l'armée tient une place très importante puisque son dirigeant, King Bradley, est également le président du pays. Cette armée est soutenue par des alchimistes, les Alchimistes d'État dont le plus jeune, Edward Elric, a pour spécialité le métal. On le surnomme le Fullmetal Alchemist`, source:'https://www.nautiljon.com/mangas/fullmetal+alchemist.html'},
    {idM: 3, image:'./images/Yona_princess.jpg', nom:`Yona Princesse de l'Aube`, categorie:'Shojo', auteur:'Mizuho Kusanagi', description: `Yona, Soo-Won et Hak sont trois amis d'enfance. Yona est la princesse héritière du royaume de Kouka et a pour particularité d'avoir des cheveux rouges. Elle a des sentiments pour Soo-Won, son cousin insouciant. Hak, lui, est le général de la tribu du vent et aussi le garde du corps de Yona.`, source:'https://www.nautiljon.com/mangas/yona,+princesse+de+l-aube.html'},
    {idM: 4, image:'./images/furuba.jpg', nom:'Fruit Basket', categorie:'Shojo', auteur:'Takaya Natsuki', description:`Tohru Honda vient de perdre sa mère le mois de mai dernier. Elle doit normalement résider chez son grand-père paternel. Ce dernier devant rénover sa maison et aller vivre chez sa fille et son gendre, Tohru n'a d'autres choix que de trouver un endroit où vivre durant le temps des travaux. Elle décide donc d'installer sa tente sur un terrain vague et d'y vivre paisiblement, avec pour seule compagnie un portrait de Kyôko Honda.`, source:'https://www.nautiljon.com/mangas/fruits+basket.html'},
    {idM: 5, image:'./images/berserk.jpg', nom:'Berserk', categorie:'Seinen', auteur:'Kentaro Miura', description:`Dans un monde médiéval et marqué par un passé difficile, erre un mercenaire solitaire nommé Guts, décidé à être seul maître de son destin. Autrefois contraint par un pari perdu à rejoindre les Faucons, une troupe de mercenaires dirigés par Griffith, Guts fut acteur de nombreux combats sanglants et témoin de sombres intrigues politiques. Mais il réalisa soudain que la fatalité n'existe pas et qu'il pouvait reprendre sa liberté s'il le désirait vraiment...`, source:'https://www.nautiljon.com/mangas/berserk.html'},
    {idM: 6, image:'./images/vinlandSaga.jpg', nom:'Vinland Saga', categorie:'Seinen', auteur:'Makoto Yukimura', description:`Vinland Saga nous raconte l'histoire d'un jeune Viking, Thorfinn. Ce dernier fait partie de l'équipage d'un chef de guerre du nom d'Askeladd, qui est l'assassin du père de Thorfinn ! Enchainant les combats et les missions dangereuses, Thorfinn s'endurcit et gagne en maturité. Il a un objectif : venger son père de manière loyale...`, source:'https://www.nautiljon.com/mangas/vinland+saga.html'}
]

app.component('nav-bar',Nav)
app.mount("#app")