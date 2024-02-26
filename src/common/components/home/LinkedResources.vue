<template>
  <div class="i-favorit-dog bg-b-color-browm">
    <base-section>
      <div class="public-item" v-for="link in links" :key="link.href">
        <a class="public__item-link" :href="link.href">
          <img :src="link.imgSrc" alt="" />
        </a>
      </div>
    </base-section>
  </div>
</template>

<script setup>
import BaseSection from "../ui/section/BaseSection.vue";
import agriculture from "@/assets/imgs/log/agriculture.svg";
import stray from "@/assets/imgs/log/stray.svg";
import major from "@/assets/imgs/log/major_logo.svg";
import headerLogo from "@/assets/imgs/log/header-logo.svg";

const links = [
  {
    href: "https://data.coa.gov.tw/index.aspx",
    imgSrc: agriculture,
  },
  {
    href: "http://www.langlangdontcry.com.tw/",
    imgSrc: stray,
  },
  {
    href: "https://agron.tainan.gov.tw/",
    imgSrc: major,
  },
  {
    href: "https://agri.kcg.gov.tw/",
    imgSrc: headerLogo,
  },
];
</script>

<style scoped>
.i-favorit-dog {
  background-image: url("@/assets/imgs/fig_phi_03.png");
  background-repeat: no-repeat;
  background-size: 100% 70%;
  background-position: top left;
  background-repeat: no-repeat;
  padding-top: 10rem;
}

.public-item,
.public__item-link {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  @apply col-span-6 sm:col-span-3;
}

.public__item-link::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 150px;
  background-image: url("@/assets/imgs/texture_01_white.png");
  background-size: 7px auto;
  background-color: rgba(67, 83, 52, 0.6);
  border-radius: 20px;
  transform: translate(7px, 7px);
}

img {
  width: 150px;
  height: 100px;
  margin: auto;
  padding: 10px;
  background: #fcfcfc;
  border-radius: 20px;
  z-index: 01;
}

@media only screen and (min-width: 600px) {
  .public__item-link::after {
    width: 100px;
    transform: translate(7px, 5px);
  }

  img {
    width: 100px;
    height: 80px;
    padding: 7px;
    background: #fcfcfc;
    border-radius: 20px;
    z-index: 01;
  }

  .i-favorit-dog {
    background-position: top center;
    background-size: 80% 70%;
  }
}

@media only screen and (min-width: 780px) {
  .public__item-link::after {
    width: 150px;
    transform: translate(7px, 5px);
  }

  img {
    width: 150px;
    height: 100px;
  }

  .i-favorit-dog {
    background-position: top center;
    background-size: 80% 70%;
  }
}

@media only screen and (min-width: 996px) {
  .public__item-link::after {
    width: 200px;
  }

  img {
    width: 200px;
    height: 100px;
  }

  .i-favorit-dog {
    background-position: top center;
    /* background-size: 80% 70%; */
    background-size: max(70%) 70%;
    padding-top: 20rem;
  }
}

@media only screen and (min-width: 1200px) {
  .i-favorit-dog {
    background-size: max(796.89px) 70%;
  }
}
</style>
