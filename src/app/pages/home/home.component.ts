import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Post from '../../models/Post';
import {select, Store} from "@ngrx/store";
import {submitPost} from "../../store/actions/add-post.actions";
import {Observable} from "rxjs";
import {selectPosts} from "../../store/selectors/post.selectors";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public form: FormGroup;
  public posts:Observable<Post[]> = this.store.pipe(select(selectPosts))
  constructor(private store:Store ) {
    this.form = new FormGroup({
      title: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required)
    })
  }
  ngOnInit(): void {
  }


  submitForm() {
    let post = new Post(this.form.get('title')?.value,this.form.get('description')?.value);
    this.store.dispatch(submitPost({post:post}));
  }
}
