import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { kboTeams } from '@/mocks/teams'
import { diaryResultOptions, type DiaryResult } from '@/types/diary'
import { toDateString } from '@/utils/date'
import { useDiaries } from './useDiaries'

export const REVIEW_MAX_LENGTH = 500

interface DiaryForm {
  image: string | null
  title: string
  /** YYYY-MM-DD */
  date: string
  stadium: string | null
  seat: string
  result: DiaryResult
  mvp: string
  review: string
}

type DiaryFormErrors = Partial<Record<'title' | 'date' | 'stadium', string>>

const validate = (form: DiaryForm): DiaryFormErrors => {
  const errors: DiaryFormErrors = {}
  if (!form.title.trim()) errors.title = '직관 경기 이름을 입력해 주세요.'
  if (!form.date) errors.date = '직관 날짜를 선택해 주세요.'
  if (!form.stadium) errors.stadium = '경기장을 선택해 주세요.'
  return errors
}

export function useDiaryWrite() {
  const router = useRouter()
  const { addDiary } = useDiaries()

  const today = toDateString(new Date())

  const form = reactive<DiaryForm>({
    image: null,
    title: '',
    date: today,
    stadium: null,
    seat: '',
    result: 'win',
    mvp: '',
    review: '',
  })

  // 저장을 한 번 누른 뒤부터 오류를 보여주고, 입력에 맞춰 바로 갱신한다.
  const submitted = ref(false)
  const errors = computed(() => (submitted.value ? validate(form) : {}))

  const stadiumOptions = [...new Set(kboTeams.map((team) => team.stadium))]

  const save = () => {
    submitted.value = true
    if (!form.stadium || Object.keys(errors.value).length) return

    addDiary({
      image: form.image ?? undefined,
      date: form.date,
      title: form.title.trim(),
      stadium: form.stadium,
      seat: form.seat.trim() || undefined,
      result: form.result,
      mvp: form.mvp.trim() || undefined,
      review: form.review.trim() || undefined,
    })

    if (window.history.state?.back) router.back()
    else router.replace({ name: 'diary' })
  }

  return { form, errors, today, stadiumOptions, resultOptions: diaryResultOptions, save }
}
