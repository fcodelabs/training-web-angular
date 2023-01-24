import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public logout(): void {
    let confirm: boolean = false;
    window.confirm('Are you sure you want to logout?') && (confirm = true);
    if (confirm) {
      localStorage.setItem('isLoggedIn', 'false');
      localStorage.removeItem('userName');
      window.location.reload();
    }
  }
}
