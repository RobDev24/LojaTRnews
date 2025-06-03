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
    float: right;
    margin-right: 256px;
    margin-top: 10px;
    border: 1px solid green;
   width: 27%;
    
}

.search input{
    border-radius: 50px;
    padding: 8.2px;
    width: 300px;
    text-align: center;
}
.b-search{
    
    width: 48px;
    height: 48px;
    border-radius: 50px
}

</style>