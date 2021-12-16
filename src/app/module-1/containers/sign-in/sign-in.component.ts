import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import * as faker from 'faker';
import { isEmpty } from 'src/app/util/form-validations';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public signin : FormGroup = new FormGroup({
    nickname : new FormControl()
  })

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public setRandomName() : void{
    this.signin.patchValue({nickname:faker.name.firstName()});
  }

  public onContinue() : void{
    const nickname = this.signin.controls.nickname.value;
    localStorage.setItem('nickname',nickname);
    this.router.navigateByUrl('/home')
  }

  public isNicknameEmpty() : boolean{
    return isEmpty(this.signin.controls.nickname.value);
  }
}
