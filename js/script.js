const app = new Vue({
  el: "#app",

  data:{
    emailList: [],
    loading: true,
    error: false,
  },

  methods:{
    getEmail(){
      this.loading = true;
      this.email = [];

      for(let i = 0; i < 10; i++){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((risposta) =>{
          console.log("risposta",risposta.data);
          const email = risposta.data;
          this.emailList.push(email.response);

          if(this.emailList.length === 10){
            this.loading = true
          }
        })

        .catch((error) =>{
          this.error = true;
        })
      }
    },
  },

  mounted(){
    this.getEmail()
  },



})