import { Component, OnInit } from '@angular/core';
import * as chance from 'chance';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
   form: FormGroup;
  username = new FormControl('');

  constructor() {
    this.form = new FormGroup({
      name: this.username
    });
  }

  ngOnInit(): void {}

  handleClick() {
    const generator = new chance();
    this.username = generator.name();
  }
 onSubmit() {
    console.log(this.form.value);
  }
}
