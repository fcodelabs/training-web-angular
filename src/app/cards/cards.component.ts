import { Component, OnInit } from '@angular/core';
import { Diary } from '../model/diary';
import { DiaryService } from '../shared/diary.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  diaries: Diary[] = [];
  constructor(private data: DiaryService) {}

  ngOnInit(): void {
    // this.getDiaries();
  }

  getDiaries() {
    // this.diaries = this.data.getDiaries();
  }
}
