import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  username = new FormControl('', Validators.required);

  constructor(private router: Router) {}

  ngOnInit(): void {}

  generateRandomName(): void {
    const names = ['John', 'Mary', 'Peter', 'Sarah', 'David'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    this.username.setValue(randomName);
  }

  public async login() {
    this.router.navigate(['/home']);
    localStorage.setItem('username', this.username.value as any);
  }
}
