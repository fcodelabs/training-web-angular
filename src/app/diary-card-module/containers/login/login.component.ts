import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  constructor(private route:Router) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required,),
    })
  }

  ngOnInit(): void {
    const userName = localStorage.getItem('userName');
    if (userName){
      this.route.navigate(['']);
    }
  }
  public selectRandom():void{
    const names = ["Kamal","Nimal","Sahan","Binura", "Pathum", "Avishka"];
    let randName = names[Math.floor(Math.random() * names.length)];
    this.form.controls['name'].setValue(randName);
  }
  public login():void {
    console.log(this.form.get('name')?.value)
    const user = this.form.get('name')?.value
    localStorage.setItem('userName', user);
    this.route.navigate(['']);
  }
}
