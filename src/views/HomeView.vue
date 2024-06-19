<script setup lang="ts">
import NavBar from "../components/global/NavBar.vue";
import Footer from "../components/global/Footer.vue";
import showcase from "../assets/images/landing/key-sections/showcase.png";
import resources from "../assets/images/landing/key-sections/resources.png";
import blogs from "../assets/images/landing/key-sections/blogs.png";
import community from "../assets/images/landing/key-sections/community.png";

const sectionDetails = [
  {
    image: showcase,
    content: {
      title: "Showcase",
      description:
        "Discover incredible artworks and meet the artists behind them. Our showcase features a curated selection of visual arts, music, fashion, and more from talented African creatives.",
    },
  },
  {
    image: resources,
    content: {
      title: "Resources",
      description:
        "Access a wealth of resources tailored for African artists. From funding opportunities and market access tips to educational content and workshops, we provide the tools you need to grow your career and navigate the art world.",
    },
  },
  {
    image: blogs,
    content: {
      title: "Blogs",
      description:
        "Stay updated with the latest news, insights, and stories from the art world. Our blog features articles on trends, artist spotlights, interviews, and practical advice for navigating the creative industry.",
    },
  },
  {
    image: community,
    content: {
      title: "Community",
      description:
        "Connect with fellow artists and join our vibrant community. Share your work, exchange ideas, and participate in discussions and events. Together, we can build a supportive network that fosters creativity and growth.",
    },
  },
];
</script>

<template>
  <section class="hero relative min-h-screen">
    <NavBar />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
      <div class="flex justify-between items-center container-pd">
        <div
          class="flex flex-col justify-between items-start text-white md:w-3/5 h-[250px]"
        >
          <h1 class="text-3xl md:text-5xl font-semibold">
            Empowering African Art and Creativity.
          </h1>
          <h3 class="text-lg md:text-2xl font-normal">
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
    </div>
    <div
      class="text-white w-full absolute bottom-8 flex gap-4 flex-col justify-center items-center md:justify-between md:items-start md:flex-row container-pd"
    >
      <div
        class="flex items-center text-[0.5rem] md:text-sm space-x-1 md:w-3/5"
      >
        <p>#Ignite African Imaginations.</p>
        <p>#Unleash African Artistry.</p>
        <p>#Celebrate Africa's Creative Spirit.</p>
      </div>
      <div class="flex items-center text-sm space-x-8">
        <i class="pi pi-facebook" style="font-size: 1rem"></i>
        <i class="pi pi-twitter" style="font-size: 1rem"></i>
        <i class="pi pi-instagram" style="font-size: 1rem"></i>
        <i class="pi pi-linkedin" style="font-size: 1rem"></i>
      </div>
    </div>
  </section>
  <!-- ABOUT -->
  <section class="bg-primaryBlack container-pd">
    <div
      class="flex gap-8 flex-col md:flex-row justify-between items-start md:items-center md:h-[300px]"
    >
      <img
        src="../assets/images/landing/about.png"
        alt="Logo"
        class="w-[8rem] md:w-auto"
      />
      <div class="text-left md:w-3/5">
        <h2 class="text-primaryOrange text-2xl font-bold">ArtRise Africa</h2>
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
  <section class="flex flex-col gap-4 px-10 md:px-0 md:gap-0 md:flex-row">
    <div
      v-for="item in sectionDetails"
      :key="item.image"
      class="md:w-1/4 md:h-[700px] h-[600px] bg-cover bg-center bg-no-repeat bg-gradient"
      :style="{ backgroundImage: 'url(' + item.image + ')' }"
    >
      <div class="h-full flex flex-col justify-end p-4 md:justify-between">
        <h2 class="font-semibold text-lg">{{ item.content.title }}</h2>
        <p class="text-sm">{{ item.content.description }}</p>
      </div>
    </div>
  </section>
  <Footer />
</template>

<style>
.hero {
  min-width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
    url("../assets/images/landing/hero-home.png");
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  position: relative;
}

.bg-gradient {
  position: relative;
}

.bg-gradient::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  background-size: 120%;
  transition: background 0.3s ease;
}

.bg-gradient:hover::before {
  background: rgba(0, 0, 0, 0.4);
}
</style>
