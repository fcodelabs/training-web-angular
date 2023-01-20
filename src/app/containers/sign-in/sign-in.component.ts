import { Component, OnInit } from '@angular/core';
import * as chance from 'chance';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  username: string;

  constructor() {
    this.username = '';
  }

  ngOnInit(): void {}

  handleClick() {
    const generator = new chance();
    this.username = generator.name();
  }
  handleChange(value: string) {
    this.username = value;
  }
}
