<template>
  <div class="flex flex-col gap-2">
    <p class="font-bold" v-for="user in users" :key="user.id">{{ user.login }}</p>
  </div>
</template>

<script>

export default {
    name: "SearchUser",
    props: {
        query:{type: String}
    },
    computed: {
        username() {
            return this.query
        }
    },
    
     data() {
    return {
        users : [],
      }
  },
    methods: {
      async fetchProfile() {
        const response = await fetch("https://api.github.com/users?since=XXX");
            const data = await response.json()  
        console.log(data)
            

            this.users = data.filter((user) =>user.login.includes(this.query))
        console.log(this.users)
  
      },
  },
  mounted() {
      this.fetchProfile()
    }


}
</script>

<style>

</style>