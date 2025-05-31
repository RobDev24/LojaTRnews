<template>
    <div class="cart">
        CARRINHO DE COMPRAS

        <baseboard/>
        <header-vue/>
    </div>
</template>


<script>
// @ is an alias to /src
import Baseboard from '@/components/Baseboard.vue'
import HeaderVue from '@/components/Header.vue'

export default {
  name: 'CarT',
  components: {
    Baseboard,
    HeaderVue
  }
}
</script>

<style scoped>
.cart{
    

    margin-top: 150px;
}
</style>