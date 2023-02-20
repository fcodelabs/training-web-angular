import { Component, OnInit } from '@angular/core';
import { cardDetails } from 'src/app/models/cardDetails';
@Component({
  selector: 'app-diary-card',
  templateUrl: './diary-card.component.html',
  styleUrls: ['./diary-card.component.css'],
})
export class DiaryCardComponent implements OnInit {
  card:cardDetails;
  isLarge:boolean=false;
  showMore: boolean = false;
  
  constructor() {
    this.card = {
      title: 'hello',
      userName: 'lahiru',
      description:
        'a lifecycle that starts when Angular instantiates lifecycle that starts pppp  instantiates lifecycle that starts pppp instantiates lifecycle that starts pppp',
    };
  }

  ngOnInit(): void {
    console.log(this.card?.description.length);
    this.isLarge = this.card?.description.length>100 ? true : false
    this.showMore = true
  }

  showMoreAction(): void {  
    this.showMore = this.showMore ? false : true;
  }
}
