<script setup lang="ts">
import AppIcon from '@/components/common/AppIcon.vue'

defineProps<{ title: string; description?: string }>()
</script>

<template>
  <div class="flex flex-col items-center gap-2 px-6 py-10 text-center">
    <span
      class="mb-4 grid size-14 place-items-center rounded-full bg-brand-subtle text-fg-brand ring-10 ring-subtle"
    >
      <AppIcon name="book-open" :size="28" />
    </span>
    <p class="text-display-xs text-fg">{{ title }}</p>
    <p v-if="description" class="text-md text-fg-tertiary">{{ description }}</p>
    <div v-if="$slots.action" class="mt-4"><slot name="action" /></div>
  </div>
</template>
