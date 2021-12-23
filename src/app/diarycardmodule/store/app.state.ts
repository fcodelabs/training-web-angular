import {DiaryCard} from "../models/diarycard.model";

export interface AppState {
  loadingState : boolean;
  diaryCards: DiaryCard[];
}
