import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SigninComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}
  public registerForm: FormGroup = new FormGroup({
    userName: new FormControl(),
  });

  public submitForm(): void {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
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
