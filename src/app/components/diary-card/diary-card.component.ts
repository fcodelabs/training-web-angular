import {Component, Input, OnInit} from '@angular/core';
import {CardAction} from "@progress/kendo-angular-layout";
import PostModel from "../../models/post.model";

@Component({
  selector: 'diary-card',
  templateUrl: './diary-card.component.html',
  styleUrls: ['./diary-card.component.scss']
})
export class DiaryCardComponent implements OnInit {
  @Input() data: PostModel;
  readMore: Boolean = false;
  constructor() { }
  ngOnInit(): void {
  }

  showMore() {
    this.readMore = !this.readMore;
  }

}
