<template>
  <header class="flex justify-between items-center container-pd">
    <div>
      <img src="@/assets/logos/appLogo.png" alt="app-logo" class="w-10" />
    </div>
    <nav class="space-x-4">
      <RouterLink v-for="link in links" :key="link.name" :to="link.link" class="text-white font-light">{{
        link.name
      }}</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

const links: { name: string; link: string }[] = [
  {
    name: "About",
    link: "/",
  },
  {
    name: "Showcase",
    link: "/",
  },
  {
    name: "Resources",
    link: "/",
  },
  {
    name: "Community",
    link: "/",
  },
  {
    name: "Blog",
    link: "/",
  },
  {
    name: "Contact",
    link: "/",
  },
];
</script>

<style scoped></style>
