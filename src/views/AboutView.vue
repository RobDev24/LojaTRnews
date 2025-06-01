<template>
  <div class="about">
    <h1>This is an about page</h1>

    <baseboard/>
    <headerVue/>
  </div>
    
</template>

<script>
// @ is an alias to /src
import Baseboard from '@/components/Baseboard.vue';
import HeaderVue from '@/components/Header.vue'

export default {
  name: 'AboutView',
  components: {
    Baseboard,
    HeaderVue
  }
}
</script>
