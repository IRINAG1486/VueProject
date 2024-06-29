const { createApp, ref } = Vue;
 const app = createApp({});
 app.component('main-component', {
    template:`
    <div class="main">
        <div class="main__inform">
            <div
                class="main__articles"
                v-for="item in filterForArticles"
                :key="item.id"
                >
                <h1 class="main__articles-title">{{ item.articleTitle }}</h1>
                <img
                    :src="'./hw3image/' + item.articlePicture"
                    alt="article"
                    class="main__articles-picture"
                />
                <div class="main__article-info">
                    <p class="main__article-data">{{ item.articleData }}</p>
                    <div class="main__article-links">
                    <a href="#" class="main__article-link">Интерьер /</a>
                    <a href="#" class="main__article-link">Домой /</a>
                    <a href="#" class="main__article-link">Декор</a>
                    </div>
                </div>
                <p class="main__article-text">{{ item.articleText }}</p>
                <div class="main__article-citation">
                    <img
                        src="./hw3image/commas.png"
                        alt="commas"
                        class="main__article-commas"
                    />
                    <p class="main__citation">{{ item.articleCitation }}</p>
                </div>
                <h1 class="main__second-title">{{ item.articleSecondTitle }}</h1>
                <p class="main__second-text">{{ item.articleSecondText }}</p>
                <div class="main__articles-numbering">
                    <p class="main__number">1</p>
                    <p class="main__number-text">{{ item.articleNumbOne }}</p>
                </div>
                <div class="main__articles-numbering">
                    <p class="main__number">2</p>
                    <p class="main__number-text">{{ item.articleNumbTwo }}</p>
                </div>
                <div class="main__articles-numbering">
                    <p class="main__number">3</p>
                    <p class="main__number-text">{{ item.articleNumbThree }}</p>
                </div>
                <img
                    :src="'./hw3image/' + item.articleSecondPicture"
                    alt="article"
                    class="main__articles-picture"
                />
                <p class="main__therd-text">{{ item.articleTherdText }}</p>
            </div>
        </div>
        <div class="main__tegs">
            <h3 class="main__tegs-title">Тэги</h3>
            <div class="main__tegs-buttons">
                <button v-for="button in listOfButtons"
                :key="button.id" class="main__tegs-button" v-on:click="findButton(button)">{{ button }}</button>
            </div>
            
        </div>
    </div>
    `,
    data () {
        return{
            listOfArticles: [
                {
                  articleTitle: "Создадим лучший макет перепланировки",
                  articlePicture: "article1.png",
                  articleTeg: "Кухня",
                  articleData: "26 Декабрь,2022",
                  articleText: "В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»",

                  articleCitation: "Какая-то умная и красивая цитата",
                  articleSecondTitle: "Создадим лучший макет перепланировки",

                  articleSecondText: "В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»",

                  articleNumbOne: "С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.",

                  articleNumbTwo: "С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.",

                  articleNumbThree: "С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.",
                  
                  articleSecondPicture: "article2.png",

                  articleTherdText: "В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ",
                },

                {
                    articleTitle: "Создадим лучший макет спальни",
                    articlePicture: "article1.png",
                    articleTeg: "Спальня",
                    articleData: "22 Декабрь,2025",
                    articleText: "В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»",
  
                    articleCitation: "Какая-то умная и красивая цитата",
                    articleSecondTitle: "Создадим лучший макет спальни",
  
                    articleSecondText: "В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»",
  
                    articleNumbOne: "С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.",
  
                    articleNumbTwo: "С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.",
  
                    articleNumbThree: "С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.",
                    
                    articleSecondPicture: "article2.png",
  
                    articleTherdText: "В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ",
                  },

            ],

            listOfButtons: [
                'Кухня',
                'Спальня',
                'Здание',
                'Архитектура',
                'Планировка',
                'Спальня',
            ],
           
            buttonElem: '',

        }
    },
 
    methods: {
        findButton(btn) {
            this.buttonElem = btn;
        }
       
    },
    computed: {
        filterForArticles() {
            return this.buttonElem ? this.listOfArticles.filter((elem) => elem.articleTeg.includes(this.buttonElem)) :
            this.listOfArticles;
         }
    },
});
app.mount('#articles');