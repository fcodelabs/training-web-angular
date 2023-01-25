import { LoadingComponent } from './components/loading/loading.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { PostsEffects } from './../store/effects/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { CardFormComponent } from './components/card-form/card-form.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { DataCardComponent } from './components/data-card/data-card.component';
import { reducers } from '../store/reducers/postReducer';
import { EffectsModule } from '@ngrx/effects';
import { IconsModule } from '@progress/kendo-angular-icons';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LabelModule } from '@progress/kendo-angular-label';

@NgModule({
  declarations: [
    NavBarComponent,
    HomePageComponent,
    CardFormComponent,
    CardListComponent,
    DataCardComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([PostsEffects]),
    LayoutModule,
    IconsModule,
    ButtonsModule,
    DialogsModule,
    LabelModule,
  ],
  exports: [HomePageComponent],
})
export class PostModule {}
