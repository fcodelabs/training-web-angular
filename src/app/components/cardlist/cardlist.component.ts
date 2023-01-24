import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFeatureCards } from 'src/app/store/selectors/card.selector';
import { getCard } from 'src/app/store/actions/card.action';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss'],
})
export class CardlistComponent implements OnInit {
  cards$ = this.store.select(selectFeatureCards);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(getCard());
  }
}
