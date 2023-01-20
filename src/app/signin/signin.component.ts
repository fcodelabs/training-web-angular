import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public username = new FormControl('');

  constructor(private router: Router) {
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
    this.router.navigate(['/home']);
  }
}
