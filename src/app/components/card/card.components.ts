import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  input = {
    id: '',
    name: '',
    description: '',
    title: '',
  };

  @Input() set data(data: any) {
    this.input = data;
  }

  seeMore: boolean = false;

  showAction: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public buttonClick(): void {
    this.seeMore = !this.seeMore;
  }
}
