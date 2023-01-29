import { Diary } from 'src/app/model/diary';

export interface DiaryState {
  diaries: Diary[];
  isLoading: boolean;
  error: null | string;
}
