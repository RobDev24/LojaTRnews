<template>
    <div class="login">
    Cliente login ou ir para cadastro
        <header-vue/>
        <baseboard-vue/>
    </div>
</template>

<script>
import HeaderVue from '@/components/Header.vue'
import BaseboardVue from '@/components/Baseboard.vue'
export default{
    name:'LoGin',

    components:{
        HeaderVue,
        BaseboardVue
    }
}

</script>