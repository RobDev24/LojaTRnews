<template>
         <div class="register">
              
              Area de cadastro de clientes
          <header-vue/>
          <baseboard-vue/>
            </div>
</template>

<script>
import HeaderVue from '@/components/Header.vue'
import BaseboardVue from '@/components/Baseboard.vue'

export default{
    name:'ReGister',
    
    components:{
      HeaderVue,
      BaseboardVue
    }
}

</script>