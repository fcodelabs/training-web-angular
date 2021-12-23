import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {DiaryCard} from "../../models/diarycard.model";
import {getDiaryCards} from "../../store/cards.actions";
import {Observable} from "rxjs";
import {selectDiaryCards, selectLoadingState} from "../../store/cards.selectors";
import {AppState} from "../../store/app.state";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public diaryCards$ : Observable<DiaryCard[]>  = this.store.select(selectDiaryCards);
  public loadingState$ : Observable<boolean> = this.store.select(selectLoadingState);

  constructor(private store:Store<AppState>) {

  }

  ngOnInit(): void {
    this.store.dispatch(getDiaryCards());
  }
}


