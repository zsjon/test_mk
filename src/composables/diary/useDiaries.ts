import { computed, ref } from 'vue'
import { diaryMocks } from '@/mocks/diaries'
import type { Diary } from '@/types/diary'

// API 연동 전까지 목록·작성 화면이 같은 목데이터를 공유한다(새로고침하면 초기화).
const diaries = ref<Diary[]>([...diaryMocks])

export function useDiaries() {
  const sortedDiaries = computed(() =>
    [...diaries.value].sort(
      (a, b) => b.date.localeCompare(a.date) || (b.time ?? '').localeCompare(a.time ?? ''),
    ),
  )

  const addDiary = (diary: Omit<Diary, 'id'>) => {
    diaries.value.push({ ...diary, id: Date.now() })
  }

  return { diaries: sortedDiaries, addDiary }
}
