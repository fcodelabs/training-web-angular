import { Component, OnInit, Output, ViewEncapsulation, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Card } from 'src/models/card.model';
import { CardService } from 'src/services/card.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {

  public cardForm!: FormGroup;
  index: number = 0;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    let title = '';
    let description = '';

    this.cardForm = new FormGroup({
      title: new FormControl(title),
      description: new FormControl(description)
    });

  }

  public submitForm(): void {
    const title = this.cardForm.value.title;
    const description = this.cardForm.value.description;

    const card: Card = new Card(
      title,
      description
    );

    if (title && description) {
      console.log(title);
      console.log(description);
      this.cardService.addCard(card);
    } else {
      if (!title) {
        console.log("Missing title");
      } else if (!description) {
        console.log("Missing description");
      }
    }
    this.cardForm.markAllAsTouched();
    this.clearForm();
  }

  private clearForm(): void {
    this.cardForm.reset();
  }

}
