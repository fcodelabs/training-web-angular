import { Component, OnInit, Input } from '@angular/core';
import { InputData } from 'src/app/models/input-data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() data!: InputData;

  seeMore: boolean = false;

  showAction: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public buttonClick(): void {
    this.seeMore = !this.seeMore;
  }
}
