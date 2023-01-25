import { Card } from "../../components/diary-card/card"

export interface DiaryHomeState {
    cards: Card[]
    error: string | null
}
