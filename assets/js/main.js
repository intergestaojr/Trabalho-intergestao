function pedir(){
    window.open("https://www.ifood.com.br");
  }


  let app = new Vue({
    el: "#app",
    data: {
      menuLista: 'lanches'
    },
    methods: {
      alterarMenu (value) {
        if (this.menuLista !== value) {
          this.menuLista = value
        }
      },
  
    }
  })