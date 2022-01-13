//create component
const app = Vue.createApp({
    //data, function
    data(){
        return{
            
            showBooks: true,
            books:[
                {title: "Bof koor", author: "Sadegh Hedayat"},
                {title: "Sag velgard", author: "Sadegh Hedayat"},
                {title: "Kelidar", author: "Mahmud DowlatAbadi"},
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