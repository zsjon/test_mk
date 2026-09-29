<script setup lang="ts">
import BottomTabBar, { type TabItem } from '@/components/common/BottomTabBar.vue'

const tabs: TabItem[] = [
  { label: '직관일지', icon: 'book-open', to: '/diary' },
  { label: '궁합도', icon: 'heart', to: '/match' },
  { label: '라커룸', icon: 'message-circle', to: '/chat' },
  { label: '프로필', icon: 'user', to: '/profile' },
]
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <main class="flex-1">
      <RouterView />
    </main>
    <BottomTabBar :items="tabs" />
  </div>
</template>
