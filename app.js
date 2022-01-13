//create component
const app = Vue.createApp({
    //data, function
    data(){
        return{
            x:0,
            y:0,
            showBooks: true,
            title: "bof koor",
            author: 'sadegh hedayat',
            age: 45
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