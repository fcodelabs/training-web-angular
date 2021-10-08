import { Component, OnInit } from '@angular/core';
import {CardAction} from "@progress/kendo-angular-layout";

@Component({
  selector: 'diary-card',
  templateUrl: './diary-card.component.html',
  styleUrls: ['./diary-card.component.scss']
})
export class DiaryCardComponent implements OnInit {
  constructor() { }
  description:string = "This is truly the most perfect and easy no-bake cheesecake smooth and creamy dessert that sets up beautifully in the refrigerator."
  readMore: Boolean = false;
  title: string = "Baken Cheese Cake";
  ngOnInit(): void {
  }

  showMore() {
    this.readMore = !this.readMore;
  }

}
