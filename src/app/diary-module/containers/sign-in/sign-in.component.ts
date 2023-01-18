import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  username = new FormControl('');
  disable = new FormControl(true);
  constructor() {}

  ngOnInit(): void {}

  generateName(): void {
    const names = [
      'John',
      'Nick',
      'Anne',
      'Henry',
      'James',
      'Robert',
      'William',
      'Merry',
    ];
    const randomName = names[Math.floor(Math.random() * names.length)];
    this.username.setValue(randomName);
    this.disable.setValue(false);
  }

  enableDisable() {
    if (this.username.value) {
      this.disable.setValue(false);
    } else {
      this.disable.setValue(true);
    }
  }
}
