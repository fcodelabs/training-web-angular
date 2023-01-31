import { Component, OnInit, Input } from '@angular/core';

interface InputData {
  id: string;
  name: string;
  description: string;
  title: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() data: InputData;

  seeMore: boolean = false;

  showAction: boolean = false;

  constructor() {
    this.data = {
      id: '1',
      name: 'Name',
      description: 'Description',
      title: 'Title',
    } as InputData;
  }

  ngOnInit(): void {
    //dummy data
  }

  public buttonClick(): void {
    this.seeMore = !this.seeMore;
  }
}
