import { Component, Input, OnInit } from '@angular/core';
import { cardDetails } from 'src/app/models/cardDetails';
@Component({
  selector: 'app-diary-card',
  templateUrl: './diary-card.component.html',
  styleUrls: ['./diary-card.component.css'],
})
export class DiaryCardComponent implements OnInit {
  @Input()
  card!:cardDetails;
  isLarge:boolean=false;
  showMore: boolean = false;
  
  constructor() {
    // this.card = {
    //   title: '',
    //   userName: '',
    //   description:
    //     '',
    // };
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
