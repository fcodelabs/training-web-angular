import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  data = [1, 2, 3, 4, 5, 6, 7, 8];
  test1 = 'test1';
  test2 = 'test2';
  test3 = 'test3';

  ngOnInit(): void {}
}
