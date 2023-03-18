<template>
  <div
    class="flex flex-col items-center min-h-screen gap-4 mt-10 py-5 px-10 md:px-14 xl:px-0 max-w-[1200px] m-auto w-full h-full"
  >
    <spinner-comp :loading="loading" />
    <div v-if="!loading" class="w-full flex flex-col gap-10 h-full">
      <div class="flex-col md:flex-row flex md:justify-between gap-5">
        <h1
          class="border-b-2 border-blue-400 mb-20 p-b-1 w-[max-content] text-xl md:text-3xl lg:text-4xl font-bold"
        >
          Search results - {{ username  }}
        </h1>
        <p class="font-medium text:lg md:text-xl">
          {{ totalResults }} results found
        </p>
      </div>

      <section
        class="flex flex-col gap-10 h-full w-full items-center justify-center"
      >
        <div
          v-if="users.length >= 1"
          class="flex flex-col gap-10 md:grid md:grid-cols-3 lg:grid-cols-4 h-full w-full"
        >
          <div
            v-for="user in users"
            :key="user.id"
            class="flex flex-col gap-5 bg-[#1E293B] rounded-lg p-4 shadow-md"
          >
          
            <div class="flex flex-col gap-3 items-center">
              <img
                :src="user.avatar_url"
                :alt="user.name"
                class="h-20 w-20 rounded-[999px]"
              />
              <p class="font-medium text-base md:text-lg">{{ user.login }}</p>
            </div>
            <!-- <p class="font-normal text-xs md:text-sm">
              <span class="font-semibold text-sm md:text-lg">Bio<span class="text-orangem">: </span> </span> {{currentUser.bio}}
            </p>
            <p class="font-normal text-xs md:text-sm">
              <span class="font-semibold text-sm md:text-lg">Repositories<span class="text-orangem">: </span> </span> {{currentUser.public_repos}}
            </p> -->
            <button class="w-full p-3 text-bold outline-0 border-2 border-bluem rounded-md hover:border-orangem transition" @click="$router.push(`users/${user.login}`)">View Profile</button>
          </div>
        </div>
       <div v-else class="flex flex-col gap-10 justify-between h-full w-full items-center">
         <h2  class="text-2xl md:text-4xl lg:text-5xl font-bold">
          No result found
        </h2>
         <form class="gap-3 flex w-full max-w-[600px]"  @submit="handleSearch">
          <input
            type="text"
            class="bg-white p-3 outline-0 rounded-md text-black w-full"
            placeholder="username"
            v-model="search"
          />
          <button
          type="submit"
            class="bg-[transparent] p-3 outline-o rounded-md border-orangem border"
           
          >
            Search 
          </button>
       </form>
        </div>
      </section>

      <div
        v-if="users.length >= 1"
        class="flex justify-between items-center w-full"
      >
        <button
          class="disabled:border-blue-200 border-2 p-2 md:p-4 border-orange-200 rounded-md"
          :disabled="page <= 1"
          @click="prevPage"
        >
          Prev
        </button>
        <button
          class="disabled:border-blue-200 border-2 p-2 md:p-4 border-orange-200 rounded-md"
          @click="nextPage"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SpinnerComp from "@/components/SpinnerComp.vue";
export default {
  name: "SearchUser",
  props: {
    query: { type: String },
  },
  components: {
    SpinnerComp,
  },
  data() {
    return {
      users: [],
      currentUser:{},
      page: 1,
      loading: false,
      totalResults: 0,
      search:"",
    };
  },
  computed: {
    username() {
      return this.query;
    },
  },
  methods: {
    async fetchProfile() {
      if (this.query) {
        this.loading = true;
        const response = await fetch(
          `https://api.github.com/search/users?q=${this.query}&page=${this.page}`
        );
        const data = await response.json();
        // console.log(data);
        this.users = data.items;
        this.totalResults = data.total_count;
        this.loading = false;
        // console.log(this.users);
      }
      return;
    },
    async handleSearch() {
      if (this.search) {
       this.$router.replace({
        path: "/find-user",
        query: { q: this.search } 
        
    })
        this.loading = true;
        const response = await fetch(
          `https://api.github.com/search/users?q=${this.search}&page=${this.page}`
        );
        const data = await response.json();
        // console.log(data);
        this.users = data.items;
        this.totalResults = data.total_count;
        this.loading = false;

        // console.log(this.users);
      }
      return;
    },
    async getCurrentUser(login) {
      const response = await fetch(`https://api.github.com/users/${login}`);
      const data = await response.json();
      const user = data
      this.currentUser = data;
// console.log(data)
return user
     
    },

    nextPage() {
      this.page += 1;
      this.fetchProfile();
    },
    prevPage() {
      this.page -= 1;
      this.fetchProfile();
    },
  },
  watch: {
    username() {
      this.fetchProfile()
    }
  },
  mounted() {
    this.fetchProfile();
  },
  // updated() {
  //     if(this.query.length >= 1){
  //       this.fetchProfile()
  //     }
  //   }
};
</script>

<style></style>
