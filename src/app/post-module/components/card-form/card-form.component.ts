import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { addPostStart } from 'src/app/store/actions/postAction';
import { AppStateInterface } from 'src/app/types/appState.interface';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent {
  title: string;
  description: string;
  constructor(private store: Store<AppStateInterface>) {
    this.title = '';
    this.description = '';
  }

  ngOnInit(): void {}
  changeDescription(value: string) {
    this.description = value;
  }
  changeTitle(value: string) {
    this.title = value;
  }
  addPostHandle() {
    console.log('addPostHadle');
    this.store.dispatch(
      addPostStart({post:{
        id: '1',
        title: this.title,
        description: this.description,
        username: 'username1',
        color: 'test',
      }})
    );
  }
}
