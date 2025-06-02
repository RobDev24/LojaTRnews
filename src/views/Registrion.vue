<template>
    <div class="registrion">
        Registro de clientes

        <header-vue/>
        <baseboard-vue/>
    </div>
</template>

<script>
import HeaderVue from '@/components/Header.vue'
import BaseboardVue from '@/components/Baseboard.vue'

export default{
    name:'RegisTrion',
    components:{
        HeaderVue,
        BaseboardVue
    }
}

</script>