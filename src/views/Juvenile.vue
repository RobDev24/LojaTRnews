<template>
    <div class="Juvenile">
        INFANTO JUVENIL

        <baseboard/>
        <header-vue/>
    </div>
</template>


<script>
// @ is an alias to /src
import Baseboard from '@/components/Baseboard.vue'
import HeaderVue from '@/components/Header.vue'

export default {
  name: 'JuveNile',
  components: {
    Baseboard,
    HeaderVue
  }
}
</script>

<style scoped>
.juvenile{

  background-color:blueviolet;
}

</style>