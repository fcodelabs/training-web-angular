import { Component, OnInit } from '@angular/core';
import { Card } from 'src/models/card.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app.state';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  cards: Observable<Card[]>;
  constructor(private store: Store<AppState>) {
    this.cards = store.select('card')
  }

  ngOnInit(): void {

  }

}
