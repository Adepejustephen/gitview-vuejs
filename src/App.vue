<template>
<header-comp/>
<main>
<router-view></router-view>
</main>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';

export default {
  name: 'App',
  components: {
    HeaderComp
  }
}
</script>



