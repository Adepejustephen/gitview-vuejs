<template>
  <header class="flex justify-between items-center w-full h-16 mt-5">
    <div
      class="flex justify-between items-center xl:m-auto max-w-[1200px] w-full px-10 md:px-14 xl:px-0"
    >
      <router-link to="/"
        ><h2 class="font-bold text-2xl">Gitview</h2></router-link
      >

      <div class="flex gap-10 items-center justify-between">
        <nav class="items-center gap-5 hidden lg:flex">
          <ul class="flex gap-5 items-center">
            <li v-for="nav in navLinks" :key="nav.title">
              <router-link
                :to="nav.link"
                active-class="border-b-orangem border-b font-bold"
                class="font-semibold text-lg hover:border-b-2 hover:border-b-orangem"
                >{{ nav.title }}</router-link
              >
            </li>
          </ul>
        </nav>
        <nav
          v-if="openNav"
          class="flex flex-col items-center gap-5 lg:hidden fixed h-screen inset-0 bg-slate-700 z-50 w-full transition"
        >
          <ul class="flex flex-col gap-5 items-center justify-center h-full">
            <li v-for="nav in navLinks" :key="nav.title">
              <router-link
                :to="nav.link"
                active-class="border-b-orangem border-b font-bold"
                class="font-semibold text-lg hover:border-b-2 hover:border-b-orangem"
                >{{ nav.title }}</router-link
              >
            </li>
             <div class="gap-3 flex flex-col mt-5">
          <input
            type="text"
            class="bg-white p-3 outline-0 rounded-md text-black"
            placeholder="Find github user"
            v-model="q"
          />
          <button
            class="bg-[transparent] p-3 outline-o rounded-md border-orangem border hover:border-bluem transition"
            @click="toSearch"
          >
            Search 
          </button>
        </div>
          </ul>
         
       
        </nav>
        <div class="gap-3 hidden lg:flex">
          <input
            type="text"
            class="bg-white p-3 outline-0 rounded-md text-black"
            placeholder="Find github user"
            v-model="q"
          />
          <button
            class="bg-[transparent] p-3 outline-o rounded-md border-orangem border hover:border-bluem hover:border-bluem transition"
            @click="toSearch"
          >
            Search 
          </button>
        </div>
        <button
          class="flex flex-col bg-0 border-2 rounded-md border-orangem lg:hidden z-50 transition p-1"
          @click="openNav = !openNav"
        >
         <svg v-if='openNav' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-justify"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
  data() {
    return {
      navLinks: [
        { title: "Home", link: "/" },
        { title: "My-profile", link: "/my-profile" },
        { title: "Find-user", link: "/find-user" },
      ],
      openNav: false,
      q: '',
    };

  },
  methods: {
    toSearch() {
      if (this.$route.path.includes("find-user")) {
      this.$router.replace({
        path: "/find-user",
        query: { q: this.q } 
        
    })
      }
      this.$router.push({
        path: "/find-user",
        query: { q: this.q } 
        
      })
     this.openNav = false;
  }
},

  unmounted() {
    this.openNav = false;
  },
};
</script>

<style></style>
