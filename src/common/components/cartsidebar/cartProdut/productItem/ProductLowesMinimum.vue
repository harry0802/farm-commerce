<template>
  <div class="oder__LowesMinimum">
    <p class="LowesMinimum__alert">
      <!-- 當無法達到某些目標時出現 -->
      <svg>
        <Icon icon="memory:alert" />
      </svg>
      <span> 每筆訂單需滿足150元的最低消費要求，否則訂單無效。</span>
    </p>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style></style>
