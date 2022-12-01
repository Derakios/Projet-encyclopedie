const home = {
    data() {
        return {
            /*mangas: [
                {id: 1, image:'./images/ChainsawMan.jpg', nom:'Chainsaw Man', categorie:'Shonen', auteur:'Tatsuki Fujimoto', description:'Pour rembourser ses dettes, Denji, jeune homme dans la dèche la plus totale, est exploité en tant que Devil Hunter avec son chien-démon-tronçonneuse, "Pochita". Mais suite à une cruelle trahison, il voit enfin une possibilité de se tirer des bas-fonds où il croupit ! Devenu surpuissant après sa fusion avec Pochita, Denji est recruté par une organisation et part à la chasse aux démons...', source:'https://www.nautiljon.com/mangas/chainsaw+man.html'},
                {id: 2, image:'./images/FMA_Perfect.jpg', nom:'FullMetal Alchemist', categorie:'Shonen', auteur:'Arakawa Hiromu', description:`À Amestris, un immense pays, l'armée tient une place très importante puisque son dirigeant, King Bradley, est également le président du pays. Cette armée est soutenue par des alchimistes, les Alchimistes d'État dont le plus jeune, Edward Elric, a pour spécialité le métal. On le surnomme le Fullmetal Alchemist`, souce:'https://www.nautiljon.com/mangas/fullmetal+alchemist.html'}
            ]*/
        }
    },
    props: {
        
    },
    template :
    `
    <div>
        L’ENCYCLOPÉDIE DE TOUT LES MANGAS DU NET !
        <br>
        Fan d’animé ? Ne vous posez plus de questions et venez découvrir l'univers vaste et multiple de notre encyclopédie.
        Échangez avec notre communauté, restez informé tout en vous divertissant !
        <br>
        <br>
        Il y a actuellement <span> {{ nombreDeMangas }} </span> mangas disponibles :) !
        <ul class="tilesWrap">
            <li v-for="manga in listManga">
                <h2 class="c-1">{{manga.idM}}</h2>
                <h3 class="c-2">{{manga.nom}}</h3>
                <h4 class="c-3">{{manga.categorie}}</h4>
                <router-link class="bottomBtnM" :to="{name:'article', params:{idM:manga.idM, categorie:manga.categorie}}">
                    Voir
                </router-link>
            </li>
        </ul>   
    </div>
    
    <footer>
        <p>©2022|Killian Jousseaume, Enzo Guiguen, Lucie Briand</p>
    </footer>
    `,
    computed: {
        nombreDeMangas() {
            return this.listManga.length
        }
    }
}
