import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(private route: Router) {
    localStorage.setItem('isLoggedIn', 'false');
  }

  ngOnInit(): void {}
  public registerForm: FormGroup = new FormGroup({
    userName: new FormControl(),
  });

  public submitForm(): void {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', this.registerForm.value.userName);
      this.route.navigate(['/home']);
    }
  }

  public randomNameGenerator(): void {
    const config: Config = {
      dictionaries: [names],
      separator: ' ',
      style: 'capital',
    };
    const randomName = uniqueNamesGenerator(config);
    this.registerForm.controls['userName'].setValue(randomName);
  }
}
