import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  data=[
1,2,3,4,5,6,7,8]
  constructor() { }

  ngOnInit(): void {
  }

}
