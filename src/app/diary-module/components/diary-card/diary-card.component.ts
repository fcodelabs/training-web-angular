import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Card } from './card';

@Component({
  selector: 'app-diary-card',
  templateUrl: './diary-card.component.html',
  styleUrls: ['./diary-card.component.scss'],
})
export class DiaryCardComponent implements OnInit {
  @Input()
  card!: Card;

  text = new FormControl('');
  visibility = new FormControl('');
  btnName = new FormControl('SHOW MORE');

  ngOnInit(): void {
    if (this.card.description.length < 100) {
      this.text.setValue(this.card.description);
      this.visibility.setValue('hide');
    } else {
      const textTemp = this.card.description.substring(1, 100);
      this.text.setValue(textTemp + '...');
      this.visibility.setValue('visible');
    }
  }

  handleShowMore() {
    if (this.btnName.value == 'SHOW MORE') {
      this.text.setValue(this.card.description);
      this.btnName.setValue('SHOW LESS');
    } else {
      const textTemp = this.card.description.substring(1, 100);
      this.text.setValue(textTemp + '...');
      this.btnName.setValue('SHOW MORE');
    }
  }
}
