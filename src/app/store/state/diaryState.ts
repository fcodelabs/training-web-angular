import { Diary } from 'src/app/models/diary';

export interface DiaryState {
  diaries: Diary[];
  isLoading: boolean;
  error: null | string;
}
