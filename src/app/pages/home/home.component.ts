import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Post from '../../models/post.model';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AddPost} from "../../actions/post.actions";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public form: FormGroup;
  posts:Observable<{posts:Post[]}>;
  constructor( private store:Store<{postList:{posts:Post[]}}>) {
    this.form = new FormGroup({
      title: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required)
    });
  }
  ngOnInit(): void {
    this.posts=this.store.select('postList');
  }


  submitForm() {
    // @ts-ignore
    this.store.dispatch(new AddPost(new Post(this.form.get('title')?.value,this.form.get('description')?.value)));
  }
}
