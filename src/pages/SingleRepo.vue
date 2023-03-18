<template>
 <section class="flex flex-col  items-center min-h-screen gap-4 mt-10 py-5 px-10 md:px-14  xl:px-0 max-w-[1200px] m-auto w-full h-full ">
   <spinner-comp :loading="loading"/>
  <div v-if="!loading" class="w-full flex flex-col">
     <h1 class="border-b-2 border-blue-400 mb-20 p-b-1 w-[max-content] text-xl md:text-3xl lg:text-4xl font-bold self-center">{{repo.name}}</h1>
  </div>
 </section>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue'
export default {
  name: "SingleRepo",
  components: {
      SpinnerComp
    },
  data() {
    return {
      
      loading: false,
      repo: {}

    }

  },
  computed: {
    id(){
      return parseInt(this.$route.params.ID)
    }
  },
  methods: {
 async fetchRepos() {
      this.loading = true 
        const response = await fetch("https://api.github.com/users/Adepejustephen/repos");
      const data = await response.json() 
        this.loading = false 
      const fetchedRepo = data.find((rep) => rep.id === this.id )
      this.repo = fetchedRepo
    
 
    },
  },
  mounted() {
    this.fetchRepos()
  }
  
}
</script>

<style>

</style>