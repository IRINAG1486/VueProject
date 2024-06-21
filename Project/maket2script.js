const { createApp } = Vue;
      const app = createApp({
        data() {
          return {
            articleTitle: "Статьи & Новости",
            listOfArticles: [
                {
                  image: "art1.png",
                  imageText: "Дизайн кухни",
                  itemTitle: "Создадим лучший макет перепланировки",
                  itemData: "26 Декабрь,2022"
                },
                {
                  image: "art2.png",
                  imageText: "Дизайн для жизни",
                  itemTitle: "Лучшие интерьерные идеи по низкой цене",
                  itemData: "22 декабрь,2022"
                },
                {
                  image: "art3.png",
                  imageText: "Дизайн Интерьера",
                  itemTitle: "Лучшие интерьерные решения для офисов ",
                  itemData: "25 Декабрь,2022"
                },
                {
                  image: "art4.png",
                  imageText: "Дизайн кухни ",
                  itemTitle: "Создадим лучший макет перепланировки",
                  itemData: "26 Декабрь,2022"
                },
                {
                  image: "art5.png",
                  imageText: "Дизайн для жизни",
                  itemTitle: "Лучшие интерьерные идеи по низкой цене",
                  itemData: "22 Декабрь,2022 "
                },
                {
                  image: "art6.png",
                  imageText: "Дизайн интерьера",
                  itemTitle: "Лучшие интерьерные решения для офисов ",
                  itemData: "25 Декабрь,2022 "
                },

            ]
        
          };
        },
        methods: {
        
        },
      });
      app.mount("#articles");