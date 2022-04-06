import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginForm!: FormGroup;
  nickname: string;
  constructor(private loginService: LoginService, private router: Router) { }
  @Output() event = new EventEmitter<String>()

  ngOnInit(): void {
   //let nickname = '';

    this.loginForm = new FormGroup({
    //  nickname: new FormControl(nickname, [Validators.required])
     nickname: new FormControl(this.nickname, [Validators.required])

    })
  }

  public signIn() {
    this.loginService.setUsername(this.loginForm.value.nickname);
    this.event.emit(this.loginForm.value.nickname);

    this.router.navigate(["/home"]);
  }

}
