import { computed, ref } from 'vue'
import { diaryResultOptions, type Diary, type DiaryResult } from '@/types/diary'
import { useDiaries } from './useDiaries'

export type DiaryFilter = 'all' | DiaryResult

export interface DiaryRecord {
  win: number
  draw: number
  loss: number
}

const countRecord = (diaries: Diary[]): DiaryRecord =>
  diaries.reduce<DiaryRecord>(
    (record, diary) => ({ ...record, [diary.result]: record[diary.result] + 1 }),
    { win: 0, draw: 0, loss: 0 },
  )

// KBO 승률 계산 방식대로 무승부는 제외한다.
const toWinRate = ({ win, loss }: DiaryRecord) =>
  win + loss ? Math.round((win / (win + loss)) * 100) : null

export function useDiaryList() {
  const { diaries } = useDiaries()

  const filter = ref<DiaryFilter>('all')
  const filterOptions: { label: string; value: DiaryFilter }[] = [
    { label: '전체', value: 'all' },
    ...diaryResultOptions,
  ]

  const filteredDiaries = computed(() =>
    filter.value === 'all'
      ? diaries.value
      : diaries.value.filter((diary) => diary.result === filter.value),
  )

  const thisYear = new Date().getFullYear()
  const diariesOf = (year: number) =>
    diaries.value.filter((diary) => diary.date.startsWith(String(year)))

  const seasonRecord = computed(() => countRecord(diariesOf(thisYear)))
  const seasonWinRate = computed(() => toWinRate(seasonRecord.value))
  const winRateDelta = computed(() => {
    const lastYearRate = toWinRate(countRecord(diariesOf(thisYear - 1)))
    if (seasonWinRate.value === null || lastYearRate === null) return null
    return seasonWinRate.value - lastYearRate
  })

  return {
    hasDiaries: computed(() => diaries.value.length > 0),
    filter,
    filterOptions,
    filteredDiaries,
    seasonRecord,
    seasonWinRate,
    winRateDelta,
  }
}
