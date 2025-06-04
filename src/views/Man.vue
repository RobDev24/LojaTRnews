<template>
    <div class="man">
        Homem
        moda homem

        <baseboard/>
        <header-vue/>
    </div>
</template>


<script>
// @ is an alias to /src
import Baseboard from '@/components/Baseboard.vue'
import HeaderVue from '@/components/Header.vue'

export default {
  name: 'MaN',
  components: {
    Baseboard,
    HeaderVue
  }
}
</script>