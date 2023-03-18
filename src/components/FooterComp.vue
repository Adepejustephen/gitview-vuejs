<template>
  <div class="flex justify-center my-10">
   <p class="font-bold text-base md:text-lg ">
    Ifeoluwa Adepeju &copy; {{ year }}
   </p>
  </div>
</template>

<script>
export default {
  name: "FooterComp",
  data() {
    return { date: new Date }
  },
  computed: {
    year() {
      return this.date.getFullYear()
    }
  }
}

</script>

<style>

</style>