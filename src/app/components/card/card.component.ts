import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { EllipsisDirective } from 'ngx-ellipsis';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @ViewChild(EllipsisDirective) ellipsisRef: EllipsisDirective | undefined;

  showMore = false;

  showMoreButton = false;

  @Input() id: string = '';
  @Input() title: string = '';
  @Input() name: string = '';
  @Input() description: string = '';

  constructor() {}

  ngOnInit() {}

  truncated(index: number) {
    this.showMoreButton = index === null;
  }

  showComplete() {
    if (this.ellipsisRef) {
      this.showMore = true;
      this.ellipsisRef.applyEllipsis();
    }
  }
}
