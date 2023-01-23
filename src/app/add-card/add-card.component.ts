import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DiaryService } from './../shared/diary.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent implements OnInit {
  constructor(private data: DiaryService) {}

  ngOnInit(): void {}

  userName: string = 'Rajesh';

  public addCardForm: FormGroup = new FormGroup({
    name: new FormControl(this.userName),
    title: new FormControl(''),
    description: new FormControl(''),
  });

  public submitForm(): void {
    this.addCardForm.markAllAsTouched();
    if (this.addCardForm.valid) {
      this.data.addDiarie(this.addCardForm.value);
      this.addCardForm.reset();
    }
  }
}
