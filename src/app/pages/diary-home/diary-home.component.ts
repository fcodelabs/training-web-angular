import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import DiaryCardObject from '../../models/DiaryCardObject';

@Component({
  selector: 'app-diary-home',
  templateUrl: './diary-home.component.html',
  styleUrls: ['./diary-home.component.scss']
})
export class DiaryHomeComponent implements OnInit {
  public form: FormGroup;
  public diaryCardArray:DiaryCardObject[]=[new DiaryCardObject('Test title', 'user name', 'test description')];

  constructor() {
    this.form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  }) }

  ngOnInit(): void {}

  public submitForm():void {
    if(!this.form.get('title')?.value){
      console.log('Missing title')
    }
    else if(!this.form.get('description')?.value){
      console.log('Missing description')
    }
    else{
      this.diaryCardArray.push(new DiaryCardObject(this.form.get('title')?.value, "user name", this.form.get('description')?.value));
    }
    this.clearForm();
  }

  public clearForm(): void {
    this.form.reset();
  }

}
