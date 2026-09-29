<script setup lang="ts">
import { useRoute } from 'vue-router'
import AppIcon from './AppIcon.vue'
import type { IconName } from './icon-paths'

export interface TabItem {
  label: string
  icon: IconName
  to: string
}

defineProps<{ items: TabItem[] }>()

const route = useRoute()
const isActive = (to: string) => route.path.startsWith(to)
</script>

<template>
  <nav
    aria-label="주요 메뉴"
    class="sticky bottom-0 z-10 box-content flex h-tabbar border-t border-line bg-elevated px-2 pb-[env(safe-area-inset-bottom)]"
  >
    <RouterLink
      v-for="item in items"
      :key="item.to"
      :to="item.to"
      :aria-current="isActive(item.to) ? 'page' : undefined"
      class="flex flex-1 flex-col items-center justify-center gap-0.5"
      :class="isActive(item.to) ? 'text-fg-brand' : 'text-fg-tertiary'"
    >
      <span
        class="grid h-7 w-14 place-items-center rounded-full"
        :class="{ 'bg-brand-subtle': isActive(item.to) }"
      >
        <AppIcon :name="item.icon" :size="24" />
      </span>
      <span class="text-xs">{{ item.label }}</span>
    </RouterLink>
  </nav>
</template>
