import { UserInterface } from "src/app/models/user-interface";
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from "@angular/core";
import { Store, select } from "@ngrx/store";
import { addPostStart } from "src/app/store/actions/postAction";
import { AppStateInterface } from "src/app/types/appState.interface";
import { userSelector } from "./../../../store/selectors/userSelector";
import { first, Observable } from "rxjs";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-card-form",
  templateUrl: "./card-form.component.html",
  styleUrls: ["./card-form.component.scss"],
})
export class CardFormComponent {
  username$: Observable<string | undefined>;
  username: string | undefined;
  visible: boolean = false;
  height: string = "220px";
  addCardForm!: FormGroup;

  constructor(
    private store: Store<AppStateInterface>,
    //private elementRef: ElementRef,
    private fb: FormBuilder
  ) {
    this.username$ = this.store.pipe(select(userSelector));
  }

  ngOnInit(): void {
    this.addCardForm = this.fb.group({
      title: ["", Validators.required],
      description: ["", [Validators.required]],
    });
  }

  formSubmit() {
    console.log(this.addCardForm.value.description);
    this.username$.pipe(first()).subscribe((val) => (this.username = val));
    if (!this.addCardForm.valid) {
      alert("Please fill the form");
    } else {
      if (this.username) {
        this.store.dispatch(
          addPostStart({
            post: {
              id: "none",
              title: this.addCardForm.value.title,
              description: this.addCardForm.value.description,
              username: this.username,
              color: "#fff",
            },
          })
        );
        this.addCardForm.reset();
      } else {
        alert("Please login to add a post");
      }
    }
  }

  public handleClick(): void {
    this.height = "350px";
  }
  onClickOutside() {
    this.height = "220px";
  }
}
