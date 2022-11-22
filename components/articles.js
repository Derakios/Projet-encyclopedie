const articles = {
    template:
        `
    <div id="divArticles">
        <div id="navigationArticles"></div>
        <div id="afficheArticle">
            <div class="blocImageManga">
                <div v-for="manga in listManga"> 
                    <div v-if="manga.id == $route.params.id">
                        <img class="imageManga" :src="manga.image"> 
                    </div>
                </div>
                
            </div>
            <div class="blocInfosManga">
                <div class="texteManga">

                    <div v-for="manga in listManga"> 
                        <div v-if="manga.id == $route.params.id">
                            <p>{{manga.nom}}</p>
                            <p>{{manga.auteur}}</p>
                            <p>{{manga.categorie}}</p>
                            <p>{{manga.description}}</p>
                            <p>{{manga.source}}</p>  
                        </div>
                    </div>

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
}