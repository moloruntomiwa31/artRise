<script setup lang="ts">
import NavBar from "../components/global/NavBar.vue";
</script>

<template>
  <section class="hero">
    <NavBar />
    <div class="flex justify-between items-center container-pd">
      <div
        class="flex flex-col justify-between items-start text-white w-3/5 h-[250px]"
      >
        <h1 class="text-5xl font-semibold">
          Empowering African Art and Creativity.
        </h1>
        <h3 class="text-2xl font-normal">
          Showcasing Talent, Overcoming Barriers, and Celebrating Culture.
        </h3>
        <Button
          label="Explore Arts"
          class="!bg-primaryOrange !border-none !text-white !rounded-none"
        />
      </div>
      <div class="flex flex-col items-center">
        <div class="w-2 h-2 bg-white rounded-full"></div>
        <div class="w-px h-[300px] bg-white"></div>
        <div class="w-2 h-2 bg-white rounded-full"></div>
      </div>
    </div>
    <div class="container-pd text-white flex justify-between">
      <div class="flex items-center text-sm space-x-2 w-3/5">
        <p>#Ignite African Imaginations.</p>
        <p>#Unleash African Artistry.</p>
        <p>#Celebrate Africa's Creative Spirit.</p>
      </div>
      <div class="flex items-center text-sm space-x-8">
        <i class="pi pi-facebook" style="font-size: 1.5rem"></i>
        <i class="pi pi-twitter" style="font-size: 1.5rem"></i>
        <i class="pi pi-instagram" style="font-size: 1.5rem"></i>
        <i class="pi pi-linkedin" style="font-size: 1.5rem"></i>
      </div>
    </div>
  </section>
  <!-- ABOUT -->
  <section class="bg-primaryBlack container-pd">
    <div class="flex justify-between items-center h-[300px]">
      <img src="../assets/images/landing/about.png" alt="Logo" />
      <div class="w-3/5">
        <h2 class="text-primaryOrange text-2xl">ArtRise Africa</h2>
        <p class="text-base">
          Welcome to <span class="text-primaryOrange">ArtRise Africa!</span> Our
          mission is to elevate African art to the global stage, providing the
          essential support and exposure artists need to thrive. We are
          committed to showcasing the rich cultural heritage and contemporary
          creativity of African artists, ensuring their voices are heard and
          appreciated worldwide. At ArtRise Africa, we believe in the
          transformative power of creativity to uplift communities, foster
          economic growth, and bridge cultural divides. Join us in celebrating
          the extraordinary and diverse talent across the continent, and help us
          empower African artists to shine on the world stage.
        </p>
      </div>
    </div>
  </section>
  <!-- KEY SECTIONS -->
  <section></section>
</template>

<style>
.hero {
  min-width: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
    url("../assets/images/landing/hero-home.png");
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  position: relative;
}
</style>
