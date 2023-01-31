import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent implements OnInit {
  userName: string | null = localStorage.getItem('userName');
  expand: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public addCardForm: FormGroup = new FormGroup({
    name: new FormControl(this.userName),
    title: new FormControl(''),
    description: new FormControl(''),
  });

  public submitForm(): void {
    this.addCardForm.markAllAsTouched();
    if (this.addCardForm.valid) {
      this.addCardForm.reset();
      this.expand = false;
    }
  }

  public handleClick(): void {
    this.expand = true;
  }

  public handleClickOutside(): void {
    this.expand = false;
  }
}
