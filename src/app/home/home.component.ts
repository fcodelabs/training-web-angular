import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
  });

  public submit(): void {
    console.log(this.form.value);
    this.form.markAllAsTouched();
  }

  constructor() {}

  ngOnInit(): void {}
}
