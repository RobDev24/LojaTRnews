<template>
  <div class="h-container">


    
<div class="h-menu">
              <b-button class="menu" to="/" pill variant="outline-secondary">Inicio</b-button>
              <b-button class="menu" to="/woman" pill variant="outline-secondary">Feminino</b-button> 
              <b-button class="menu" to="/man" pill variant="outline-secondary">Masculino</b-button>
              <b-button class="menu" to="/juvenile" pill variant="outline-secondary">Infanto/Juvenil</b-button>
              <b-button class="menu" to="/accessories" pill variant="outline-secondary">Acessórios</b-button>
              <b-button class="menu" to="/about" pill variant="outline-secondary">About</b-button>     
                
              </div>

              <div>
              <nav> <b-button  class="cart-button" to="/cart">

    🛒
    <span v-if="cartItemCount > 0" class="cart-count">{{ cartItemCount }}</span>
  </b-button></nav>

             </div>
             
            <nav class="b-login" ><b-button class="login" to="/login"></b-button>
                <p><router-link class="r-login" to="/login">Entre</router-link></p>
                
                </nav>
               <nav class="register" >Não tem cadastro? Cadastre-se<b-button class="b-register" to="/register" >AQUI</b-button> </nav>
    
              
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
  
.b-cart{
    float: right;
    margin-right: 10px;
    
    
 }
 .b-cart .menu{
    color: aliceblue;
    
 }
img{
   border-radius: 100px;
   float: left;
   margin-left: 2px;
   margin-top: -10px;
}

.cart-button {
  position: relative;
  float:right;
  margin-right: 10px;
  margin-top: 35px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
}

.cart-button:hover{
  background-color: aliceblue;
}


.cart-count {
  position: absolute;
  top: -5px;
  right: 2px;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
}

.b-login{
  float: right;
  margin-right: 20px;
  margin-top: 35px;
}


.login{
  background-image: url('../assets/login.jpg' );
  width: 55px;
  height: 55px;
  border-radius: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  
}

p .r-login{
text-decoration: none;
  color:rgb(93, 82, 82) ;
}

.r-login:hover{
  color: rgb(247, 244, 239);
  text-decoration: underline 2px;

}
.register{
   float: right;
   margin-top: 20px;
   margin-right: 20px;
   width: 150px;
   height: 8;
   padding: 5px;

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