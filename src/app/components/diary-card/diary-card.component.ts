import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary-card',
  templateUrl: './diary-card.component.html',
  styleUrls: ['./diary-card.component.scss']
})
export class DiaryCardComponent implements OnInit {

  constructor() { }
  public title:string = "title";
  public subtitle:string = "subtitle";
  public description:string = "A mango is an edible stone fruit produced by the tropical tree Mangifera indica which is believed to have originated from the region between northwestern Myanmar, Bangladesh, and northeastern India.";
  public isExpand:boolean= false;

  ngOnInit(): void {
  }

  public showMore():void {
    this.isExpand = !this.isExpand;
  }
}
