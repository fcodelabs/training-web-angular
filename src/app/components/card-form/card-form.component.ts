import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {
 title: string;
description: string;
  constructor() {
    this.title = '';
    this.description = ''; }

  ngOnInit(): void {
  }
  changeDescription(value: string) {
    this.description = value;
  }
 changeTitle(value: string) {
    this.title = value;
  }
}
