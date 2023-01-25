import { Component, ViewChild } from '@angular/core';
import * as chance from 'chance';
import { ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as UserActions from '../../../store/actions/userAction';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignInComponent {
   username: string;
  focus = false;
  public thumbnailSrc =
    'https://firebasestorage.googleapis.com/v0/b/dailydiary-96e2f.appspot.com/o/rose-flower-icon-vector-3720361.jpg?alt=media&token=6633787a-d348-4287-a29a-0e251002f1e0';
 
  constructor(private store: Store<AppStateInterface>, private router: Router) {
    this.username = '';
  }

  handleClick() {
    const generator = new chance();
    this.username = generator.name();
  }
  setFocus(value: boolean) {
    this.focus = value;
  }
  handleSubmit() {
    if (this.username !== '') {
      localStorage.setItem('username', this.username);
      this.store.dispatch(
        UserActions.getUserSuccess({ user: { username: this.username } })
      );
      this.router.navigate(['/home']);
    } else {
      alert('Please enter a username');
    }
  }

 getusername() {
console.log(this.username);
 }

  ngOnInit(): void {}
}
