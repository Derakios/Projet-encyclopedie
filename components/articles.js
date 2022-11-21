const articles = {
    template:
        `
    <div id="divArticles">
        <div id="navigationArticles"></div>
        <div id="afficheArticle">
            <div class="blocImageManga">
                <img class="imageManga" src="./images/ChainsawMan.jpg">
            </div>
            <div class="blocInfosManga">
                <div class="texteManga">
                    <p>Nom de l'article</p>
                    <p>Auteur</p>
                    <p>Catégorie</p>
                    <p>Description</p>
                    <p>Lien vers Nautiljon</p>
                </div>
            </div>
        </div>
        <div id="articlesConnexes">
            <router-link to="/" class="lesManga" v-for="manga in mangas">
                <img :src="manga.image">
            </router-link>
        </div>
    </div>
    `,
    /* - Faire un composant pour l'affichage du manga ET des connexes
       - Faire un composant chacun pour les 2 ? Lequel serait le plus simple (article & connexes)?

       - Je ne peux pas avancer sur l'affichage du manga selectionné car il faudrait récupérer le manga par
       son ID pour afficher uniquement ses infos à lui, ce qui n'est pas le cas actuellement.
     */
    data() {
        return {
            mangas: [
                {id: 1, image:'./images/ChainsawMan.jpg', nom:'Chainsaw Man', categorie:'Shonen', auteur:'Tatsuki Fujimoto', description:'Pour rembourser ses dettes, Denji, jeune homme dans la dèche la plus totale, est exploité en tant que Devil Hunter avec son chien-démon-tronçonneuse, "Pochita". Mais suite à une cruelle trahison, il voit enfin une possibilité de se tirer des bas-fonds où il croupit ! Devenu surpuissant après sa fusion avec Pochita, Denji est recruté par une organisation et part à la chasse aux démons...', source:'https://www.nautiljon.com/mangas/chainsaw+man.html'},
                {id: 2, image:'./images/FMA_Perfect.jpg', nom:'FullMetal Alchemist', categorie:'Shonen', auteur:'Arakawa Hiromu', description:`À Amestris, un immense pays, l'armée tient une place très importante puisque son dirigeant, King Bradley, est également le président du pays. Cette armée est soutenue par des alchimistes, les Alchimistes d'État dont le plus jeune, Edward Elric, a pour spécialité le métal. On le surnomme le Fullmetal Alchemist`, souce:'https://www.nautiljon.com/mangas/fullmetal+alchemist.html'}
            ]
        }
    },
    methods: {

    },
    props: {
        
    }
}