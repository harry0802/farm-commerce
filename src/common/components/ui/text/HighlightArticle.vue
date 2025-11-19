<template>
  <base-section class="max-sm:gap-y-20">
    <highlight-card class="max-sm" v-for="articles in article" :key="articles.title" :title="articles.title"
      :paragraph="articles.paragraph" :imgPath="articles.gif"></highlight-card>
  </base-section>
</template>

<script setup>
import HighlightCard from "../card/HighlightCard.vue";
import BaseSection from "../section/BaseSection.vue";

// GIF 從 Supabase Storage CDN 載入
const articleGif = {
  Thehistory: "https://srwrseziyaecgzjcndxt.supabase.co/storage/v1/object/sign/gif/Thehistory.gif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zYWFkMjdjZS01OGYwLTQ2OTItYTlmNy1kYmNlYjAyNmI5NGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnaWYvVGhlaGlzdG9yeS5naWYiLCJpYXQiOjE3NjM0NjEyMTgsImV4cCI6NDg4NTUyNTIxOH0.00Kx2qHX5D7RvVLzjJyZNasnJ49gIgbb5WeP78jgrYI",
  Pastafork: "https://srwrseziyaecgzjcndxt.supabase.co/storage/v1/object/sign/gif/Pastafork.gif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zYWFkMjdjZS01OGYwLTQ2OTItYTlmNy1kYmNlYjAyNmI5NGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnaWYvUGFzdGFmb3JrLmdpZiIsImlhdCI6MTc2MzQ2MTE4NCwiZXhwIjo0ODg1NTI1MTg0fQ.Areo98u6JeAmp1yifap4vsAfF4nmcomBQI3pyxB0cIo",
  Pasta: "https://srwrseziyaecgzjcndxt.supabase.co/storage/v1/object/sign/gif/Pasta.gif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zYWFkMjdjZS01OGYwLTQ2OTItYTlmNy1kYmNlYjAyNmI5NGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnaWYvUGFzdGEuZ2lmIiwiaWF0IjoxNzYzNDYxMTU5LCJleHAiOjE3NzIwMTQ3NTl9.G87sIQ6_MH-vMg3OGXXahnwpnIoRtRCVgE4SxRRuF4Q"
};

const article = [
  {
    title: "傳送美味，食材背後的小故事",
    paragraph:
      "探索我們精心挑選的全方位永續食品系列，注入無比的關懷與專業。省略中間環節，為您締造更大的價值，同時也讓農夫和製造者收穫更多。我們的努力，是讓您感受到更美好的價值，同時為地球、為專業，締造一份堅定的承諾。",
    gif: articleGif.Thehistory
  },
  {
    title: "沉默背後的光輝",
    paragraph:
      "自然天賜，速遞到門。我們季節選品，飽含養分，不畏遠行與儲藏之虞。",
    gif: articleGif.Pastafork
  },
  {
    title: "自動呈獻，心頭好品味。",
    paragraph:
      "體驗無憂無慮的便利，訂閱季節農產箱與每週所需的主食雜貨，依照您的節奏進行。您的愛戀，自動呈現，寧靜而內斂。",
    gif: articleGif.Pasta
  },
];
</script>

<style></style>
