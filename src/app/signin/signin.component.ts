import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public username = new FormControl('');

  constructor() {
    this.username = new FormControl('', Validators.required);
  }

  ngOnInit(): void {}

  generateRandomName(): void {
    const names = ['John', 'Mary', 'Peter', 'Sarah', 'David'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    this.username.setValue(randomName);
  }

  public login() {
    console.log(this.username.value);
  }
}
