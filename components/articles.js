const articles = {
    template:
        `
    <div id="divArticles">
        <div id="afficheArticle">
            <div class="blocImageManga">
                <div v-for="manga in listManga"> 
                    <div v-if="manga.idM == $route.params.idM">
                        <img class="imageManga" :src="manga.image"> 
                    </div>
                </div>
                
            </div>
            <div class="blocInfosManga">
                <div class="texteManga">

                    <div v-for="manga in listManga"> 
                        <div v-if="manga.idM == $route.params.idM">
                            <p>{{manga.nom}}</p>
                            <p>{{manga.auteur}}</p>
                            <p>{{manga.categorie}}</p>
                            <p>{{manga.description}}</p>
                            <a :href="manga.source" target="_blank">Lien Nautiljon</a>  
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div id="articlesConnexes">
            <h3>Articles connexes</h3>
                <div class="divImageWidth">
                <template v-for="manga in listManga">
                    <router-link :to="{name:'article', params:{idM:manga.idM, categorie:manga.categorie}}" class="lesManga" v-if="manga.categorie == categorie">
                        <img :src="manga.image" >
                    </router-link>
                </template>
                </div>
                <div class="viewAllManga">
                    <router-link to="/">Voir tous les articles</router-link>
                </div>
        </div>
    </div>
    `,
    props: {
        categorie: String
    }
}