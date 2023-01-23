import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
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

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  truncated(index: number) {
    this.showMoreButton = index === null;
  }

  showComplete() {
    if (this.ellipsisRef) {
      this.showMore = true;
      this.cd.detectChanges();
      this.ellipsisRef.applyEllipsis();
    }
  }
}
