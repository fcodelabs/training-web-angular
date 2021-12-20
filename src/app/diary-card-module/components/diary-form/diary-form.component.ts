import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from "@angular/forms";
import DiaryCardObject from "../../models/DiaryCardObject";
import {Store} from "@ngrx/store";
import {diaryHomeState} from "../../srore/states/diary-home.state";
import * as diaryCardActions from "../../srore/actions/diary-home.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.scss']
})
export class DiaryFormComponent implements OnInit {
  public userName:string | null;
  public form: FormGroup;
  constructor(private route:Router, private store: Store<diaryHomeState>) {
    this.form = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
    })
    this.userName = null;
  }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    if (!this.userName){
      this.route.navigate(['/login']);
    }
  }

  public submitForm():void {
    if(!this.form.get('title')?.value){
      console.log('Missing title')
    }
    else if(!this.form.get('description')?.value){
      console.log('Missing description')
    }
    else{
      let newDiaryCard: DiaryCardObject = new DiaryCardObject(this.form.get('title')?.value, this.userName, this.form.get('description')?.value, new Date());
      this.store.dispatch(diaryCardActions.addDiaryCard({diaryCard: newDiaryCard}));
    }
    this.clearForm();
  }

  public clearForm(): void {
    this.form.reset();
  }
}
