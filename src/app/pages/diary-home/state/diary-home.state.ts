import DiaryCardObject from '../../../models/DiaryCardObject';

export interface diaryHomeState {
  diaryCards:DiaryCardObject[]
}

export const initialState = {
 diaryCards: [new DiaryCardObject('Test title', 'user name', 'test description')]
};
