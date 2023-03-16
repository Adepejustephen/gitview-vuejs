export const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    name: "My profile",
    path: "/my-profile",
    component: () => import("@/pages/Profile.vue"),
  },
  {
    name: "Repositories",
    path: "/repositories",
    component: () => import("@/pages/Repositories.vue"),
  },
  {
    name: "Single repo",
    path: "/repositories/:id",
    component: () => import("@/pages/SingleRepo.vue"),
  },
  {
    name: "Find user",
    path: "/find-user",
    component: () => import("@/pages/SearchUser.vue"),
    props: (route) => ({ query: route.query.q }),
  },
  {
    name: "NotFound",
    path: "/:pathMatch(.*)*",
    component: () => import("@/pages/NotFound.vue"),
  },
];