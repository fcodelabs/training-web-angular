import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import DiaryCardObject from '../../models/DiaryCardObject';
import {Store} from "@ngrx/store";
import * as diaryCardActions from './state/diary-home.actions';
import { diaryHomeState } from './state/diary-home.state';

@Component({
  selector: 'app-diary-home',
  templateUrl: './diary-home.component.html',
  styleUrls: ['./diary-home.component.scss']
})
export class DiaryHomeComponent implements OnInit {
  public form: FormGroup;
  public diaryCardArray:DiaryCardObject[]=[];
  constructor(private store: Store<diaryHomeState>) {
    this.form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  })
  }

  ngOnInit(): void {
    this.store.select('diaryCards').subscribe((data) => {
    console.log(data);
    });
  }

  public submitForm():void {
    if(!this.form.get('title')?.value){
      console.log('Missing title')
    }
    else if(!this.form.get('description')?.value){
      console.log('Missing description')
    }
    else{
      let newDiaryCard: DiaryCardObject = new DiaryCardObject(this.form.get('title')?.value, "user name", this.form.get('description')?.value);
      this.store.dispatch(diaryCardActions.addDiaryCard({diaryCard: newDiaryCard}));
    }
    this.clearForm();
  }

  public clearForm(): void {
    this.form.reset();
  }
}
