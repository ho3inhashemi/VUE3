//create component
const app = Vue.createApp({
    //data, function
    data(){
        return{

            url:"http://www.google.com",
            showBooks: true,
            books:[
                {title: "Bof koor", author: "Sadegh Hedayat", image:"images/boofkoor.jpg"},
                {title: "Sag velgard", author: "Sadegh Hedayat", image:"images/kelidar.jpeg"},
                {title: "Kelidar", author: "Mahmud DowlatAbadi", image:"images/sagvelgard.jpg"},
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
                }
    }
})

//aplying component to the requested element
app.mount("#app")