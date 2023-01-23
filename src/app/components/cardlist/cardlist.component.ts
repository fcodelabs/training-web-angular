import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss'],
})
export class CardlistComponent implements OnInit {
  data = [1, 2, 3, 4, 5, 6];
  constructor() {}

  ngOnInit(): void {}
}
