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