import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/types/appState.interface';
import { Diary } from '../../model/diary';
import { diariesSelect } from '../../store/selectors/diarySelector';
import { loadDiaries } from '../../store/actions/diaryActions';

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
