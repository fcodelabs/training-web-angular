import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { cardsSelector } from 'src/app/store/selectors/card.selector';
import { getCard } from 'src/app/store/actions/card.action';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/card.model';
import { AppState } from 'src/types/app-state.interface';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss'],
})
export class CardlistComponent implements OnInit {
  cards$: Observable<Card[]>;

  constructor(private store: Store<AppState>) {
    this.cards$ = this.store.pipe(select(cardsSelector));
  }

  ngOnInit() {
    this.store.dispatch(getCard());
  }
}
