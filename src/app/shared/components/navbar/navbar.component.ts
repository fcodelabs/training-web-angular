import {Component, NgZone, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit{


  constructor(private zone: NgZone,private router: Router) {}

  ngOnInit(): void {
  }

  public logout() :void{
    localStorage.removeItem("nickname")
    this.router.navigateByUrl('/').then(r => console.log("navigate error"))
  }
}
