import type { Sport } from '@/types/team'

// 우선 KBO(야구)만 지원한다. 나머지 종목은 온보딩에서 '준비 중'으로 보여준다.
export const sports: Sport[] = [
  { id: 'baseball', name: '야구', league: 'KBO', available: true },
  { id: 'soccer', name: '축구', league: 'K리그', available: false },
  { id: 'basketball', name: '농구', league: 'KBL', available: false },
]
