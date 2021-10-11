import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Post from '../../models/Post';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public form: FormGroup;
  public postArray:Post[]=[new Post('Chicker Burgers','I Love to eat them!')];
  constructor() {
    this.form = new FormGroup({
      title: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required)
    })
  }
  ngOnInit(): void {
  }


  submitForm() {
    this.postArray.push(new Post(this.form.get('title')?.value,this.form.get('description')?.value));
  }
}
