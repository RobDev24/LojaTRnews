<template>
    <div class="search">
        <input 
         v-model="searchQuery" type="text" placeholder="pesquisar..." 
         @keyup.enter="handleSearch" />

          <button  class="b-search">
      🔍
    </button>
    </div>
</template>

<script>


export default{
    name:'SearCh'
}
</script>

<style>
.search{

    margin-left: 630px;
    margin-top:30px;
   width: 45%;
   height: auto;
   padding: 5px;
    
}

.search input{

    border-radius: 50px;
    padding: 8.2px;
    width: 300px;
    margin-left: -60px;
    text-align: center;
}
.b-search{
    
    width: 48px;
    height: 48px;
    border-radius: 50px
}

</style>