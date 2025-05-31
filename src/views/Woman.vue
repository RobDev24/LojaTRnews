<template>
    <div class="Woman">
        MULHER

        <baseboard/>
        <header-vue/>
    </div>
</template>


<script>
// @ is an alias to /src
import Baseboard from '@/components/Baseboard.vue'
import HeaderVue from '@/components/Header.vue'

export default {
  name: 'MulhEr',
  components: {
    Baseboard,
    HeaderVue
  }
}
</script>