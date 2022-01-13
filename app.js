//create component
const app = Vue.createApp({
    //data, function
    data(){
        return{
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
            handleEvent(){
                console.log('event')
            }
    }
})

//aplying component to the requested element
app.mount("#app")