<template>
  <footer class="bg-primaryBlack p-14">
    <div class="grid place-items-center md:grid-cols-4 gap-4">
      <div class="link-wrapper">
        <div v-for="contact in contactDetails" :key="contact.title">
          <h4>{{ contact.title }}</h4>
          <p>{{ contact.detail }}</p>
        </div>
      </div>
      <div v-for="data in quickData" class="link-wrapper">
        <h4>{{ data.title }}</h4>
        <ul v-for="link in data.links">
          <li>{{ link.name }}</li>
        </ul>
      </div>
      <div class="link-wrapper">
        <h4>Important information</h4>
        <ul>
          <li>
            All artworks are protected by copyright laws. Unauthorized use or
            reproduction is strictly prohibited. For more information on our
            policies, please contact us.
          </li>
        </ul>
      </div>
    </div>
    <div class="mx-auto p-4 w-full">
      <h5 class="text-center text-sm">
        <span class="text-primaryOrange">&copy; 2024</span> Empowering African
        Art and Creativity. All Rights Reserved.
      </h5>
    </div>
  </footer>
</template>

<script setup lang="ts">
const contactDetails = [
  {
    title: "Contact Us",
    detail: "123 Art Street, Creativity City, Africa",
  },
  {
    title: "Phone",
    detail: "(123) 456-7890",
  },
  {
    title: "Email",
    detail: "contact@africanart.com",
  },
];

const quickData = [
  {
    title: "Quick Links",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About Us",
        link: "/",
      },
      {
        name: "Artists",
        link: "/",
      },
      {
        name: "Gallery",
        link: "/",
      },
      {
        name: "Blog",
        link: "/",
      },
      {
        name: "Contact Us",
        link: "/",
      },
    ],
  },
  {
    title: "Follow us",
    links: [
      {
        name: "Facebook",
        link: "/",
      },
      {
        name: "Twitter",
        link: "/",
      },
      {
        name: "Instagram",
        link: "/",
      },
      {
        name: "Linkedin",
        link: "/",
      },
    ],
  },
];
</script>

<style scoped>
.link-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  @apply justify-center items-center md:items-start md:justify-start;
}

h4 {
  @apply text-primaryOrange text-lg font-bold text-center md:text-left;
}

ul {
  @apply px-6;
}

li {
  @apply cursor-pointer;
}

li,
p {
  @apply text-sm list-disc font-light text-center md:text-left;
}
</style>
