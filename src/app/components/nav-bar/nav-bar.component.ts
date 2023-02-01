import { Component } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  // Do not show the Dialog initially.
  opened = false;


  close(): void {
    this.opened = false;
  }

  open(): void {
    this.opened = true;
  }

  logOut(): void {
   
  }
}
