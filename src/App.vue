<template>
<header-comp/>
<main>
<router-view></router-view>
</main>
<footer-comp/>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>



