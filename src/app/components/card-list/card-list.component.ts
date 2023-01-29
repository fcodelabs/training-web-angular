import { Component } from '@angular/core';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { Observable } from 'rxjs';
import {
  cardsSelector,
  errSelector,
  isLoadingSelector,
} from './../../../store/selectors/postsSelector';

import { OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as PostsActions from '../../../store/actions/postAction';
import { PostInterface } from 'src/app/models/post-interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  data = [1, 2, 3, 4, 5, 6, 7, 8];
 



  ngOnInit(): void {
   
  }
}
