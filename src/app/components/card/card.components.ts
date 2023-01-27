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

  public sliceText(text: string): string {
    if (text.length > 100) {
      this.showAction = true;
      if (this.seeMore) {
        return text;
      } else {
        return text.slice(0, 100) + '...';
      }
    } else {
      return text;
    }
  }

  public buttonName(): string {
    if (this.showAction) {
      if (this.seeMore) {
        return 'See less';
      } else {
        return 'See more';
      }
    } else {
      return '';
    }
  }

  public buttonClick(): void {
    this.seeMore = !this.seeMore;
  }
}
