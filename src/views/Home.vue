<template>
  <div class="home">
     <HelloWorld msg="Welcome "/>
    <baseboard/>
    <header-vue/>
  <div class="home-secundary">
    
   
    <home-slider-vue/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Baseboard from '@/components/Baseboard.vue'
import HeaderVue from '@/components/Header.vue'
import HomeSliderVue from '@/components/HomeSlider.vue'

export default {
  name: 'HoMe',
  components: {
    HelloWorld,
    Baseboard,
    HeaderVue,
    HomeSliderVue
  }
}
</script>
