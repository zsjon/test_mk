export type DiaryResult = 'win' | 'draw' | 'loss'

export interface Diary {
  id: number
  image?: string
  /** YYYY-MM-DD */
  date: string
  /** HH:mm */
  time?: string
  title: string
  stadium: string
  seat?: string
  result: DiaryResult
  mvp?: string
  review?: string
}

export const diaryResultLabels: Record<DiaryResult, string> = {
  win: '승',
  draw: '무',
  loss: '패',
}

export const diaryResultOptions = (Object.keys(diaryResultLabels) as DiaryResult[]).map(
  (value) => ({ label: diaryResultLabels[value], value }),
)
