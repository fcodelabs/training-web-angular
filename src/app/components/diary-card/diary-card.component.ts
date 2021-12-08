import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary-card',
  templateUrl: './diary-card.component.html',
  styleUrls: ['./diary-card.component.scss']
})
export class DiaryCardComponent implements OnInit {

  constructor() { }
  title:string = "title";
  subtitle:string = "subtitle";
  description:string = "description  hbhb hgy bhyj yyh byy hyy yybh b hbj jbhbjhnbh fgyyyyyyyy  fyyyf ctfyyyyyy ctyyf cyyyt ct ct ct";
  isExpand:boolean= false;

  ngOnInit(): void {
  }

  showMore() {
    this.isExpand = !this.isExpand;
  }
}
