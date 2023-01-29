import { Component, ViewChild } from "@angular/core";
import * as chance from "chance";
import { ViewEncapsulation } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as UserActions from "../../../store/actions/userAction";
import { Store, select } from "@ngrx/store";
import { AppStateInterface } from "src/app/types/appState.interface";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment"; 


@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SignInComponent {
  public imageSrc: string = environment.loginSrc;
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
