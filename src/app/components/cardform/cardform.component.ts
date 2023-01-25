import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/types/app-state.interface';
import { addCardStart } from '../../store/actions/card.action';

@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.scss'],
})
export class CardformComponent implements OnInit {
  username: string | null = localStorage.getItem('username');

  public cardData: FormGroup = new FormGroup({
    title: new FormControl(''),
    name: new FormControl(this.username),
    description: new FormControl(''),
  });

  constructor(private store: Store<AppState>) {}

  public submit(): void {
    this.cardData.markAllAsTouched();
    if (this.cardData.valid) {
      this.store.dispatch(addCardStart({ card: this.cardData.value }));
      this.cardData.reset();
    }
  }

  ngOnInit(): void {}
}
