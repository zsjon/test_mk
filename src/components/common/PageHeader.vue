<script setup lang="ts">
import Button from 'primevue/button'
import { useRouter } from 'vue-router'
import AppIcon from './AppIcon.vue'

withDefaults(
  defineProps<{ title: string; subtitle?: string; back?: boolean; compact?: boolean }>(),
  {
    subtitle: undefined,
    back: false,
    compact: false,
  },
)

const router = useRouter()
</script>

<template>
  <header class="bg-canvas px-2 pt-2" :class="compact ? 'pb-2' : 'pb-3'">
    <div class="flex min-h-control-md items-center gap-1">
      <Button
        v-if="back"
        text
        rounded
        severity="secondary"
        aria-label="뒤로"
        @click="router.back()"
      >
        <template #icon><AppIcon name="chevron-left" :size="22" /></template>
      </Button>
      <h1 v-if="compact" class="flex-1 truncate px-2 text-xl text-fg">{{ title }}</h1>
      <div v-else class="flex-1" />
      <div class="flex gap-1"><slot name="actions" /></div>
    </div>
    <div v-if="!compact" class="px-2 pt-2">
      <h1 class="text-display-sm text-fg">{{ title }}</h1>
      <p v-if="subtitle" class="mt-1 text-md text-fg-tertiary">{{ subtitle }}</p>
    </div>
  </header>
</template>
