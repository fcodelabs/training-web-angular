import { Component, OnInit } from '@angular/core';
import { cardDetails } from 'src/app/models/cardDetails';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  titleTxt = new FormControl('', Validators.required);
  descTxt = new FormControl('', Validators.required);
  cards: cardDetails[] = [];

  card: cardDetails | undefined;
  expand: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.titleTxt.setValue(this.titleTxt.value);
    this.descTxt.setValue(this.descTxt.value);
  }

  submitBtnAction(): void {
    this.expand = false;

    if (this.titleTxt.value != '' && this.descTxt.value != '') {
      const card = {
        title: this.titleTxt.value,
        userName: localStorage.getItem('username'),
        description: this.descTxt.value,
      } as cardDetails;
      this.cards.push(card);
    } else if (this.titleTxt.value == '') {
      console.log('Missing title !');
    } else {
      console.log('Missing description !');
    }

    this.titleTxt.setValue('');
    this.descTxt.setValue('');
  }
}
