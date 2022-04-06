import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/card-module/store/states/app.state';
import { Card } from '../../models/card.model';
import { LoginService } from '../../services/login.service';
import { addPost } from '../../store/actions/card.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {

  public cardForm!: FormGroup;
  index: number = 0;
  // user: 'Krishalika';
  // constructor(private store: Store<AppState>) { }

  user: string;
  constructor(private store: Store<AppState>, private loginService: LoginService) { }

  ngOnInit(): void {
    let title = '';
    let description = '';


    this.cardForm = new FormGroup({
      title: new FormControl(title),
      description: new FormControl(description)
    });

    this.user = this.loginService.getUsername()
    console.log("Username is: ",this.loginService.getUsername());
    

  }

  public submitForm(): void {
    const title = this.cardForm.value.title;
    const description = this.cardForm.value.description;

    const post: Card = {
      // user: "Krishalika",

      user: this.loginService.getUsername(),
      title: title,
      description: description,
      created: new Date()
    }
    if (title && description) {
      console.log(title);
      console.log(description);
      this.store.dispatch(addPost({ post }));
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
