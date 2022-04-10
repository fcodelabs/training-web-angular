import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/card-module/store/states/app.state';
import { getPosts } from '../../store/actions/card.actions';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  cards: Observable<Card[]>;
  constructor(private store: Store<AppState>, private titleService: Title) {
    this.titleService.setTitle("Dear Diary - Home");
    this.cards = store.select('card')
  }

  ngOnInit(): void {
    this.store.dispatch(getPosts());
  }

}
