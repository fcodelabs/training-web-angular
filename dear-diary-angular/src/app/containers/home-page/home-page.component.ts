import { Component, OnInit } from '@angular/core';
import { cardDetails } from 'src/app/models/cardDetails';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DiaryCard } from 'src/app/store/types/DiaryCard';
import { addCardSuccess, getCards } from 'src/app/store/actions/card.action';
import { selectCards } from 'src/app/store/selectors/card.selectors';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  titleTxt = new FormControl('', Validators.required);
  descTxt = new FormControl('', Validators.required);
  // cards: cardDetails[] = [];

  card: cardDetails | undefined;
  expand: boolean = false;
  public cards: Observable<cardDetails[]> = this.store.pipe(
    select(selectCards)
  );
  constructor(private store: Store<{ DiaryCard: any }>) {}

  ngOnInit(): void {
    this.titleTxt.setValue(this.titleTxt.value);
    this.descTxt.setValue(this.descTxt.value);
    console.log('card ',this.cards);
    this.store.dispatch(getCards());
  } 

  submitBtnAction(): void {
    console.log(this.cards);
    this.expand = false;

    if (this.titleTxt.value != '' && this.descTxt.value != '') {
      const card = {
        title: this.titleTxt.value,
        userName: localStorage.getItem('username'),
        description: this.descTxt.value,
      } as cardDetails;
      // this.cards.push(card);
      this.store.dispatch(addCardSuccess({ card }));
    } else if (this.titleTxt.value == '') {
      console.log('Missing title !');
    } else {
      console.log('Missing description !');
    }

    this.titleTxt.setValue('');
    this.descTxt.setValue('');
  }
}
