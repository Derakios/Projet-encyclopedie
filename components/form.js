const form = {
    template:
        `
    <!--FORMULAIRE D'AJOUT D'ARTICLES-->
            <form v-if="!swap" method="post" @submit.prevent="onSubmit">
                <!--amène à une page de traitement-->
                <div>
                    <label for="article-name"></label>
                    <input required type="text" id="article-name" placeholder="Nom de l'article" name="article-name" v-model="nomArticle">
                </div>
                <div>
                    <label for="article-categorie">Choix de la catégorie :</label>
                    <select v-model="categorieArticle" required name="article-categorie" id="article-categorie">
                        <option value="" disabled selected hidden>--choisissez une catégorie--</option>
                        <option value="Shonen">Shonen</option>
                        <option value="Shojo">Shojo</option>
                        <option value="Seinen">Seinen</option>
                    </select>
                </div>
                <div>
                    <label for="article-texte"></label>
                    <textarea v-model="descriptionArticle" required id="article-texte" placeholder="Contenu de l'article" name="article-texte"></textarea>
                </div>
                <div>
                    <label for="article-auteur"></label>
                    <input v-model="auteurArticle" required type="text" id="article-auteur" placeholder="Auteur" name="article-auteur">
                </div>
                <div>
                    <label for="article-source">Entrer l'url de votre source:</label>
                    <input v-model="sourceArticle" required type="url" name="article-source" id="article-source" placeholder="https://example.com" pattern="https://.*"
                        size="30" required>
                </div>
                <div>
                    <label for="article-image">Choisissez une image d'illustration:</label>
                    <input v-model="imageArticle" @change="onFileChange" required type="file" id="article-image" name="article-image" accept="image/png, image/jpeg">
                </div>
                <div class="button">
                    <button @click="ajouterManga">Ajouter un manga</button>
                </div>

            </form>

            <div v-else>
                <router-link to="/">Retourner à la page d'accueil</router-link>
            </div>
    `,
    data() {
        nomArticle = "",
            categorieArticle = "",
            descriptionArticle = "",
            auteurArticle = "",
            sourceArticle = "",
            image = ""
            return {
                swap: false
            }
    },
    methods: {
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.createImage(files[0]);
        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        ajouterManga() {
            this.swap = true
            let newId = this.listManga.length + 1;
            this.listManga.push({
                idM: newId,
                image: this.image,
                nom: this.nomArticle,
                categorie: this.categorieArticle,
                auteur: this.auteurArticle,
                description: this.descriptionArticle,
                source: this.sourceArticle
            });
        },
    }
}