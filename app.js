const application = Vue.createApp({
    // data and function
         data() {
              return {
                  size: 200,
                  url: "https://goodcreation.com.ng",
                  showBooks: true,
                  books: 
                  [
                     {
                          title: "Apapa Lagos" , 
                          author: "Micah Stam" ,
                          body : "t seems we can’t find what you’re looking for. Perhaps searching can help.",
                          img: 'assets/1.jpg',
                          isFav: true
                     },
                     {
                         title: "John Doe Collection" ,
                         author: "Micah Stam" , 
                         body : "t seems we can’t find what you’re looking for. Perhaps searching can help.",
                         img : 'assets/2.jpg',
                         isFav: false
                     },

                     {
                        title: "Why to Mother" ,
                        author: "Micah Stam" ,
                        body : "t seems we can’t find what you’re looking for. Perhaps searching can help.",
                        img: 'assets/3.jpg',
                        isFav: true

                     },
                  ]
              }
         },

         methods: {
            ChangeTitle(author , title) {
                 this.title = author
                 this.author = title
            },

            Hidebooks() {
                 this.showBooks = false
            },

            Show_books() {
                 this.showBooks = true
            },

            HandleEvent() {
                 console.log("Hey!! ")
            }
         }


    })

    application.mount("#app")