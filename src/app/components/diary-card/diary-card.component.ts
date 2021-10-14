import {Component, Input, OnInit} from '@angular/core';
import {CardAction} from "@progress/kendo-angular-layout";
import Post from "../../utils/models/Post";

@Component({
  selector: 'diary-card',
  templateUrl: './diary-card.component.html',
  styleUrls: ['./diary-card.component.scss']
})
export class DiaryCardComponent implements OnInit {
  @Input() data: Post;
  readMore: Boolean = false;
  constructor() { }
  ngOnInit(): void {
  }

  showMore() {
    this.readMore = !this.readMore;
  }

}
