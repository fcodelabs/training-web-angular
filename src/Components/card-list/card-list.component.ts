import { Component, OnInit } from '@angular/core';
import { Card } from 'src/models/card.model';
import { CardService } from 'src/services/card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  listOfCards: Card[] = [];
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.listOfCards = this.cardService.getCards();
  }

}
