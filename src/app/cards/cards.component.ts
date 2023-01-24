import { Component, OnInit } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  Firestore,
  onSnapshot,
} from '@angular/fire/firestore';
import { select, Store } from '@ngrx/store';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { AppState } from 'src/types/appState.interface';
import { Diary } from '../model/diary';
import { DiaryService } from '../shared/diary.service';
import {
  diariesSelect,
  errorSelect,
  isLoadingSelect,
} from '../store/selectors/diarySelector';
import { loadDiaries } from './../store/actions/diaryActions';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  diaries$: Observable<Diary[]>;

  constructor(private store: Store<AppState>) {
    this.diaries$ = this.store.pipe(select(diariesSelect));
  }

  ngOnInit() {
    this.store.dispatch(loadDiaries());
  }
}
