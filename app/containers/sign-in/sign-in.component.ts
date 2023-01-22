import { Component } from '@angular/core';
import * as chance from 'chance';
import { ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  encapsulation: ViewEncapsulation.None,
 
})
export class SignInComponent {
  username: string;
  public thumbnailSrc =
    'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg';
  public cover =
    'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/black_sea.jpg';
  constructor() {
    this.username = '';
  }

  handleClick() {
    const generator = new chance();
    this.username = generator.name();
  }
  handleChange(value: string) {
    this.username = value;
  }
  public userForm: FormGroup = new FormGroup({
    userName: new FormControl(),
  });
}
