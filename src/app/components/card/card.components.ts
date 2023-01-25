import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() id: string = '';
  @Input() name: string = 'Anonymous';
  @Input() description: string = '';
  @Input() title: string = '';

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
