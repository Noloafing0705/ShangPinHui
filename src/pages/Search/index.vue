<template>
<div>
  我是Search
  <h1>{{$route.params.keyword}}</h1>
  <h1>{{keyword}}</h1>
</div>
</template>

<script>
export default {
  name: "Search",
  props:['keyword']
}
</script>

<style scoped>

</style>