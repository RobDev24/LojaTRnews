<template>
  <div class="container">


    
<div class="h-menu">
              <b-button class="menu" to="/" pill variant="outline-secondary">Inicio</b-button>
              <b-button class="menu" to="/woman" pill variant="outline-secondary">Feminino</b-button> 
              <b-button class="menu" to="/man" pill variant="outline-secondary">Masculino</b-button>
              <b-button class="menu" to="/juvenile" pill variant="outline-secondary">Infanto/Juvenil</b-button>
              <b-button class="menu" to="/accessories" pill variant="outline-secondary">Acessórios</b-button>
              <b-button class="menu" to="/about" pill variant="outline-secondary">About</b-button>     
                    
                <nav> <b-button  class="cart-button" to="/cart">
                             
    🛒
    <!--<span v-if="cartItemCount > 0" class="cart-count">{{ cartItemCount }}</span>-->
  </b-button></nav>

                 
            
            
            </div>
            <nav class="b-login" ><b-button class="login" to="/login"></b-button>
                <p><router-link class="r-login" to="/login">Entre</router-link></p>
                
                </nav>

        </div>    

</template>

<script>
export default{
  name:'BootonMenu'
}
</script>

<style scoped>



.h-menu{
    
   margin-left: -0px;
   margin-right: -0px;
   margin-top: -0px;
   height: 40px;
   width: 100%;
   padding: 5px;
   
      
}
.h-menu .menu{
  background-color: transparent;
    margin-right: 5px;
    margin-left: 2px;
    border: none;
    text-decoration: solid 2px;
    
    }

    .h-menu .menu:hover{
    background-color: transparent;
    text-decoration: 2px solid;
    
    
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
  margin-right: -610px;
  margin-top: -50px;
  background-color: #f6689e;
  border: 1px solid #f6689e;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
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
  margin-right: -530px;
  margin-top: -50px;
}


.login{
  background-image: url('../assets/login.jpg');
  width: 55px;
  height: 55px;
  border-radius: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  
}

p .r-login{
text-decoration: none;
  color: rgb(247, 244, 239);
}
.r-login:hover{
  color: #b9b5b7;

}
</style>