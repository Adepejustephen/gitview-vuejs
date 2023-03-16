<template>
<section class="flex flex-col justify-center items-center min-h-screen gap-4 mt-10 py-5 px-10 md:px-14  xl:px-0 max-w-[1200px] m-auto w-full h-full">
   <spinner-comp :loading="loading"/>
   <div v-if="!loading" class="flex flex-col  gap-10">
   <div class="flex flex-col md:grid md:grid-cols-2   gap-10 w-full ">
     <div v-for="repo in currentRepos" class="flex flex-col gap-5 bg-[#4ccff9] bg-opacity-20 p-5 rounded-lg border-[#FEFEFE] border backdrop-blur-xl" :key='repo.id'>
      <h2 class="text-lg md:text-2xl lg:text-3xl font-semibold text-[#fefefe]">{{repo.name}}</h2>
      <p v-if="repo.language" :class="[background[repo.language], 'font-medium text-base md:text-lg w-[max-content] p-3 rounded-md ']">{{repo.language}}</p>
      <button class="border-orangem border round-md p-3 justify-self-end" @click="$router.push(`/repositories/${repo.id}`)">View repo</button>
    </div>
   </div>

<div class="flex gap-2 md:gap-4 items-center w-full justify-center mt-10">
  <button class="disabled:border-blue-200 border-2 p-2 md:p-4 border-orange-200 rounded-md " :disabled="page<= 1" @click="prevPage">Prev</button>
  <button v-for="(num , idx) in buttons" class="disabled:border-blue-200 border-2 p-2 md:p-4 border-orange-200 rounded-md" :key="idx" :disabled="page=== num" @click="page = num">{{num}}</button>
  <button class="disabled:border-blue-200 border-2 p-2 md:p-4 border-orange-200 rounded-md" :disabled="page >= pages" @click="nextPage">Next</button>
</div>
   </div>
</section>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue'
export default {
  name: "RepositoriesPage",
  components: {
      SpinnerComp
    },
 data() {
    return {
        repos : [],
      loading: false,
      page: 1,
      PER_PAGE: 6,
      background: {
        JavaScript: "bg-orangem",
        TypeScript: "bg-bluem",
        HTML: "bg-[#E34C26]",
        SCSS: "bg-[#C6538C]",
        CSS: "bg-purple-700",
        Vue: "bg-bgreen-500",
      }
      
      }
  },
  computed: {
    skip() {
      return this.page * this.PER_PAGE
    },
    indexOfFirstRepo() {
      return this.skip - this.PER_PAGE
    },

    currentRepos() {
      return this.repos.slice(this.indexOfFirstRepo, this.skip)
    },
    pages() {
      return this.repos.length / this.PER_PAGE
    }, 
    buttons() {
      return Array.from({ length: this.pages }, (value, index) => index + 1)
    }

  },
  methods: {
      
    async fetchRepos() {
      this.loading = true 
        const response = await fetch("https://api.github.com/users/Adepejustephen/repos");
      const data = await response.json() 
        this.loading = false 
  this.repos = data
    },

    nextPage() {
      this.page += 1
    },
    prevPage() {
      this.page -= 1
    }
  },
  mounted() {
      this.fetchRepos()
    }

}
</script>

<style>

</style>