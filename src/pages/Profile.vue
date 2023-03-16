<template>
  <section class="flex flex-col justify-center items-center min-h-screen gap-4 mt-10 py-5 px-10 md:px-14  xl:px-0 max-w-[1200px] m-auto w-full h-full">
     <spinner-comp :loading="loading"/>
  <div v-if="!loading" class="flex flex-col gap-5 md:flex-row md:gap-10  w-full">
    <div class="h-full w-full md:w-[50%] border-2 rounded-md border-bluem p-2">
      <img :src="profile.avatar_url" :alt="profile.name" class="w-full object-cover h-full rounded-md">
    </div>
   
    <div class="flex flex-col gap-3">
      <div class="flex  gap-4 items-center">
        <p class=" font-bold text-lg md:text-3xl"> Name:</p> 
         <span class="flex items-center bg-red-500 p-2 rounded-md text-lg md:text-2xl font-bold">{{profile.name}}</span>
      </div>
      <div class="flex  gap-4 items-center">
        <p class=" font-bold text-lg md:text-3xl">Username:</p> 
         <span class="flex items-center bg-bluem p-2 rounded-md text-lg md:text-2xl font-bold">{{profile.login}}</span>
      </div>
      <div class="flex  gap-4 items-center">
        <p class=" font-bold text-lg md:text-3xl">Bio:</p> 
         <span class="flex items-center text-center bg-orangem p-2 rounded-md text-lg md:text-2xl font-bold">{{profile.bio}}</span>
      </div>
    
    </div>
    
  </div>
  </section>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue'
export default {
  name: "ProfilePage",
  components: {
      SpinnerComp
    },
  data() {
    return {
        profile : {},
        loading : false
      }
  },
  methods: {
      
    async fetchProfile() {
      this.loading = true
        
        const response = await fetch("https://api.github.com/users/adepejustephen");
      const data = await response.json() 
        
        this.loading = false 
  this.profile = data
      },
  },
  mounted() {
      this.fetchProfile()
    }

}
</script>

<style>

</style>