import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log(this.form.value);
      this.form.reset();
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
