<template>
 <section class="flex flex-col  items-center justify-center  min-h-screen gap-4 mt-10 py-5 px-10 md:px-14  xl:px-0 max-w-[1200px] m-auto w-full h-full ">
   <spinner-comp :loading="loading"/>
  <div v-if="!loading" class=" flex flex-col bg-[#2F363D] px-5 md:px-8 py-10 gap-5 rounded-lg shadow-lg">
     <h1 class=" text-xl md:text-3xl lg:text-4xl font-bold">{{repo.name}}</h1>
     <p v-if="repo.language" :class="[background[repo.language], 'font-medium text-base md:text-lg w-[max-content] p-3 rounded-md ']">Language: {{repo.language}}</p>
     <h1 class="w-[max-content] text-base md:text-lg lg:text-xl font-medium ">Created at: {{formatDate(repo.created_at) }}</h1>
     <h1 class="w-[max-content] text-base md:text-lg lg:text-xl font-medium ">Last update: {{formatDate(repo.pushed_at) }}</h1>
    <div class="flex flex-col gap-5 md:flex-row flex-wrap md:gap-10">
       <p v-if="repo.language" class="font-medium text-base md:text-lg w-[max-content] p-3 rounded-md border border-bluem ">Fork: {{repo.forks}}</p>
     <p v-if="repo.language" class="font-medium text-base md:text-lg w-[max-content] p-3 rounded-md border border-white ">Default branch: {{repo.default_branch}}</p>
     <p v-if="repo.language" class="font-medium text-base md:text-lg w-[max-content] p-3 rounded-md border border-orangem ">Watchers: {{repo.watchers}}</p>
    </div>
  </div>
  <div class="flex w-full justify-between items-center mt-10">
    <router-link  to="/my-profile/repositories"><button class="h-14 px-8 border border-bluem hover:border-white transition rounded-xl">Back</button></router-link>
    <router-link  to="/"><button class="h-14 px-8 border border-white hover:border-orangem transition rounded-xl">Home</button></router-link>
  </div>
 </section>
</template>
<!-- #24292E -->

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
      repo: {},
       background: {
        JavaScript: "bg-orangem",
        TypeScript: "bg-bluem",
        HTML: "bg-[#E34C26]",
        SCSS: "bg-[#C6538C]",
        CSS: "bg-purple-700",
        Vue: "bg-[#41B883]",
      }

    }

  },
  computed: {
    id(){
      return parseInt(this.$route.params.ID)
    },
    // createdAt() {
    //   const date = new Date(this.repo.created_at)
    //     return date.toLocaleDateString()
     
    // }

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
    formatDate(d) {
        const date = new Date(d)
        return date.toLocaleDateString()
    }
  },
  mounted() {
    this.fetchRepos()
  }
  
}
</script>

<style>

</style>