import { Card } from '../../../models/card'

export interface DiaryHomeState {
    cards: Card[]
    error: string | null
    isLoading: boolean
}
