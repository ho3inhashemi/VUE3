//create component
const app = Vue.createApp({
    //data, function
    data(){
        return{

            url:"http://www.google.com",
            showBooks: true,
            books:[
                {title: "Bof koor", author: "Sadegh Hedayat", image:"images/boofkoor.jpg" , isFave: false},
                {title: "Sag velgard", author: "Sadegh Hedayat", image:"images/kelidar.jpeg", isFave: false},
                {title: "Kelidar", author: "Mahmud DowlatAbadi", image:"images/sagvelgard.jpg", isFave: false},
            ]
        }
    },
    methods: {
        // changeTitle(title){
            // this.title = title;
            changeShowBooks(){
                 this.showBooks = !this.showBooks
                },

            handleEvent(e){
                console.log(e)
                },

            handleMouseMove(e){
                this.x = e.offsetX
                this.y = e.offsetY
                },

            changeFav(book){
                book.isFave = !book.isFave
            }
    }
})

//aplying component to the requested element
app.mount("#app")