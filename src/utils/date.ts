const weekdays = ['일', '월', '화', '수', '목', '금', '토']

/** 'YYYY-MM-DD' (+ 'HH:mm') → '2026.09.28 (일) 14:00' */
export function formatDiaryDate(date: string, time?: string): string {
  const [year, month, day] = date.split('-').map(Number) as [number, number, number]
  const weekday = weekdays[new Date(year, month - 1, day).getDay()]
  const formatted = `${date.replaceAll('-', '.')} (${weekday})`
  return time ? `${formatted} ${time}` : formatted
}

/** Date → 'YYYY-MM-DD' (로컬 시간 기준) */
export function toDateString(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}
