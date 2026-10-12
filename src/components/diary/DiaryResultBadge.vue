<script setup lang="ts">
import { diaryResultLabels, type DiaryResult } from '@/types/diary'

defineProps<{ result: DiaryResult }>()

const toneClasses: Record<DiaryResult, string> = {
  win: 'bg-success-bg text-success-fg',
  draw: 'bg-draw-bg text-draw-fg',
  loss: 'bg-error-bg text-error-fg',
}
</script>

<template>
  <span
    class="inline-grid h-7 min-w-7 place-items-center rounded-full px-2 text-sm"
    :class="toneClasses[result]"
  >
    {{ diaryResultLabels[result] }}
  </span>
</template>
