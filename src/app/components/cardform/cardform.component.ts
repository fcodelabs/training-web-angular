import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.scss'],
})
export class CardformComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
  });

  public submit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.form.reset();
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
