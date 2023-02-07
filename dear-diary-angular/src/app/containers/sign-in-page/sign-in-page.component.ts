import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css'],
})
export class SignInPageComponent implements OnInit {
  public disabled: boolean = true;
  @Input()
  public userName = new FormControl('', Validators.required);

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onKey(event: any) {
    this.userName.setValue(event.target.value);
  }
  getNewName(): void {
    this.disabled = false;
    const names = ['Lahiru', 'Abdul', 'Rashmi', 'Rishini'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    this.userName.setValue(randomName);
  }

  logInAction(): void {
    console.log(this.userName.value);
    if (this.userName.value !== null) {
      this.router.navigate(['/home']);
      localStorage.setItem('username', this.userName.value);
    }
  }
}
