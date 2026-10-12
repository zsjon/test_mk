<script setup lang="ts">
import { computed } from 'vue'
import MeterGroup from 'primevue/metergroup'
import Tag from 'primevue/tag'
import AppIcon from '@/components/common/AppIcon.vue'
import type { DiaryRecord } from '@/composables/diary/useDiaryList'

const props = defineProps<{ winRate: number | null; delta: number | null; record: DiaryRecord }>()

const meters = computed(() => [
  { label: '승', value: props.record.win, color: 'var(--sg-success-solid)' },
  { label: '무', value: props.record.draw, color: 'var(--sg-line-strong)' },
  { label: '패', value: props.record.loss, color: 'var(--sg-error-solid)' },
])
const total = computed(() => props.record.win + props.record.draw + props.record.loss)
</script>

<template>
  <section class="flex flex-col gap-2 rounded-xl border border-line bg-elevated p-4 shadow-xs">
    <h2 class="flex items-center gap-1.5 text-sm text-fg-tertiary">
      <AppIcon name="trending-up" :size="16" />올해 직관 승률
    </h2>
    <div class="flex items-end justify-between gap-2">
      <span class="text-display-lg text-fg">{{ winRate === null ? '-' : `${winRate}%` }}</span>
      <Tag
        v-if="delta !== null"
        :value="`${delta > 0 ? '+' : ''}${delta}%`"
        :severity="delta < 0 ? 'danger' : 'success'"
        rounded
        class="mb-2 font-normal"
        :aria-label="`작년 대비 ${delta}%`"
      />
    </div>
    <MeterGroup :value="meters" :max="total || 1">
      <template #label>
        <ul class="flex gap-3 text-xs">
          <li class="text-success-fg">승 {{ record.win }}</li>
          <li class="text-draw-fg">무 {{ record.draw }}</li>
          <li class="text-error-fg">패 {{ record.loss }}</li>
        </ul>
      </template>
    </MeterGroup>
  </section>
</template>
