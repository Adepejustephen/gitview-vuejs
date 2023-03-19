<template>
  <section
    class="flex flex-col justify-center items-center min-h-screen gap-4 mt-1 py-20 px-10 md:px-14 xl:px-0 max-w-[1200px] m-auto w-full h-full"
  >
  <h1 class="text-2xl md:text-3xl lg:text-5xl mb-14 font-bold w-[max-content] pb-1 border-b-2 border-red-500">My profile</h1>
    <spinner-comp :loading="loading" />
    <div
      v-if="!loading"
      class="flex flex-col gap-5 md:gap-10 p-x-20 w-full items-center"
    >
      <div
        class="max-w-[400px] h-[250px] md:h-[400px] rounded-lg border border-bluem p-2 shadow-md"
      >
        <img
          :src="profile.avatar_url"
          :alt="profile.name"
          class="w-full object-cover h-full rounded-lg"
        />
      </div>

      <div class="flex flex-col gap-4 items-center text-center">
        <span
          class="flex items-center bg-red-500 p-2 rounded-md text-lg md:text-2xl font-bold shadow-md"
          >Name: {{ profile.name }}</span
        >

        <span
          class="flex items-center bg-bluem p-2 rounded-md text-lg md:text-2xl font-bold shadow-md"
          >Username: {{ profile.login }}</span
        >

        <span
          class="flex items-center text-center bg-orangem p-2 rounded-md text-lg md:text-xl font-bold shadow-md"
          >Bio: {{ profile.bio }}</span
        >

        <div class="flex flex-wrap justify-center gap-4 items-center">
          <span
            class="flex gap-2 items-center text-center border border-bluem py-1 px-2 rounded-xl text-lg md:text-xl font-semibold shadow-md"
            ><img src="../assets/twitter.svg" alt="twitter" />
            {{ profile.twitter_username }}</span
          >
          <span
            class="flex gap-2 items-center text-center border border-orangem py-1 px-2 rounded-xl text-lg md:text-xl font-semibold shadow-md"
            ><img src="../assets/map-pinn.svg" alt="location" />
            {{ profile.location }}</span
          >
        </div>
        <div class="flex flex-wrap justify-center gap-4 items-center">
          <span
            class="flex items-center text-center bg-[#793EF9] py-1 px-2 rounded-xl text-lg md:text-xl font-semibold shadow-md"
            >Repos: {{ profile.public_repos }}</span
          >
          <span
            class="flex items-center text-center bg-[#AEAFB8] py-1 px-2 rounded-xl text-lg md:text-xl font-semibold shadow-md"
            >Following: {{ profile.following }}</span
          >
          <span
            class="flex items-center text-center bg-[#37CDBE] py-1 px-2 rounded-xl text-lg md:text-xl font-semibold shadow-md"
            >Followers: {{ profile.followers }}</span
          >
        </div>
      </div>
      <router-link to="/my-profile/repositories"
        ><button
          class="border px-5 border-bluem hover:border-orangem transition bg-none outline-0 rounded-md h-14 text-orangem hover:text-bluem"
        >
          View repositories
        </button></router-link
      >
    </div>
  </section>
</template>

<script>
import SpinnerComp from "@/components/SpinnerComp.vue";
export default {
  name: "ProfilePage",
  components: {
    SpinnerComp,
  },
  data() {
    return {
      profile: {},
      loading: false,
    };
  },
  methods: {
    async fetchProfile() {
      this.loading = true;

      const response = await fetch(
        "https://api.github.com/users/adepejustephen"
      );
      const data = await response.json();

      this.loading = false;
      this.profile = data;
    },
  },
  mounted() {
    this.fetchProfile();
  },
};
</script>

<style></style>
