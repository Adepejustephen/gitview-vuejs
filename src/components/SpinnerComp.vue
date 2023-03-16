<template>
   <div class=" h-20 w-20 rounded-full border-4  border-l-blue-400 animate-spin border-r-orangem" v-if="loading" ></div> 
</template>

<script>
export default {
    name: "SpinnerComp",
    props: {loading: Boolean},
}
</script>

<style>

</style>