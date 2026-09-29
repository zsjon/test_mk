export type SportId = 'baseball' | 'soccer' | 'basketball'

export interface Sport {
  id: SportId
  name: string
  league: string
  available: boolean
}

export interface Team {
  id: string
  sportId: SportId
  name: string
  shortName: string
  stadium: string
}
