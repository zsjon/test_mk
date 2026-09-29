import type { Team } from '@/types/team'

// 구단 엠블럼은 쓰지 않고 구단명으로만 표시한다.
export const kboTeams: Team[] = [
  { id: 'lg', sportId: 'baseball', name: 'LG 트윈스', shortName: 'LG', stadium: '잠실야구장' },
  { id: 'kt', sportId: 'baseball', name: 'KT 위즈', shortName: 'KT', stadium: '수원 KT위즈파크' },
  {
    id: 'ssg',
    sportId: 'baseball',
    name: 'SSG 랜더스',
    shortName: 'SSG',
    stadium: '인천 SSG랜더스필드',
  },
  { id: 'nc', sportId: 'baseball', name: 'NC 다이노스', shortName: 'NC', stadium: '창원NC파크' },
  {
    id: 'doosan',
    sportId: 'baseball',
    name: '두산 베어스',
    shortName: '두산',
    stadium: '잠실야구장',
  },
  {
    id: 'kia',
    sportId: 'baseball',
    name: 'KIA 타이거즈',
    shortName: 'KIA',
    stadium: '광주-기아 챔피언스 필드',
  },
  {
    id: 'lotte',
    sportId: 'baseball',
    name: '롯데 자이언츠',
    shortName: '롯데',
    stadium: '사직야구장',
  },
  {
    id: 'samsung',
    sportId: 'baseball',
    name: '삼성 라이온즈',
    shortName: '삼성',
    stadium: '대구 삼성 라이온즈 파크',
  },
  {
    id: 'hanwha',
    sportId: 'baseball',
    name: '한화 이글스',
    shortName: '한화',
    stadium: '대전 한화생명 볼파크',
  },
  {
    id: 'kiwoom',
    sportId: 'baseball',
    name: '키움 히어로즈',
    shortName: '키움',
    stadium: '고척스카이돔',
  },
]
