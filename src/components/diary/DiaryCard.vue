<script setup lang="ts">
import { computed } from 'vue'
import Tag from 'primevue/tag'
import AppIcon from '@/components/common/AppIcon.vue'
import type { Diary } from '@/types/diary'
import { formatDiaryDate } from '@/utils/date'
import DiaryResultBadge from './DiaryResultBadge.vue'

const props = defineProps<{ diary: Diary; compact?: boolean }>()

const dateText = computed(() => formatDiaryDate(props.diary.date, props.diary.time))
</script>

<template>
  <article
    class="flex overflow-hidden border border-line bg-elevated shadow-xs"
    :class="compact ? 'rounded-xl' : 'flex-col rounded-2xl'"
  >
    <div
      class="relative grid shrink-0 place-items-center bg-muted text-fg-disabled"
      :class="compact ? 'w-24' : 'aspect-video'"
    >
      <img
        v-if="diary.image"
        :src="diary.image"
        alt=""
        class="absolute inset-0 size-full object-cover"
      />
      <AppIcon v-else name="image" :size="28" />
      <DiaryResultBadge
        :result="diary.result"
        class="absolute shadow-sm"
        :class="compact ? 'top-2 left-2' : 'top-3 left-3'"
      />
    </div>
    <div
      class="flex min-w-0 flex-col items-start gap-1"
      :class="compact ? 'p-3' : 'px-4 pt-3 pb-4'"
    >
      <time :datetime="diary.date" class="text-xs text-fg-tertiary">{{ dateText }}</time>
      <h2 class="text-lg text-fg">{{ diary.title }}</h2>
      <p class="mb-1 flex flex-wrap gap-x-3 gap-y-1 text-sm text-fg-tertiary">
        <span class="inline-flex items-center gap-1">
          <AppIcon name="map-pin" :size="14" />{{ diary.stadium }}
        </span>
        <span v-if="diary.seat">{{ diary.seat }}</span>
      </p>
      <Tag v-if="diary.mvp" :value="`MVP ${diary.mvp}`" rounded class="font-normal">
        <template #icon><AppIcon name="award" :size="14" /></template>
      </Tag>
    </div>
  </article>
</template>
