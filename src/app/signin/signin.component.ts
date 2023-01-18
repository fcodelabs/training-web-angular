import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  names = ['John', 'Mary', 'Peter', 'Sarah', 'David'];
  inputName: string = '';
  randomName: string = '';
  signInForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signInForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  generateRandomName() {
    const randomIndex = Math.floor(Math.random() * this.names.length);
    this.randomName = this.names[randomIndex];
    this.inputName = this.randomName;
  }

  onSubmit() {
    if (this.signInForm.valid) {
      console.log(this.signInForm.value);
      // Handle the form submission here
      localStorage.setItem('name', this.signInForm.value);
    }
  }
}
