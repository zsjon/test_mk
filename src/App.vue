<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useDarkMode } from '@/composables/useDarkMode'

useDarkMode()
</script>

<template>
  <div class="mx-auto min-h-dvh max-w-app bg-canvas sm:border-x sm:border-line">
    <RouterView />
  </div>
</template>
