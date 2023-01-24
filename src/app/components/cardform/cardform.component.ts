import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addCardStart } from '../../store/actions/card.action';

@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.scss'],
})
export class CardformComponent implements OnInit {
  cardData: any;
  public form: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private store: Store) {}

  public submit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.cardData = {
        timestamp: new Date(),
        title: this.form.value.title,
        name: localStorage.getItem('username') as string,
        description: this.form.value.description,
      };
      this.store.dispatch(addCardStart({ card: this.cardData }));
      this.form.reset();
    }
  }

  ngOnInit(): void {}
}
