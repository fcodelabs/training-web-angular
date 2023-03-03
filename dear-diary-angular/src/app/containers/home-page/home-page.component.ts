import { Component, OnInit } from '@angular/core';
import { cardDetails } from 'src/app/models/cardDetails';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DiaryCard } from 'src/app/store/types/DiaryCard';
import {
  addCard,
  addCardSuccess,
  getCards,
} from 'src/app/store/actions/card.action';
import { selectCards } from 'src/app/store/selectors/card.selectors';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  titleTxt = new FormControl('', Validators.required);
  descTxt = new FormControl('', Validators.required);
  card: cardDetails | undefined;
  expand: boolean = false;

  public cards: Observable<cardDetails[]> = this.store.pipe(
    select(selectCards)
  );

  constructor(private store: Store<{ DiaryCard: any }>) {}

  ngOnInit(): void {
    this.titleTxt.setValue(this.titleTxt.value);
    this.descTxt.setValue(this.descTxt.value);
    this.store.dispatch(getCards());
  }

  submitBtnAction(): void {
    this.expand = false;

    if (this.titleTxt.value != '' && this.descTxt.value != '') {
      const card = {
        title: this.titleTxt.value,
        userName: localStorage.getItem('username'),
        description: this.descTxt.value,
      } as cardDetails;

      this.store.dispatch(addCard({ card }));
    } else if (this.titleTxt.value == '') {
      console.log('Missing title !');
    } else {
      console.log('Missing description !');
    }

    this.titleTxt.setValue('');
    this.descTxt.setValue('');
  }
}
