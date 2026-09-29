<script setup lang="ts">
import ToggleSwitch from 'primevue/toggleswitch'
import AppIcon from '@/components/common/AppIcon.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark } = useDarkMode()
</script>

<template>
  <PageHeader title="마이페이지" subtitle="선수님의 정보를 확인하고 수정할 수 있어요." />
  <label class="flex items-center gap-3 border-y border-line bg-elevated px-4 py-3">
    <span class="grid size-9 place-items-center rounded-md bg-muted text-fg-secondary">
      <AppIcon name="moon" />
    </span>
    <span class="flex-1 text-md">다크 모드</span>
    <ToggleSwitch v-model="isDark" />
  </label>
</template>
