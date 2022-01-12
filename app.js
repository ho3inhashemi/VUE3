//create component
const app = Vue.createApp({
    //data, function
    data(){
        return{
            title: "bof koor",
            author: 'sadegh hedayat',
            age: 45
        }
    },
    methods: {
        changeTitle(title){
            this.title = title;
        }
    }
})

//aplying component to the requested element
app.mount("#app")