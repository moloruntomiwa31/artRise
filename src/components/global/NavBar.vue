<template>
  <header
    class="flex justify-between items-center container-pd bg-primaryBlack md:bg-transparent"
  >
    <div>
      <img src="@/assets/logos/appLogo.png" alt="app-logo" class="w-16" />
    </div>
    <nav class="flex justify-between items-center">
      <div :class="{ 'block': isOpen, 'hidden md:block md:space-x-4': !isOpen }">
        <Transition name="slide-fade">
          <div
            v-show="isOpen"
            class="absolute right-10 bg-primaryBlack mt-2 rounded-lg shadow-lg w-48 py-2 z-30"
          >
            <RouterLink
              v-for="link in links"
              :key="link.name"
              :to="link.link"
              class="block px-4 py-2"
              >{{ link.name }}</RouterLink
            >
          </div>
        </Transition>
        <RouterLink
          v-for="link in links"
          :key="link.name"
          :to="link.link"
          class="nav-link text-white font-light hidden md:inline"
          >{{ link.name }}</RouterLink
        >
      </div>
      <div class="md:hidden cursor-pointer z-50" @click="toggleMenu">
        <div
          :class="{
            'transform rotate-45 translate-y-1': isOpen,
            'mb-2': !isOpen,
          }"
          class="w-10 h-1 rounded bg-white transition-transform duration-200"
        ></div>
        <div
          :class="{ 'opacity-0': isOpen, 'mb-2': !isOpen }"
          class="w-10 h-1 rounded bg-white transition-opacity duration-200"
        ></div>
        <div
          :class="{ 'transform -rotate-45 -translate-y-1': isOpen }"
          class="w-10 h-1 rounded bg-white transition-transform duration-200"
        ></div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";

const isOpen = ref(false);
const toggleMenu = () => (isOpen.value = !isOpen.value);

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

<style scoped>
.nav-link {
  position: relative;
  padding-bottom: 4px;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 4px;
  border-radius: 3px;
  background: #ff6b00;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 80%;
}

.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-enter-to, .slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
