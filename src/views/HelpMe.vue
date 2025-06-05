<template>
  <div class="about">
    <h1>Aqui será a sessão de ajuda</h1>

    <baseboard/>
    <headerVue/>
  </div>
    
</template>

<script>
// @ is an alias to /src
import Baseboard from '@/components/Baseboard.vue';
import HeaderVue from '@/components/Header.vue'

export default {
  name: 'HelpMe',
  components: {
    Baseboard,
    HeaderVue
  }
}
</script>
