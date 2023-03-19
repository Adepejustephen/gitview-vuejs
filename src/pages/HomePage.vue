<template>
  <div class="flex flex-col  justify-center items-center min-h-screen gap-4 mt-10 py-5 px-10 md:px-14  xl:px-0 max-w-[1200px] m-auto w-full h-full ">
   <div class="flex flex-col gap-8 items-center">
     <h1 class="font-bold text-4xl md:text-5xl lg:text-7xl">Welcome</h1>
    <h1 class="font-bold text-4xl md:text-5xl lg:text-7xl">To</h1>
    <h1 class="font-bold text-bluem text-4xl md:text-5xl lg:text-7xl">GitView</h1>
   </div>
   <div class="flex flex-col md:flex-row gap-5 mt-10">
    <button class="py-4 px-20 bg-orangem border-0 text-base md:text-lg font-bold rounded-lg outline-0 hover:border h-16 hover:border-white hover:bg-transparent transition " @click="  navigateProfile">My profile</button>
    <button class="py-4 px-20 border-orangem border text-base md:text-lg font-bold rounded-lg outline-0 h-16  hover:border-bluem tansition" @click=" navigateSearch">Find user</button>
   </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    navigateProfile() {
    this.$router.push("/my-profile")
  },
    navigateSearch() {
    this.$router.push("/find-user")
  }
}
}
</script>

<style>

</style>