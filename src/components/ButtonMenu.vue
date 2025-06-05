<template>
  <div class="h-container">

     <div class="h-menu">
              <b-button class="menu" to="/" pill variant="outline-secondary">Inicio</b-button>
              <b-button class="menu" to="/woman" pill variant="outline-secondary">Feminino</b-button> 
              <b-button class="menu" to="/man" pill variant="outline-secondary">Masculino</b-button>
              <b-button class="menu" to="/juvenile" pill variant="outline-secondary">Infanto/Juvenil</b-button>
              <b-button class="menu" to="/accessories" pill variant="outline-secondary">Acessórios</b-button>
                  
                
       </div>

              
              <div class="search">
                <b-button class="b-search" to="/search" >Pesquisa</b-button>
               </div>

                <div class="s-custumer">

                  <b-button class="b-register" to="/login" >Iniciar Sessão</b-button>
                  <b-button class="b-help" to="/Help">Ajuda</b-button>
                  <b-button  class="cart-button" to="/cart">
                         Cesto[0]    
                   <span v-if="cartItemCount > 0" class="cart-count">{{ cartItemCount }}</span>
                    </b-button>
                </div>
                               
          </div>
              
</template>

<script>
export default{
  name:'BootonMenu'
}
</script>

<style scoped>

.h-menu{
  float: left;
   margin-left: -18px;
   margin-top: 40px;
   height: 50px;
   width: 560px;
   
   
   
      
}
.h-menu .menu{
  margin-left: -14px;
  margin-top: 15px;
  border: none;
  color: rgb(93, 82, 82);  
  background-color: transparent;
}

.h-menu .menu:hover{
  color:aliceblue;
  text-decoration:underline 2px;
}

.search{
  float: right;
  width:150px;
  height: 40px;
   margin-top: 80px;
  margin-left: -700px;
  margin-right: 500px;
  
}

.search .b-search{
  background-color:transparent;
  border: none;
  color: rgb(93, 82, 82); 
  text-decoration: underline;

}

.search .b-search:hover{
  color: aliceblue;
  text-decoration: underline;
}
  
img{
   border-radius: 100px;
   float: left;
   margin-left: 2px;
   margin-top: -10px;
}

.s-custumer{
  float: right;
  height: 50px;
  width: 400px;
  margin-top: 50px;
  margin-right: 80px;
  padding: 5px;
}

.s-custumer .b-help{
  margin-left: 15px;
  background-color: transparent;
  border: none;
  text-decoration: underline;
  color: rgb(93, 82, 82);
}

    .s-custumer .b-register{
       background-color: transparent;
       border: none;
       text-decoration: underline;
       color: rgb(93, 82, 82);
    }
    .s-custumer .b-help:hover{
      color: aliceblue;
    }
    .s-custumer .b-register:hover{
      color: aliceblue;
    }

.cart-button {
  position: relative;
  float:right;
  margin-right: 10px;
  margin-left: -100px;
  margin-top: 0px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 15px;
  color: rgb(93, 82, 82); 
}

.cart-button:hover{
  background-color: transparent;
  text-decoration: underline;
}


.cart-count {
  position: absolute;
  background: transparent;
  top: -5px;
  right: 2px;
  color: rgb(93, 82, 82); 
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
}






.register{
   

}
 .register .b-register{
  color:rgb(93, 82, 82);
  text-decoration: none;
  background-color: transparent;
  border: none;
  
  }
  .register .b-register:hover{
    color: aliceblue;
    text-decoration: underline;
  }

</style>