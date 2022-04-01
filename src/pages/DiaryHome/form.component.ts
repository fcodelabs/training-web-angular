import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {

  public cardForm!: FormGroup;
  title: string = '';
  description: string = '';

  constructor() {
    this.cardForm = new FormGroup({
      title: new FormControl(this.title),
      description: new FormControl(this.description)
    });
  }

  ngOnInit(): void {
  }

  public submitForm(): void {

    if (this.cardForm.get('title')?.value == "") {
      console.log("Missing title");
    } else if (this.cardForm.get('description')?.value == "") {
      console.log("Missing description");
    } else {
      console.log(this.cardForm.get('title')?.value);
      console.log(this.cardForm.get('description')?.value);
    }
    this.cardForm.markAllAsTouched();
    this.clearForm();
  }

  private clearForm(): void {
    this.cardForm.reset();
  }

}
