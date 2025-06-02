<template>
<div class="h-menu">
              <b-button class="menu" to="/" pill variant="danger">Inicio</b-button>
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

            

</template>

<script>
export default{
  name:'BootonMenu'
}
</script>

<style scoped>
.header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    
}

.h-menu{
    float: left;
   margin-left: 10px;
   margin-top: 30px;
      
}
.h-menu .menu{
    color: aliceblue;
    margin-right: 5px;
    
    
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
  margin-right: -600px;
  margin-top: -40px;
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

</style>