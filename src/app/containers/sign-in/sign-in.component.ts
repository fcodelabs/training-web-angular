import { Component, ViewChild } from "@angular/core";
import * as chance from "chance";
import { ViewEncapsulation } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as UserActions from "../../../store/actions/userAction";
import { Store, select } from "@ngrx/store";
import { AppStateInterface } from "src/app/types/appState.interface";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SignInComponent {
  public thumbnailSrc =
    "https://firebasestorage.googleapis.com/v0/b/dailydiary-96e2f.appspot.com/o/rose-flower-icon-vector-3720361.jpg?alt=media&token=6633787a-d348-4287-a29a-0e251002f1e0";

  constructor(
    private router: Router
  ) {}
  ngOnInit(): void {}

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
  });

  handleClick() {
    const generator = new chance();
    this.loginForm.controls["username"].setValue(generator.name());
  }

  submitForm(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      localStorage.setItem("username", this.loginForm.value.username);
      this.router.navigate(["/home"]);
    } else {
      alert("Please enter a username");
    }
  }
}
