<template>
  <header class="flex justify-between items-center w-full h-16 mt-5">
    <div class="flex justify-between items-center xl:m-auto max-w-[1200px] w-full px-10 md:px-14 xl:px-0">
      
      <router-link to="/"><h2 class="font-bold text-2xl">Gitviewer</h2></router-link>

      <div class="flex gap-10 items-center justify-between ">
        
      <nav class=" items-center gap-5 hidden lg:flex">
        <ul class="flex gap-5 items-center ">
          <li v-for="nav in navLinks" :key="nav.title">
            <router-link :to="nav.link" active-class="border-b-orangem border-b font-bold" class="font-semibold text-lg hover:border-b-2 hover:border-b-orangem">{{nav.title}}</router-link>
          </li>

        </ul> 
      </nav>
     <div class=" gap-3 hidden lg:flex"> 
      <input type="text" class="bg-white p-3 outline-0 rounded-md text-black" placeholder="Find github user">
      <button class="bg-[transparent] p-3 outline-o rounded-md border-orangem border">Search user</button>
    </div>
    </div>
      </div>

  </header>
</template>

<script>
export default {
  name: 'HeaderComp',
  data() {
    return {
      navLinks: [
        { title: "Home", link: "/" },
        { title: "My-profile", link: "/my-profile" },
        { title: "Search-users", link: "/find-user" },
        
      ]
    }
 }
}
</script>

<style>

</style>