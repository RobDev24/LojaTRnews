<template>
<div class="pesquisa">

      Aqui será nossa pesquisa

      <header-vue/>
      <baseboard-vue/>
</div>

</template>

<script>

import BaseboardVue from "@/components/Baseboard.vue";
import HeaderVue from "@/components/Header.vue";

export default{
    name:'PesquiSa',

    components:{
        HeaderVue,
        BaseboardVue
    }
}

</script>