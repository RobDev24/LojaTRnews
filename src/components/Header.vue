<template>
    <div class="header">
        <img src="@/assets/IMG_4.jpg">
            
            <button-menu-vue/>
            
               
    </div>
</template>

<script>


import ButtonMenuVue from './ButtonMenu.vue'

export default{
    name:'HeaDer',
    components:{
        ButtonMenuVue,
        
    }
}

</script>

<style scoped>
.container{
    display: grid;
    width: 100%;
    height: auto;
    margin-top: 0px;
    margin-left: -1000px;
    padding: 3px;
}

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
  margin-right: 20px;
  margin-top: 15px;
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