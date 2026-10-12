<script setup lang="ts">
import Button from 'primevue/button'
import SelectButton from 'primevue/selectbutton'
import AppIcon from '@/components/common/AppIcon.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import DiaryCard from '@/components/diary/DiaryCard.vue'
import DiaryEmptyState from '@/components/diary/DiaryEmptyState.vue'
import DiaryWinRateCard from '@/components/diary/DiaryWinRateCard.vue'
import { useDiaryList } from '@/composables/diary/useDiaryList'

const {
  hasDiaries,
  filter,
  filterOptions,
  filteredDiaries,
  seasonRecord,
  seasonWinRate,
  winRateDelta,
} = useDiaryList()
</script>

<template>
  <PageHeader title="나의 직관 일기" subtitle="선수님이 직관한 경기를 기록할 수 있어요." />

  <div class="flex flex-col gap-3 px-4 pb-24">
    <template v-if="hasDiaries">
      <DiaryWinRateCard :win-rate="seasonWinRate" :delta="winRateDelta" :record="seasonRecord" />
      <SelectButton
        v-model="filter"
        :options="filterOptions"
        option-label="label"
        option-value="value"
        :allow-empty="false"
        aria-label="경기 결과 필터"
        fluid
      />
      <DiaryCard
        v-for="(diary, index) in filteredDiaries"
        :key="diary.id"
        :diary="diary"
        :compact="index > 0"
      />
      <DiaryEmptyState
        v-if="!filteredDiaries.length"
        title="직관 기록이 없어요!"
        description="다른 경기 결과를 선택해 보세요."
      />
    </template>
    <DiaryEmptyState v-else title="직관 기록이 없어요!" description="첫 직관 경기를 기록해 보세요.">
      <template #action>
        <Button as="router-link" :to="{ name: 'diary-write' }" label="일기 쓰기">
          <template #icon><AppIcon name="plus" /></template>
        </Button>
      </template>
    </DiaryEmptyState>
  </div>

  <div
    class="pointer-events-none fixed inset-x-0 bottom-[calc(var(--spacing-tabbar)+env(safe-area-inset-bottom)+16px)] mx-auto flex max-w-app justify-end px-4"
  >
    <Button
      as="router-link"
      :to="{ name: 'diary-write' }"
      rounded
      size="large"
      aria-label="일기 쓰기"
      class="pointer-events-auto shadow-md"
    >
      <template #icon><AppIcon name="plus" :size="24" /></template>
    </Button>
  </div>
</template>
