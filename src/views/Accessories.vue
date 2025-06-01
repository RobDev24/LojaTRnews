<template>
    <div class="Accessories">
        ACESSORIOS

        <baseboard/>
        <header-vue/>
    </div>
</template>


<script>
// @ is an alias to /src
import Baseboard from '@/components/Baseboard.vue'
import HeaderVue from '@/components/Header.vue'

export default {
  name: 'AccessoRies',
  components: {
    Baseboard,
    HeaderVue
  }
}
</script>

<style scoped>

.Accessories{
  border: 2px red;
  background-color: aqua;
}
</style>